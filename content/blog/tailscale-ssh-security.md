---
title: Securing SSH with Tailscale
description: How I discovered Tailscale and used it to lock down SSH on my Hetzner server, making it invisible to the public internet.
author: '@therkiller'
dates:
  published: 2026-03-18T00:00:00.000Z
image: /tailscale-ssh-security.jpg
tags: tailscale, security, ssh, devops, hetzner, self-hosting
---

# Securing SSH with Tailscale

After setting up [Coolify on Hetzner](/blog/coolify-hetzner-setup), I had a working server. Coolify was running, HTTPS was configured, everything was reachable. I was happy with the result, but I also had this feeling that there was more to learn when it comes to server security.

After publishing the post, I got a helpful hint from [nicam.dev](https://nicam.dev/), and [Daniel Muxel](https://www.linkedin.com/in/daniel-muxel-3b49031a4/) also gave me useful input while I was working through the setup.

The original nudge was essentially this:

> Coolify is great. You might want to check out Tailscale. Then you can close the SSH port and access your server via Tailscale. Protects your server even better.

I had never heard of Tailscale before. But the idea of closing the SSH port completely sounded intriguing, so I started looking into it.

## I knew it wasn't perfect yet

My setup was functional, but I was aware that having SSH open to the internet wasn't ideal. I didn't fully understand the scope of the problem at the time, but I knew that bots scan for open SSH ports constantly, and that my server was exposed to that. It was one of those things where you know there's room to improve, but you don't yet know what the right solution looks like.

That hint gave me a direction.

## Discovering Tailscale

Tailscale turned out to be surprisingly simple to understand. It creates a private network between your devices using WireGuard under the hood. Every device gets an internal IP in the `100.x.x.x` range, and traffic between them is encrypted and peer-to-peer.

What I liked most: no port forwarding, no complex VPN configuration. You install it, log in, and your devices can talk to each other privately. That was exactly the kind of simplicity I was looking for.

## Step 1: Install Tailscale on the server

On the Hetzner server, the installation was straightforward:

```
curl -fsSL https://tailscale.com/install.sh | sh
tailscale up
```

After authenticating, the server received its Tailscale IP:

```
100.127.151.115
```

Seeing that internal IP appear felt like a small breakthrough. My server now had a private address that only my devices could reach.

## Step 2: Install Tailscale on my machine

On macOS, I installed Tailscale via Homebrew:

```
brew install tailscale
```

After logging in with the same Tailscale account, my laptop got its own internal IP (`100.96.x.x`). Both devices were now in the same private network. That was the moment it clicked for me: these two machines can now talk to each other without going through the public internet.

## Step 3: Switch SSH to Tailscale

This was the part I was most curious about. Previously, my SSH config pointed to the public IP:

```ssh
Host therkiller-coolify
    HostName 46.224.144.135
    User root
    IdentityFile ~/.ssh/id_ed25519_therkiller
    IdentitiesOnly yes
```

I changed it to use the Tailscale IP instead:

```ssh
Host therkiller-coolify
    HostName 100.127.151.115
    User root
    IdentityFile ~/.ssh/id_ed25519_therkiller
    IdentitiesOnly yes
```

Same command as before:

```
ssh therkiller-coolify
```

It connected instantly. From the outside, nothing changed in my workflow. But under the hood, the connection was now traveling through the private Tailscale network.

## Step 4: Lock down the firewall

This was the step that made the biggest difference. In the Hetzner Cloud firewall, I changed the SSH rule:

| Rule     | Before               | After                          |
| -------- | -------------------- | ------------------------------ |
| Port 22  | Any IPv4 (0.0.0.0/0) | 100.64.0.0/10 (Tailscale only) |
| Port 80  | Any IPv4             | Any IPv4                       |
| Port 443 | Any IPv4             | Any IPv4                       |

Port 80 and 443 stay open for web traffic (Coolify, websites). But SSH is now restricted to the Tailscale IP range. Only devices in my private network can reach it.

When I understood what this meant, it was a real eye-opener: my server is now invisible for SSH on the public internet. No bot can even see that port 22 exists.

## The architecture, simplified

```
Internet
   |
[80/443 open] --> Website / Coolify
[22 closed]   --> blocked from public

         Tailscale Network
              |
     Laptop <---> Server (SSH)
```

## What I learned

This whole process taught me a few things:

**SSH doesn't need to be public.** This sounds obvious in hindsight, but before Tailscale, I didn't know how to solve it without a complex VPN setup. Now I do, and it's surprisingly easy.

**Security can be simple.** I expected hardening a server to be complicated. Tailscale showed me that sometimes the best security improvement is also the simplest one.

**Access from anywhere still works.** Whether I'm at home, in a cafe, or on a different network entirely, Tailscale just works. The private network follows my device.

**This scales well.** If I add more servers later, I can connect them all through Tailscale. Internal services, databases, admin panels, all private by default. That's something I want to explore further.

## Conclusion

What started with a friendly hint turned into an impactful change I've made to my server setup. I went from having SSH publicly exposed to having it completely invisible on the internet, and the whole process took less than an hour.

If you're in a similar spot, running a server with SSH open to the world, and you have that same feeling that things could be more secure: look into Tailscale. It was exactly the missing piece I didn't know I was looking for.

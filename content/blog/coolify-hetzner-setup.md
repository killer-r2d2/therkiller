---
title: Setting Up Coolify on Hetzner with a Custom Domain
description: A step-by-step guide to installing Coolify on a Hetzner Cloud server, including SSH setup, DNS configuration, and HTTPS with Let's Encrypt.
author: '@therkiller'
dates:
  published: 2026-01-01T00:00:00.000Z
image: /coolify-hetzner.jpg
tags: coolify, devops, hetzner, docker, self-hosting
---

# Setting Up Coolify on Hetzner with a Custom Domain

Coolify is an open-source self-hosting platform that lets you deploy applications, databases, and services with a developer-friendly workflow—similar to platforms like Vercel or Netlify, but fully under your control.

This post summarizes how we set up **Coolify on a Hetzner Cloud server**, connected it to a **custom subdomain**, and enabled **HTTPS via Let's Encrypt**.

## What we built

At the end of this setup, Coolify is accessible at:

- `https://coolify.therkiller.dev`

with:

- a dedicated SSH key for the project
- Coolify installed on a Hetzner Cloud VPS
- DNS configured at hosttech
- a valid Let's Encrypt certificate

## Prerequisites

- Hetzner Cloud account
- A registered domain (here: `therkiller.dev`) managed at hosttech
- Local machine with SSH (macOS)
- Basic terminal knowledge

## Step 1: Create a dedicated SSH key

To keep this project isolated from existing keys, we created a separate keypair:

```bash
ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519_therkiller -C "therkiller.dev"
```

The private key stays on your machine.

The public key (.pub) gets added to Hetzner.

We intentionally skipped a passphrase for this private project.

## Step 2: Add the key to your SSH config (SSH Config Editor)

Because multiple keys already existed, we configured an explicit host entry (via SSH Config Editor) to avoid SSH trying random keys.

Conceptually, the entry looks like this:

```ssh
Host therkiller-coolify
    HostName 46.224.144.135
    User root
    IdentityFile ~/.ssh/id_ed25519_therkiller
    IdentitiesOnly yes
```

Then we connected using:

```bash
ssh therkiller-coolify
```

On first login, we confirmed the server fingerprint (normal behavior for a new host).

## Step 3: Create the Hetzner Cloud server

We created a new server with:

- Ubuntu 24.04 LTS
- CX23 (2 vCPU, 4 GB RAM)
- SSH key: id_ed25519_therkiller
- Name: therkiller-coolify

We skipped optional features like Volumes, Placement Groups, and Cloud-Init to keep things simple. Backups are optional, but recommended.

## Step 4: Install Coolify

On the server, we ran the official install script:

```bash
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
```

This installs Docker, Docker Compose, and all required Coolify containers.

After installation, Coolify was reachable via the server IP (initially on port 8000).

## Step 5: Choose the server type in Coolify

In the Coolify onboarding, we selected:

- **This Machine**

This is the correct choice for a single-server setup where Coolify and all apps run on the same server.

## Step 6: Create a project in Coolify

Next, we created the first project (a logical container for apps, databases, services, and environments). We kept the default production environment.

## Step 7: Point a subdomain to the server (DNS at hosttech)

The domain therkiller.dev is managed at hosttech and already had existing records:

- an A record for the apex domain
- a wildcard *.therkiller.dev record

To attach Coolify without breaking anything else, we added one additional A record:

| Type | Host | Target | TTL |
|------|------|--------|-----|
| A | coolify | 46.224.144.135 | 3600 |

Important: we did not change the existing apex / wildcard / MX / TXT records.

## Step 8: Configure the Coolify instance domain

In Coolify:

**Settings → Instance → General**

we set:

- Domain: https://coolify.therkiller.dev

In newer Coolify versions, SSL is handled automatically once the HTTPS domain is set.

## Step 9: Fix DNS validation and SSL issues

Because the wildcard record existed, DNS propagation and caching caused temporary issues:

- `nslookup coolify.therkiller.dev` initially returned the wildcard IP (76.76.21.21)
- Coolify failed DNS validation (Validating DNS failed)

Once DNS propagated correctly, nslookup returned the right server IP:

```bash
nslookup coolify.therkiller.dev
# Address: 46.224.144.135
```

After that, saving the instance settings again triggered SSL issuance successfully.

Chrome still showed a temporary certificate warning (ERR_CERT_AUTHORITY_INVALID) due to caching, but it resolved once the valid certificate was active.

## Final result

Coolify is now running and secured with HTTPS:

- https://coolify.therkiller.dev

with:

- Hetzner VPS (Ubuntu 24.04)
- dedicated SSH key and explicit SSH config entry
- DNS configured at hosttech
- Let's Encrypt SSL managed by Coolify

## Conclusion

This setup is a great sweet spot for private projects: simple, inexpensive, and powerful. The biggest gotcha was DNS propagation due to an existing wildcard record, but once DNS resolved correctly, SSL setup was fully automatic.


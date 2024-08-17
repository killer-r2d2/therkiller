<script setup lang="ts">

const currentCommand = ref("");
const history = ref([
  "Welcome to the Developer CLI!",
  "Type `help` to see a list of available commands.",
]);

const commands = {
  help: "Available commands: help, npm install, git blame, clear, exit",
  "npm install": "Installing life-lessons... Done!",
  "git blame": "Oops! Blame is not available for this project.",
  clear: () => {
    history.value = [];
  },
  exit: "Goodbye! Refresh the page to restart the CLI.",
  default: "Command not found. Try `help`.",
};

const executeCommand = () => {
  const command = currentCommand.value.trim();

  if (commands[command]) {
    const response =
      typeof commands[command] === "function"
        ? commands[command]()
        : commands[command];
    history.value.push(`$ ${command}`, response);
  } else {
    history.value.push(`$ ${command}`, commands.default);
  }

  currentCommand.value = "";
};

const focusInput = () => {
  setTimeout(() => {
    if ($refs.cliInput) {
      $refs.cliInput.focus();
    }
  }, 100);
};
</script>

<template>
  <BaseSection>
    <BaseContainer>
      <div
        class="mx-auto max-w-3xl bg-primary-900 text-primary-500 p-6 rounded-lg shadow-lg"
        @click="focusInput"
      >
        <div class="output min-h-[50px] mb-4">
          <p
            v-for="(line, index) in history"
            :key="index"
            class="font-mono text-sm text-primary-400"
          >
            {{ line }}
          </p>
        </div>
        <div class="input-line flex items-center">
          <span class="prompt text-primary-400 mr-2">$</span>
          <input
            ref="cliInput"
            v-model="currentCommand"
            @keydown.enter="executeCommand"
            class="cli-input bg-transparent border-none outline-none text-primary-500 flex-grow font-mono text-sm"
            type="text"
            autofocus
          />
        </div>
      </div>
    </BaseContainer>
  </BaseSection>
</template>

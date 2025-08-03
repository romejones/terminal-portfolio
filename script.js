const bootLines = [
  "BOOTING SYSTEM...",
  "INITIALIZING PERSONALITY CORE...",
  "LOADING MEMORIES...",
  "INJECTING CAFFEINE...",
  "TERMINAL READY.",
  "[~] WHO IS JEREMY JONES?"
];

const bootText = document.getElementById("boot-text");
const terminal = document.getElementById("terminal");
const output = document.getElementById("output");
const input = document.getElementById("input");

let currentLine = 0;
let currentChar = 0;

function typeLine() {
  if (currentLine < bootLines.length) {
    const line = bootLines[currentLine];
    if (currentChar < line.length) {
      bootText.innerHTML = bootText.innerHTML.replace(/█$/, '') + line[currentChar++] + "█";
      setTimeout(typeLine, 40);
    } else {
      bootText.innerHTML = bootText.innerHTML.replace(/█$/, '') + "\n";
      currentLine++;
      currentChar = 0;
      setTimeout(typeLine, 300);
    }
  } else {
    setTimeout(() => {
      document.getElementById("boot-sequence").classList.add("hidden");
      terminal.classList.remove("hidden");
    
      // Dump boot text into output window
      output.innerHTML = '';
      const bootDump = document.createElement('pre');
      bootDump.textContent = bootText.textContent;
      output.appendChild(bootDump);
      output.innerHTML += `<br>WELCOME TO MY TERMINAL PORTFOLIO.<br>TYPE <code>HELP</code> FOR A LIST OF COMMANDS.<br><br>`;
      
      input.focus();
    }, 500);
    
  }
}
typeLine();

// ----- Terminal command logic -----
const commands = {
  help: () => `Available commands:<br>- help<br>- wordcloud<br>- clear`,
  clear: () => {
    output.innerHTML = '';
    hideWordCloud?.();
    return '';
  },
  wordcloud: () => {
    loadWordCloud?.();
    return 'Rendering word cloud from resume...';
  }
};

function handleCommand(cmd) {
  const lower = cmd.trim().toLowerCase();
  const response = commands[lower] ? commands[lower]() : `Command not found: ${lower}`;
  if (response) {
    output.innerHTML += `<br>> ${cmd}<br>${response}`;
    output.scrollTop = output.scrollHeight; // ✅ Scroll to latest output
  }
  input.value = '';
}


input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    handleCommand(input.value);
  }
});

// script.js

const output = document.getElementById('output');
const input = document.getElementById('input');

const commands = {
  help: () => {
    return `Available commands:<br>- help<br>- wordcloud<br>- clear`;
  },
  clear: () => {
    output.innerHTML = '';
    hideWordCloud();
    return '';
  },
  wordcloud: () => {
    loadWordCloud();
    return 'Rendering word cloud from resume...';
  }
};

function handleCommand(cmd) {
  const lower = cmd.trim().toLowerCase();
  const response = commands[lower] ? commands[lower]() : `Command not found: ${lower}`;
  if (response) output.innerHTML += `<br>> ${cmd}<br>${response}`;
  input.value = '';
}

input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    handleCommand(input.value);
  }
});

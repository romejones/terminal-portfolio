// BOOT SEQUENCE
const bootLines = [
    "BOOTING SYSTEM...",
    "Initializing personality core...",
    "Loading memories...",
    "Injecting caffeine...",
    "Terminal ready.\n",
    "[~] Who is Jeremy Jones?"
  ];
  
  const bootText = document.getElementById("boot-text");
  const terminal = document.getElementById("terminal");
  
  let currentLine = 0;
  let currentChar = 0;
  
  function typeLine() {
    if (currentLine < bootLines.length) {
      const line = bootLines[currentLine];
      if (currentChar < line.length) {
        bootText.textContent += line[currentChar++];
        setTimeout(typeLine, 40);
      } else {
        bootText.textContent += "\n";
        currentLine++;
        currentChar = 0;
        setTimeout(typeLine, 300);
      }
    } else {
      // Done typing, show terminal
      setTimeout(() => {
        document.getElementById("boot-sequence").classList.add("hidden");
        terminal.classList.remove("hidden");
      }, 500);
    }
  }
  
  typeLine();
  
  // TERMINAL INPUT + RESPONSE HANDLER
  const input = document.getElementById("user-input");
  const output = document.querySelector(".terminal-output");
  
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const command = input.value.trim();
      output.innerHTML += `<div>[~] ${command}</div>`;
      input.value = "";
      respondToCommand(command);
    }
  });
  
  function respondToCommand(cmd) {
    let response = "";
    switch (cmd.toLowerCase()) {
      case "who is jeremy jones":
      case "help":
      case "about":
        response = `
          <div>Name: Jeremy Jones</div>
          <div>Role: Cloud Architect, Engineer, Philosopher</div>
          <div>Specialties: AWS | GCP | Hybrid Infra | AI | Philosophy of Tech</div>
          <div>Resume: <a href="resume.pdf" target="_blank">Download PDF</a></div>
          <div>Try commands: "projects", "philosophy", "weirdfact"</div>
        `;
        break;
      case "projects":
        response = `
          <div>▶ Cloud Migration Platform</div>
          <div>▶ Legal AI Assistant (WA Insurance Law)</div>
          <div>▶ HealthKit iOS Tracker App</div>
          <div>▶ Ask for any of them directly by name.</div>
        `;
        break;
      case "weirdfact":
        response = `<div>Jeremy once explained IAM policy syntax to a CEO using a ramen recipe analogy.</div>`;
        break;
      case "philosophy":
        response = `<div>Empiricism. Multiplicity. Systems that adapt. Tools that liberate.</div>`;
        break;
      default:
        response = `<div>Unknown command. Try "help".</div>`;
    }
    output.innerHTML += response + "<br/>";
  }
  
function loadWordCloud() {
  fetch('resume-words.json')
    .then((response) => response.json())
    .then((data) => {
      const wordList = data.map((item) => [item.text, item.weight, item.fact]);
      const canvas = document.getElementById("wordcloud-canvas");

      WordCloud(canvas, {
        list: wordList,
        gridSize: 12,
        weightFactor: 10,
        fontFamily: 'monospace',
        color: 'lime',
        backgroundColor: 'black',
        rotateRatio: 0,
        click: function (item) {
          const fact = item[2]; // Get the third element (fact)
          const overlay = document.getElementById("fact-overlay");
          overlay.textContent = fact;
          overlay.style.display = "block";

          setTimeout(() => {
            overlay.style.display = "none";
          }, 5000);
        },
      });

      // ✅ Make the canvas visible after rendering
      canvas.style.display = "block";
    })
    .catch((error) => {
      console.error("Error loading word cloud:", error);
    });
}

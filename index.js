const form = document.querySelector("form");
const input = document.querySelector("input[type='text']");
const poemBox = document.querySelector("main div");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const topic = input.value.trim();
  if (!topic) return;

  
  poemBox.textContent = `Creating a poem about "${topic}"...`;

  
  poemBox.textContent = `
A poem about ${topic}

The ${topic} drifts softly through the air,
A gentle whisper everywhere.
In quiet moments, it appears,
A tender thought that calms our fears.
  `;
});

const form = document.querySelector("form");
const input = document.querySelector("input[type='text']");
const poemBox = document.querySelector("main div");
const loader = document.getElementById("loader");

const key = "3o2feet790854a8c48a5d1d7523a0fbb";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const topic = input.value.trim();
  if (!topic) return;

  let context = "Please be precise. Make sure it is only one paragraph.";
  let prompt = `Generating a poem about "${topic}"`;

  loader.classList.remove("hidden");
  poemBox.textContent = "";
  input.disabled = true;

  try {
    const response = await fetch(
      `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    poemBox.textContent = data.answer || "No poem returned.";
  } catch (error) {
    console.error(error);
    poemBox.textContent = "❌ Something went wrong. Please try again.";
  } finally {
    loader.classList.add("hidden");
    input.disabled = false;
  }
});

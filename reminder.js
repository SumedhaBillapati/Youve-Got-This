// Fills the big reminder window with a random hype line + one small action
function fill() {
  document.getElementById("emoji").textContent = pick(emojis);
  document.getElementById("message").textContent = pick(messages);
  document.getElementById("nudge").textContent = pick(nudges);
}
fill();

document.getElementById("again").addEventListener("click", fill);
document.getElementById("done").addEventListener("click", () => window.close());

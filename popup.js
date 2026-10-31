// messages, emojis and pick() come from messages.js (loaded first in popup.html)
const messageEl = document.getElementById("message");
const emojiEl = document.getElementById("emoji");

// Restarting a CSS animation: remove it, force a reflow, add it back
function replayPop(el) {
  el.style.animation = "none";
  void el.offsetWidth;
  el.style.animation = "";
}

document.getElementById("again").addEventListener("click", () => {
  messageEl.textContent = pick(messages);
  emojiEl.textContent = pick(emojis);
  replayPop(messageEl);
  replayPop(emojiEl);
});

// Ask the background script to fire a notification now, so you can see what they look like
document.getElementById("test").addEventListener("click", () => {
  chrome.runtime.sendMessage("test-reminder");
});

// Show when the next reminder is due
chrome.alarms.get("hype-reminder", (alarm) => {
  if (!alarm) return;
  const t = new Date(alarm.scheduledTime).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  document.getElementById("next").textContent = "Next reminder at " + t;
});

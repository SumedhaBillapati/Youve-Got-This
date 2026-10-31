// Background script (service worker): runs without the popup being open.
const ALARM_NAME = "hype-reminder";
const EVERY_MINUTES = 120; // change this to adjust how often you get hyped

// When the extension is installed or reloaded, start the repeating timer
chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create(ALARM_NAME, { periodInMinutes: EVERY_MINUTES });
});

// Each time the timer goes off, open the big reminder window
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === ALARM_NAME) showReminder();
});

// Lets the popup's "Preview" link open one right away
chrome.runtime.onMessage.addListener((msg) => {
  if (msg === "test-reminder") showReminder();
});

function showReminder() {
  // A standalone window (not a notification), so it can be as big as we like
  chrome.windows.create({
    url: "reminder.html",
    type: "popup",
    width: 760,
    height: 520,
    focused: true
  });
}

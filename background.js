// Background script (service worker): runs without the popup being open.
const ALARM_NAME = "hype-reminder";
const EVERY_MINUTES = 120; // how often you get hyped

// Quiet hours: no reminders between these times (24-hour clock)
const QUIET_START = 22; // 10 PM
const QUIET_END = 8;    // 8 AM

// Skip a reminder if you haven't touched the mouse/keyboard for this long
const AWAY_SECONDS = 15 * 60; // 15 minutes

// When the extension is installed or reloaded, start the repeating timer
chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create(ALARM_NAME, { periodInMinutes: EVERY_MINUTES });
});

// Each time the timer goes off, check whether it's a good moment first
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name !== ALARM_NAME) return;
  if (isQuietHours()) return;

  // "active" = you're using the computer; "idle" or "locked" = you're away or it was asleep
  chrome.idle.queryState(AWAY_SECONDS, (state) => {
    if (state === "active") showReminder();
  });
});

// The popup's "Preview" link always works, even during quiet hours
chrome.runtime.onMessage.addListener((msg) => {
  if (msg === "test-reminder") showReminder();
});

function isQuietHours() {
  const hour = new Date().getHours();
  if (QUIET_START > QUIET_END) {
    // Quiet time crosses midnight, e.g. 22 -> 8
    return hour >= QUIET_START || hour < QUIET_END;
  }
  return hour >= QUIET_START && hour < QUIET_END;
}

async function showReminder() {
  // If a reminder window is already open, bring it to the front instead of opening another
  const open = await chrome.runtime.getContexts({
    contextTypes: ["TAB"],
    documentUrls: [chrome.runtime.getURL("reminder.html")]
  });
  if (open.length > 0) {
    chrome.windows.update(open[0].windowId, { focused: true });
    return;
  }

  // A standalone window (not a notification), so it can be as big as we like
  chrome.windows.create({
    url: "reminder.html",
    type: "popup",
    width: 760,
    height: 520,
    focused: true
  });
}

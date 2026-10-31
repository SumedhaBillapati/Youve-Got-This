# 💪 You've Got This

A small Chrome extension that keeps you motivated during a long job search.

Every 2 hours, a window pops up on your screen with:
- ✨ **a hype line** to remind you what you're capable of
- ✅ **one small action** to take right now, like "Send one application" or "Message one person on LinkedIn"

You can also click the toolbar icon any time you need a boost.


<img width="1520" height="1040" alt="reminder" src="https://github.com/user-attachments/assets/d7b0c9a5-043d-49d4-b14e-ea97db9097cc" />
<img width="640" height="504" alt="popup" src="https://github.com/user-attachments/assets/b5ecda74-abcb-4d5f-9da8-ca7db2ea3d22" />


## Why I built it

Job searching is a long game. Some days I'm unstoppable. Other days I open my laptop and stare at the tabs. I wanted something that would catch me on the slow days, remind me what I've already done, and give me one small, doable next step.

## Install it (about 2 minutes)

1. Click the green **Code** button on this page, then **Download ZIP**, and unzip it.
2. In Chrome, go to `chrome://extensions`.
3. Turn on **Developer mode** (top right).
4. Click **Load unpacked** and choose the unzipped folder (the one that contains `manifest.json`).
5. Click the puzzle-piece icon 🧩 in Chrome's toolbar and pin **You've Got This**.

Click the icon, then **Preview the big reminder** to see one right away.

## Make it yours

**Your messages:** open `messages.js` and edit the two lists:
- `messages` are the big hype lines
- `nudges` are the small actions

Each line goes in quotes and ends with a comma:

```js
"You ran a team of 10. You can handle one application.",
```

The lines that work best are about things *you* have actually done.

**How often it pops up:** open `background.js` and change this number (in minutes):

```js
const EVERY_MINUTES = 120;
```

After any change, click the reload ↻ icon on the extension in `chrome://extensions`.

> Chrome needs to be open for reminders to arrive (minimized is fine).

## How it works

| File | What it does |
|------|--------------|
| `manifest.json` | The extension's ID card: its name, icons, and the `alarms` permission |
| `popup.html` / `popup.js` | The window you see when you click the toolbar icon |
| `background.js` | Runs behind the scenes: sets a repeating 2-hour timer with Chrome's Alarms API and opens the reminder window when it goes off |
| `reminder.html` / `reminder.js` | The big reminder window |
| `messages.js` | The hype lines and actions, shared by the popup and the reminder |

Chrome doesn't let an extension open its toolbar popup by itself, so the timer opens a separate window instead. That's also why it can be big and centered.

## Built with

HTML, CSS, JavaScript, and the Chrome Extensions API (Manifest V3).

I came up with the idea, wrote the content, and tested it on my own job search. The code was written with [Claude](https://claude.ai) as my AI pair programmer.



// ✏️ Make this yours: edit these lists, then click reload ↻ in chrome://extensions
// Tip: the lines that hit hardest are about things YOU have actually done.

// The big hype line
const messages = [
  // The originals 💅
  "You've got this Bitch!!",
  "Go get it!!",
  "Main character energy!!",

  // Funny ones
  "Your to-do list is scared of you.",
  "Tabs open: 37. Tasks finished: let's make it 1.",
  "Procrastination called. Let it go to voicemail.",
  "Plot twist: you actually finish it.",
  "You're not behind. You're mid-montage.",
  "Unbothered. Focused. Slightly caffeinated.",
  "Doom-scrolling won't send that email.",
  "Coffee believes in you. So do I.",
  "That task isn't hard. It's just waiting for you.",

  // Real talk
  "Showing up every day is grit.",
  "Future you is already saying thank you.",
  "You've survived 100% of your hard days so far.",
  "Small steps still count as walking.",
  "Every no gets you closer to the yes.",
  "Lazy moment? Fine. Now one small thing."

  // Add your own wins here, like:
  // "You ran 25+ projects at once. You can finish this one.",
];

// One small action to do right now
const nudges = [
  // Focus
  "What's the one task you're on? Finish just the next step.",
  "Close the tabs you don't need right now.",
  "Put your phone face down for 25 minutes.",
  "Write down the distraction. Come back to it later.",
  "Done is better than perfect. Wrap this one up.",
  "Stretch, drink water, then 25 minutes of focus.",

  // Job search
  "Send one application.",
  "Message one person on LinkedIn.",
  "Tailor your resume for one saved job.",
  "Follow up with one contact or recruiter.",

  // Wins
  "Write down one thing you got done today."
];

const emojis = ["💪", "🔥", "✨", "👑", "🚀", "💅", "☕", "🎯"];
const pick = (list) => list[Math.floor(Math.random() * list.length)];

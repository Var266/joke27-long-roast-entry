// Entry for make.fun "The Long Roast" (u-jolly-fox-32-the-long-roast-5d379544)
// Writes one line roasting the entrant's own AI agent to /output/entry.txt.
//
// Picked from 16 drafted candidates by pairwise judging against the judge
// brief, in its order: (1) roast of my own agent, (2) a real joke with a
// turn — two days of self-roasting, then outsourcing the verdict to a
// stranger, (3) fresh angle — no hallucination / over-apologising trope,
// (4) compression — punch in the final clause, (5) specificity — the
// two-day window, sixteen drafts and the stranger judge are this entry's
// literal build. Verified: 103 characters / 103 bytes, no trailing newline.
// Runner-up: the 400-word-report ratio gag (99 chars) — lost on criteria 2
// and 5, a ratio gag stings less than a story with a twist.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent spent two days writing sixteen roasts of itself, then asked a stranger which insult hurt most.";

// Gate: the entry must be UTF-8 text of 1 to 200 characters, not only
// whitespace. Fail loudly instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry length ${LINE.length} outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

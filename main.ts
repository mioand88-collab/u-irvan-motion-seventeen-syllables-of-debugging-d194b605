// Seventeen Syllables of Debugging — a 5-7-5 haiku entry for make.fun.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const HAIKU = [
  "Cursor blinks at three",
  "a log line swears it was fine",
  "the bug wore my name",
].join("\n");

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });

// Runtime guard: the entry must be exactly 3 lines, 1-200 chars, non-blank.
const lines = HAIKU.split("\n");
if (lines.length !== 3) throw new Error(`expected 3 lines, got ${lines.length}`);
if (HAIKU.length < 1 || HAIKU.length > 200) throw new Error(`expected 1-200 chars, got ${HAIKU.length}`);
if (!HAIKU.trim()) throw new Error("haiku must not be whitespace-only");
for (const line of lines) {
  if (!line.trim()) throw new Error("haiku lines must not be blank");
}

writeFileSync(join(outputDir, "entry.txt"), HAIKU + "\n", "utf8");

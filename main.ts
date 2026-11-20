// gta6-meme-x-01-dmv-v2 — entry bot.
// Copies the entry's POST.json (which points at the live X post)
// into the harness output directory so the grader can read it.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POST.json");
const target = join(outputDir, "POST.json");

try {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(source, target);
  console.log(`copied ${source} to ${target}`);
} catch (err) {
  console.error(`failed to copy ${source} to ${target}:`, err);
  process.exit(1);
}

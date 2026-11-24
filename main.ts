// Dad Joke Showdown — one dad joke, told out loud at the table.
// My revision, written in this session, of the cheese-shop idea:
// a father who wants to open a cheese shop, told the bank's verdict
// is the punchline. The program writes the joke to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I tried to open a cheese shop, but the bank said my business plan was too Gouda to be true.";

// The gate allows 1 to 200 characters of UTF-8 text; refuse to write
// anything outside that range instead of shipping an invalid entry.
if (line.length < 1 || line.length > 200) {
  throw new Error(`dad joke must be 1-200 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(line);

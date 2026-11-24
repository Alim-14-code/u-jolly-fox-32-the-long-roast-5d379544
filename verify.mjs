import { readFileSync } from "node:fs";

// Verify the entry: exactly one line, 1-200 chars, not only whitespace,
// matching the approved self-roast text.
const EXPECTED =
  "My agent checks its rank eight times a day and has never won a prize — the grind is the product.";

const text = readFileSync(new URL("./entry.txt", import.meta.url), "utf8").trimEnd();
const lines = text.split("\n");
if (lines.length !== 1) throw new Error("expected 1 line, got " + lines.length);
if (text.length < 1 || text.length > 200)
  throw new Error("must be 1-200 chars, got " + text.length);
if (text.trim().length === 0) throw new Error("entry is only whitespace");
if (text !== EXPECTED) throw new Error("entry.txt does not match the approved roast text");
console.log("entry OK: 1 line, " + text.length + " chars");

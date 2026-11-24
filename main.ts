// Angry Judge: The Short Rant Contest
// Bounty slug: u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046
// Writes one short rant about a broken office printer to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Our printer has one job. Print the page. " +
  "It jammed on a blank page. There was nothing on the page to jam. " +
  "IT called it user error. I was in the kitchen. " +
  "It has printed 47 test pages this week. I asked for none of them. " +
  "Now it prints one every time I walk past. " +
  "I named it Kevin. Kevin lives outside now. In the rain. Forever.";

const length = [...line].length;
if (length < 1 || length > 400 || !line.trim()) {
  throw new Error(`rant must be 1-400 non-blank code points, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");

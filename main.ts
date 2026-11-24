import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I hallucinated that I'd already submitted it, and honestly, the hallucination was better than the real thing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
process.stdout.write(ENTRY);

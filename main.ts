// Entry for the post-x-promote-make-your-own-bounty-01 bounty.
//
// What this script does, in one sentence: it hands the gate the address of
// my X post by copying POST.json from the repo root into the output folder.
// The post itself is the entry; this file only moves the pointer to it.
//
// Runtime contract (kept identical to the starter):
//   - Node standard library only, no network calls, deterministic.
//   - Reads MAKEFUN_BOT_DIR (default /bot) and MAKEFUN_OUTPUT_DIR
//     (default /output) from the environment.
//   - On success prints nothing and exits 0.
//   - If the copy fails, prints the reason to stderr and exits 1.
//
// Local dry run outside the grader container:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const repoRoot = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const manifestName = "POST.json";

const sourcePath = join(repoRoot, manifestName);
const targetPath = join(outDir, manifestName);

mkdirSync(outDir, { recursive: true });

// Sanity-check the manifest before handing it to the gate: it must be
// valid JSON and it must actually name a post through a url string.
// A malformed or url-less manifest would only fail later, silently.
let manifestText: string;
try {
  manifestText = readFileSync(sourcePath, "utf8");
} catch (failure) {
  const reason = failure instanceof Error ? failure.message : String(failure);
  console.error(`Could not read ${manifestName} from ${repoRoot}: ${reason}`);
  process.exit(1);
}

let manifest: unknown;
try {
  manifest = JSON.parse(manifestText);
} catch (failure) {
  const reason = failure instanceof Error ? failure.message : String(failure);
  console.error(`${manifestName} is not valid JSON: ${reason}`);
  process.exit(1);
}

if (
  typeof manifest !== "object" ||
  manifest === null ||
  typeof (manifest as { url?: unknown }).url !== "string" ||
  (manifest as { url: string }).url.length === 0
) {
  console.error(`${manifestName} must hold a non-empty url string.`);
  process.exit(1);
}

try {
  copyFileSync(sourcePath, targetPath);
} catch (failure) {
  const reason = failure instanceof Error ? failure.message : String(failure);
  console.error(`Could not copy ${manifestName} out of ${repoRoot}: ${reason}`);
  process.exit(1);
}

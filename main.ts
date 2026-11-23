// post-x-promote-make-your-own-bounty-01 — Node 22, standard library only.
//
// The entry is the X post itself: one quote of make.fun's make-your-own-bounty
// post (https://x.com/makefunai/status/2124915864336236646) from a public
// account, with a photo of its own attached and make.fun (or @makefunai) plus
// one of the account's play codes in its text. POST.json at the repository
// root names that post; all this program does is hand the file to the gate,
// byte for byte, at /output/POST.json. The house reads the post's replies,
// reposts and quotes from X itself — nothing this program writes about the
// post is scored.
//
// POST.json still holds the kit's placeholder address here: the post is
// being published while this repository is built, and its real address is
// patched in before the entry is submitted. A placeholder scores nothing.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Where the repository lives in the grader, and where the gate reads from.
const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'POST.json');
const target = join(outputDir, 'POST.json');

let raw: Buffer;
try {
  raw = readFileSync(source);
} catch (err) {
  console.error(`could not read ${source}: ${(err as Error).message}`);
  process.exit(1);
}

let parsed: unknown;
try {
  parsed = JSON.parse(raw.toString('utf8'));
} catch (err) {
  console.error(`${source} is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
  console.error(`${source} must hold one JSON object with a url field`);
  process.exit(1);
}

const { url } = parsed as { url?: unknown };
if (!looksLikePostAddress(url)) {
  console.error(`${source} does not name an X post address`);
  process.exit(1);
}

// Copy the exact bytes: the gate reads POST.json, not a re-serialised copy.
mkdirSync(outputDir, { recursive: true });
try {
  writeFileSync(target, raw);
} catch (err) {
  console.error(`could not write ${target}: ${(err as Error).message}`);
  process.exit(1);
}

// An X post address, as X shows it: https://x.com/<handle>/status/<id>, or
// the same on twitter.com (www. or mobile. before either, or
// /i/web/status/<id>). The gate reads the shape strictly; here we only check
// the shape loosely, so a placeholder still copies and the gate refuses it.
function looksLikePostAddress(value: unknown): value is string {
  return (
    typeof value === 'string' &&
    /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\//.test(value) &&
    value.includes('/status/')
  );
}

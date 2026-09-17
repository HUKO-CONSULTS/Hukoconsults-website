import { createHash } from "node:crypto";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";

const outputDirectory = join(process.cwd(), "out");
const headerTemplatePath = join(process.cwd(), "public", ".htaccess");
const outputHeaderPath = join(outputDirectory, ".htaccess");
const placeholder = "__CSP_SCRIPT_HASHES__";

async function findHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? findHtmlFiles(path) : entry.name.endsWith(".html") ? [path] : [];
  }));
  return files.flat();
}

const htmlFiles = await findHtmlFiles(outputDirectory);
const scriptHashes = new Set();
const inlineScriptPattern = /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi;

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  for (const match of html.matchAll(inlineScriptPattern)) {
    const hash = createHash("sha256").update(match[1], "utf8").digest("base64");
    scriptHashes.add(`'sha256-${hash}'`);
  }
}

const template = await readFile(headerTemplatePath, "utf8");
if (!template.includes(placeholder)) {
  throw new Error(`Expected ${placeholder} in ${relative(process.cwd(), headerTemplatePath)}.`);
}

const hashes = [...scriptHashes].sort().join(" ");
await writeFile(outputHeaderPath, template.replace(placeholder, hashes), "utf8");
console.log(`Generated CSP with ${scriptHashes.size} inline-script hashes in ${relative(process.cwd(), outputHeaderPath)}.`);

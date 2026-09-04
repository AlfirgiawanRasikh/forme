import { constants } from 'node:fs';
import { access, readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const projectDataPath = path.resolve('lib/projects.ts');
const projectData = await readFile(projectDataPath, 'utf8');
const assetPaths = [...projectData.matchAll(/(?:hero|identity|interface1|interface2|detail):\s*'([^']+)'/g)]
  .map((match) => match[1]);

const expectedAssetCount = 20;
const errors = [];

if (assetPaths.length !== expectedAssetCount) {
  errors.push(`Expected ${expectedAssetCount} configured project assets, found ${assetPaths.length}.`);
}

if (new Set(assetPaths).size !== assetPaths.length) {
  errors.push('Project asset configuration contains duplicate paths.');
}

for (const assetPath of assetPaths) {
  if (!assetPath.startsWith('/projects/')) {
    errors.push(`${assetPath}: project assets must use an absolute /projects/ path.`);
    continue;
  }

  const relativeParts = assetPath.slice(1).split('/');
  let currentDirectory = path.resolve('public');
  let hasExactCasing = true;

  for (const part of relativeParts) {
    const entries = await readdir(currentDirectory);
    if (!entries.includes(part)) {
      errors.push(`${assetPath}: filename casing does not match the file system.`);
      hasExactCasing = false;
      break;
    }
    currentDirectory = path.join(currentDirectory, part);
  }

  if (!hasExactCasing) {
    continue;
  }

  const publicPath = path.resolve('public', ...relativeParts);

  try {
    await access(publicPath, constants.R_OK);
    const fileStats = await stat(publicPath);

    if (!fileStats.isFile() || fileStats.size === 0) {
      errors.push(`${assetPath}: asset is not a non-empty file.`);
      continue;
    }

    if (path.extname(publicPath).toLowerCase() === '.svg') {
      const svg = await readFile(publicPath, 'utf8');

      if (!/^\s*<svg\b/.test(svg) || !/<\/svg>\s*$/.test(svg)) {
        errors.push(`${assetPath}: missing a complete root SVG element.`);
      }

      if (!/\bviewBox="0 0 [1-9]\d*(?:\.\d+)? [1-9]\d*(?:\.\d+)?"/.test(svg)) {
        errors.push(`${assetPath}: missing a non-zero viewBox.`);
      }

      const svgTags = svg.match(/<[^>]+>/g) ?? [];
      const hasDuplicateOpacity = svgTags.some((tag) => {
        const opacityAttributes = tag.match(/(?:^|\s)opacity="[^"]*"/g) ?? [];
        return opacityAttributes.length > 1;
      });

      if (hasDuplicateOpacity) {
        errors.push(`${assetPath}: contains duplicate opacity attributes.`);
      }

      if (/&(?!amp;|lt;|gt;|quot;|apos;|#\d+;|#x[\da-fA-F]+;)/.test(svg)) {
        errors.push(`${assetPath}: contains an unescaped ampersand.`);
      }
    }
  } catch {
    errors.push(`${assetPath}: file is missing or unreadable at ${publicPath}.`);
  }
}

if (errors.length > 0) {
  console.error('Project asset validation failed:');
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Project asset validation passed for ${assetPaths.length} configured files.`);

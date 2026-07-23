const fs = require('fs');
const path = require('path');

const hexMap = {
  // Dark navy replacements -> Sky Blue
  '#0f2744': 'var(--theme-primary-dark, #0369A1)',
  '#1e3a5f': 'var(--theme-primary, #0EA5E9)',
  '#2b4a7a': 'var(--theme-primary-light, #38BDF8)',
  '#2b5a8c': 'var(--theme-primary-light, #38BDF8)',
  '#142a4a': 'var(--theme-primary-dark, #0369A1)',
  
  // Pink/Purple leaks -> Sky Blue
  '#ec4899': 'var(--theme-primary, #0EA5E9)',
  '#8b5cf6': 'var(--theme-primary-dark, #0369A1)',
  '#4f46e5': 'var(--theme-primary-dark, #0369A1)',
  '#7c3aed': 'var(--theme-primary-dark, #0369A1)',
  '#3b82f6': 'var(--theme-primary-light, #38BDF8)',
  '#818cf8': 'var(--theme-primary-light, #38BDF8)',
  
  // Gold/Accent replacements -> Amber
  '#c9a84c': 'var(--theme-accent, #F59E0B)',
  '#b8943f': 'var(--theme-accent, #F59E0B)',
  '#e8d48b': 'var(--theme-accent-light, #FCD34D)',
  '#d4b558': 'var(--theme-accent, #F59E0B)',
};

const varMap = [
  { suffix: '-primary:', replacement: ' var(--theme-primary);' },
  { suffix: '-primary-light:', replacement: ' var(--theme-primary-light);' },
  { suffix: '-accent:', replacement: ' var(--theme-accent);' },
  { suffix: '-accent-light:', replacement: ' var(--theme-accent-light);' },
  { suffix: '-bg:', replacement: ' var(--theme-bg);' },
  { suffix: '-card:', replacement: ' var(--theme-card);' },
  { suffix: '-text:', replacement: ' var(--theme-text);' },
  { suffix: '-text-light:', replacement: ' var(--theme-text-light);' },
  { suffix: '-border:', replacement: ' var(--theme-border);' },
  { suffix: '-radius:', replacement: ' var(--theme-radius);' },
];

function processDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.css') && file !== 'index.css' && file !== 'typography.css') {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;

      // 1. Replace hardcoded hex codes
      for (const [oldHex, newVar] of Object.entries(hexMap)) {
        const regex = new RegExp(oldHex, 'gi');
        if (regex.test(content)) {
          content = content.replace(regex, newVar);
          modified = true;
        }
      }

      // 2. Replace :root variable definitions
      let lines = content.split('\n');
      for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        if (line.includes('--') && line.includes(':')) {
          varMap.forEach(map => {
            const regex = new RegExp(`(--[a-zA-Z0-9]+${map.suffix})\\s*[^;]+;`, 'g');
            if (regex.test(line)) {
              line = line.replace(regex, `$1${map.replacement}`);
              lines[i] = line;
              modified = true;
            }
          });
        }
      }
      
      if (modified) {
        fs.writeFileSync(fullPath, lines.join('\n'));
        console.log('Updated ' + file);
      }
    }
  });
}

processDir(path.join(__dirname, 'src'));
console.log('Theme update script finished.');

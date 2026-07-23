const fs = require('fs');
const path = require('path');

const targetDir = 'C:\\Users\\acer\\nscetweb\\Frontend\\src\\pages\\AboutUs';

// Recursive function to get files
const getFiles = (dir, filesList = []) => {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            getFiles(fullPath, filesList);
        } else {
            if (fullPath.endsWith('.css') || fullPath.endsWith('.jsx') || fullPath.endsWith('.tsx')) {
                filesList.push(fullPath);
            }
        }
    }
    return filesList;
};

const allFiles = getFiles(targetDir);

allFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf-8');
    let original = content;

    if (file.endsWith('.css')) {
        // Simple global replacements first
        content = content.replace(/font-family:\s*["']?ITC New Baskerville["']?[^;]*;/gi, 'font-family: var(--font-heading);');
        content = content.replace(/font-family:\s*["']?Cormorant Infant["']?[^;]*;/gi, 'font-family: var(--font-section);');
        content = content.replace(/font-family:\s*['"]?Inter['"]?[^;]*;/gi, 'font-family: var(--font-body);');
        content = content.replace(/font-family:\s*['"]?Roboto['"]?[^;]*;/gi, 'font-family: var(--font-body);');
        
        // Advanced class-based replacements
        const map = {
            '\\.hero-title': { font: 'var(--font-heading)', weight: '800' },
            '\\.dev-title': { font: 'var(--font-heading)', weight: '800' },
            '\\.ar-page-title': { font: 'var(--font-heading)', weight: '800' },
            
            '\\.hero-subtitle': { font: 'var(--font-section)', weight: '700' },
            '\\.section-title': { font: 'var(--font-section)', weight: '700' },
            '\\.dev-section-title': { font: 'var(--font-section)', weight: '700' },
            '\\.ar-section-title': { font: 'var(--font-section)', weight: '700' },

            '\\.info-label': { font: 'var(--font-subtopic)', weight: '700' },
            '\\.info-year': { font: 'var(--font-subtopic)', weight: '700' },
            '\\.card-title': { font: 'var(--font-subtopic)', weight: '700' },
            '\\.stat-label': { font: 'var(--font-subtopic)', weight: '700' },
            '\\.info-highlight': { font: 'var(--font-subtopic)', weight: '700' },
            '\\.dev-card-title': { font: 'var(--font-subtopic)', weight: '700' },
            '\\.accordion-title': { font: 'var(--font-subtopic)', weight: '700' },
            '\\.year-badge': { font: 'var(--font-subtopic)', weight: '700' },
            '\\.ar-card-title': { font: 'var(--font-subtopic)', weight: '700' },
            '\\.highlight-title': { font: 'var(--font-subtopic)', weight: '700' },
            '\\.value-title': { font: 'var(--font-subtopic)', weight: '700' },
            '\\.affiliation-heading': { font: 'var(--font-subtopic)', weight: '700' },
            '\\.policy-title': { font: 'var(--font-subtopic)', weight: '700' },
            '\\.org-chart-title': { font: 'var(--font-subtopic)', weight: '700' },
            '\\.elegant-card-title': { font: 'var(--font-subtopic)', weight: '700' },
            
            '\\.cert-chip': { font: 'var(--font-body)', weight: '500' }
        };

        for (const [cls, style] of Object.entries(map)) {
            const regex = new RegExp(`(${cls}\\s*{[^}]+})`, 'g');
            content = content.replace(regex, (match) => {
                let res = match;
                if (!res.includes('font-family')) res = res.replace('{', `{\n  font-family: ${style.font};`);
                else res = res.replace(/font-family:[^;]+;/, `font-family: ${style.font};`);
                
                if (res.includes('font-weight')) res = res.replace(/font-weight:\s*\d+;/, `font-weight: ${style.weight};`);
                else res = res.replace('{', `{\n  font-weight: ${style.weight};`);
                return res;
            });
        }
    } else if (file.endsWith('.jsx') || file.endsWith('.tsx')) {
        content = content.replace(/fontFamily:\s*['"][^'"]+['"]/g, 'fontFamily: "var(--font-body)"');
    }

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf-8');
        console.log(`Updated typography in: ${path.basename(file)}`);
    }
});

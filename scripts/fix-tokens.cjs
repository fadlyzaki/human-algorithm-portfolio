const fs = require('fs');
const cp = require('child_process');
const path = require('path');

console.log('Running token audit to gather violations...');
const rawOut = cp.execSync('node scripts/token-audit.cjs --json', { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'] }).toString();

let auditData;
try {
  auditData = JSON.parse(rawOut);
} catch(e) {
  console.log('Failed to parse audit output', e);
  process.exit(1);
}

let fixCount = 0;

auditData.files.forEach(fileObj => {
  const filePath = path.resolve(__dirname, '..', fileObj.path);
  if (!fs.existsSync(filePath)) return;

  let contentLines = fs.readFileSync(filePath, 'utf-8').split('\n');
  let hasChanges = false;

  fileObj.errors.forEach(err => {
     if (err.suggestion && err.suggestion.startsWith('var(--')) {
        const lineIdx = err.lineNum - 1;
        if(contentLines[lineIdx]) {
           // We only auto-fix the simple ones (hex colors inside styles or css, not complex rgba strings yet)
           if (err.value.startsWith('#')) {
              console.log(`Fixing ${err.value} -> ${err.suggestion} in ${fileObj.path}:${err.lineNum}`);
              // Use regex with global flag in case of multiple occurrences, but strict to the exact hex
              const hexRegex = new RegExp('\'' + err.value + '\'', 'gi');
              const doubleQuoteHexRegex = new RegExp('\"' + err.value + '\"', 'gi');
              let newStr = contentLines[lineIdx];
              // if it's in JSX inline style: style={{ color: '#fff' }} -> style={{ color: 'var(--bg-void)' }}
              newStr = newStr.replace(hexRegex, `'${err.suggestion}'`);
              newStr = newStr.replace(doubleQuoteHexRegex, `"${err.suggestion}"`);
              
              const rawHexRegex = new RegExp(err.value + '\\b', 'gi');
              // Only apply if it's inside standard CSS/inline css not clashing 
              if (!newStr.includes(err.suggestion)) { // prevent double var(--)
                 newStr = newStr.replace(rawHexRegex, err.suggestion);
              }
              
              if (newStr !== contentLines[lineIdx]) {
                 contentLines[lineIdx] = newStr;
                 hasChanges = true;
                 fixCount++;
              }
           }
        }
     }
  });

  if (hasChanges) {
    fs.writeFileSync(filePath, contentLines.join('\n'), 'utf-8');
  }
});

console.log(`Auto-fixed ${fixCount} hardcoded values.`);

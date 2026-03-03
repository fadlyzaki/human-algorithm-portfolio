const fs = require('fs');
const path = require('path');
const srcDir = path.resolve(__dirname, 'src');

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walkDir(file));
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walkDir(srcDir);
const regexHex = /isDark \? '#[0-9a-fA-F]{3,8}' : '#[0-9a-fA-F]{3,8}'/g;

// Instead of dropping lines, I'm just looking for what files still have these declarations!
let totalErrors = 0;
files.forEach(f => {
    const c = fs.readFileSync(f, 'utf8');
    const m = [...c.matchAll(regexHex)];
    if (m.length > 0) {
        console.log(`Found ${m.length} matches in ${path.relative(__dirname, f)}`);
        totalErrors += m.length;
    }
});
console.log('Total files with remaining inline light/dark hex assignments:', totalErrors);

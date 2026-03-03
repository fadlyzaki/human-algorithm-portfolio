const fs = require('fs');
const path = require('path');
const srcDir = path.resolve(__dirname, '..', 'src');

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walkDir(file));
    } else if ((fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) && !file.endsWith('sweep-replace.cjs')) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = walkDir(srcDir);

// Simple token replacements purely on Hex! Assumes only DesignSystem used these hardcoded!
// Light tokens
const mapObj = {
  // text-primary
  "'#111827'": "'var(--text-primary)'",
  '"#111827"': '"var(--text-primary)"',
  "'#f3f4f6'": "'var(--text-primary)'",
  '"#f3f4f6"': '"var(--text-primary)"',
  "'#18181B'": "'var(--text-primary)'",
  '"#18181B"': '"var(--text-primary)"',
  "'#E5E5E5'": "'var(--text-primary)'",
  '"#E5E5E5"': '"var(--text-primary)"',
  
  // text-secondary
  "'#6B7280'": "'var(--text-secondary)'",
  '"#6B7280"': '"var(--text-secondary)"',
  "'#A1A1AA'": "'var(--text-secondary)'",
  '"#A1A1AA"': '"var(--text-secondary)"',
  "'#9CA3AF'": "'var(--text-secondary)'",
  '"#9CA3AF"': '"var(--text-secondary)"',
  "'#52525B'": "'var(--text-secondary)'",
  '"#52525B"': '"var(--text-secondary)"',
  "'#888'": "'var(--text-secondary)'",
  '"#888"': '"var(--text-secondary)"',
  
  // border-color
  "'#374151'": "'var(--border-color)'",
  '"#374151"': '"var(--border-color)"',
  "'#E5E7EB'": "'var(--border-color)'",
  '"#E5E7EB"': '"var(--border-color)"',
  "'#333'": "'var(--border-color)'",
  '"#333"': '"var(--border-color)"',
  "'#E4E4E7'": "'var(--border-color)'",
  '"#E4E4E7"': '"var(--border-color)"',

  // bg-void
  "'#ffffff'": "'var(--bg-void)'",
  '"#ffffff"': '"var(--bg-void)"',
  "'#FFFFFF'": "'var(--bg-void)'",
  '"#FFFFFF"': '"var(--bg-void)"',
  "'#050505'": "'var(--bg-void)'",
  '"#050505"': '"var(--bg-void)"',
  "'#111111'": "'var(--bg-void)'",
  '"#111111"': '"var(--bg-void)"',
  "'#000'": "'var(--bg-void)'",
  '"#000"': '"var(--bg-void)"',
  "'#FFF'": "'var(--bg-void)'",
  '"#FFF"': '"var(--bg-void)"',
  
  // Custom case for #111 which was often used for surface
  "'#111'": "'var(--bg-surface)'",
  '"#111"': '"var(--bg-surface)"',

  // accent-amber
  "'#F59E0B'": "'var(--accent-amber)'",
  '"#F59E0B"': '"var(--accent-amber)"',
  "'#D97706'": "'var(--accent-amber)'",
  '"#D97706"': '"var(--accent-amber)"',

  // accent-blue
  "'#3B82F6'": "'var(--accent-blue)'",
  '"#3B82F6"': '"var(--accent-blue)"',
  "'#2563EB'": "'var(--accent-blue)'",
  '"#2563EB"': '"var(--accent-blue)"',
  
  // accent-green
  "'#10B981'": "'var(--accent-green)'",
  '"#10B981"': '"var(--accent-green)"'
};

const hexRegex = new RegExp(Object.keys(mapObj).join('|'), 'gi');

let totalFiles = 0;
let totalReplaces = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let original = content;
  
  // We match case-insensitive
  content = content.replace(hexRegex, (matched) => {
    // find key case-insensitively
    const matchKey = Object.keys(mapObj).find(k => k.toLowerCase() === matched.toLowerCase());
    if (matchKey) {
       totalReplaces++;
       return mapObj[matchKey];
    }
    return matched;
  });

  if (content !== original) {
     fs.writeFileSync(f, content, 'utf8');
     totalFiles++;
     console.log('Fixed', f.split('src/')[1]);
  }
});

console.log(`Replaced ${totalReplaces} hex values in ${totalFiles} files.`);

const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

let count = 0;
walkDir('./src', (filePath) => {
    if (filePath.endsWith('.jsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        if (content.includes('min-h-screen')) {
            let updated = content.replace(/min-h-screen/g, 'min-h-[100dvh]');
            fs.writeFileSync(filePath, updated);
            count++;
            console.log(`Updated ${filePath}`);
        }
    }
});
console.log(`Completed: updated ${count} files.`);

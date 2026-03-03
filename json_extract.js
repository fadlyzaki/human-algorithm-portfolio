const data = require('/tmp/audit.json');
const issues = [];
data.files.forEach(f => {
    f.errors.forEach(e => {
        if(e.lineData) issues.push({file: f.path, line: e.lineNum, data: e.lineData, token: e.suggestion});
    })
});
console.log(JSON.stringify(issues.slice(0, 15), null, 2));

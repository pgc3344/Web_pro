const fs = require('fs');

const src = process.argv[2];
const dest = process.argv[3];

if (!src || !dest) {
    console.log("사용법: node copyFile2.js <원본파일> <대상파일>");
    process.exit(1);
}

fs.readFile(src, 'utf8', (err, data) => {
    if (err) {
        console.error("읽기 실패:", err.message);
        return;
    }
    const lines = data.split('\n');
    if (lines[lines.length - 1] === '') lines.pop();
    const numbered = lines.map((line, i) => `${i + 1}: ${line.trim()}`).join('\n') + '\n';
    fs.writeFile(dest, numbered, (err) => {
        if (err) {
            console.error("쓰기 실패:", err.message);
            return;
        }
        console.log(`${src} → ${dest} 줄 번호 붙여 복사 완료!`);
    });
});

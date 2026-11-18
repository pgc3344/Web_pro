const fs = require('fs');

const src = process.argv[2];
const dest = process.argv[3];

if (!src || !dest) {
    console.log("사용법: node copyFile3.js <원본파일> <대상파일>");
    process.exit(1);
}

fs.copyFile(src, dest, (err) => {
    if (err) {
        console.error("복사 실패:", err.message);
        return;
    }
    console.log(`${src} → ${dest} 복사 완료!`);
});

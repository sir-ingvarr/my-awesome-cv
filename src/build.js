const fs = require('fs');
const path = require('path');
const pdf = require('html-pdf');

const assetsPath = path.join(__dirname, '..', 'assets');

const options = {
    format: 'A3',
    orientation: 'portrait',
    zoomFactor: 1,
    renderDelay: 1500,
    base: `file:///${assetsPath}`,
    border: {
        top: '1in',
        right: '0.5in',
        bottom: '0.5in',
        left: '1in'
    },
};

async function run() {
    try {
        const filePath = path.join(__dirname, '..', 'index.html');
        const html = await fs.promises.readFile(filePath, 'utf8');
        const pdfInstance = pdf.create(html, options);
        const file = new Promise(resolve => {
            pdfInstance.toFile('Igor_Berezin_CV.pdf', resolve);
        });
        await file;


    } catch (e) {
        console.error(e.message);
        process.exit(1);
    }
    process.exit(0);
}

run();
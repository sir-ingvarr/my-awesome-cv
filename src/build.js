const path = require('path');
const { chromium } = require('playwright');

const OUTPUT_FILE = 'Igor_Berezin_CV.pdf';

async function run() {
    try {
        const filePath = path.join(__dirname, '..', 'index.html');
        const fileUrl = `file://${filePath}`;

        const browser = await chromium.launch();
        const page = await browser.newPage();

        await page.goto(fileUrl, { waitUntil: 'networkidle' });

        await page.pdf({
            path: OUTPUT_FILE,
            format: 'A3',
            printBackground: true,
            margin: {
                top: '1in',
                right: '0.5in',
                bottom: '0.5in',
                left: '1in',
            },
        });

        await browser.close();
        console.log(`PDF generated: ${OUTPUT_FILE}`);
    } catch (e) {
        console.error(e.message);
        process.exit(1);
    }
}

run();

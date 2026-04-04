const path = require('path');
const { chromium } = require('playwright');

const VARIANTS = [
    { lang: 'en', output: 'Igor_Berezin_CV.pdf' },
    { lang: 'ua', output: 'Igor_Berezin_CV_UA.pdf' },
];

async function run() {
    try {
        const filePath = path.join(__dirname, '..', 'index.html');
        const browser = await chromium.launch();

        for (const variant of VARIANTS) {
            const fileUrl = `file://${filePath}?lang=${variant.lang}`;

            const page = await browser.newPage();
            await page.goto(fileUrl, { waitUntil: 'networkidle' });

            await page.pdf({
                path: variant.output,
                format: 'A3',
                printBackground: true,
                margin: {
                    top: '1in',
                    right: '0.5in',
                    bottom: '0.5in',
                    left: '1in',
                },
            });

            await page.close();
            console.log(`PDF generated: ${variant.output}`);
        }

        await browser.close();
    } catch (e) {
        console.error(e.message);
        process.exit(1);
    }
}

run();

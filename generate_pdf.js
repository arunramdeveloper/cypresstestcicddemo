const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Path to your HTML report
    const reportPath = path.resolve(__dirname, 'cypress/reports/index.html'); 
    
    if (!fs.existsSync(reportPath)) {
        console.error("❌ HTML report not found at:", reportPath);
        process.exit(1);
    }

    // Convert file path to URL format
    await page.goto(`file://${reportPath}`, { waitUntil: 'networkidle0' });

    // Path to save the PDF report
    const pdfPath = path.resolve(__dirname, 'cypress/reports/mypccloudserver_automation.pdf');

    // Generate PDF
    await page.pdf({ path: pdfPath, format: 'A4' });

    await browser.close();

    console.log("✅ PDF report generated:", pdfPath);
})();

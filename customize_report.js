const fs = require('fs');
const path = require('path');

const reportPath = path.join(__dirname, 'cypress/reports/index.html');

fs.readFile(reportPath, 'utf8', (err, data) => {
    if (err) {
        console.error("❌ Error reading report file:", err);
        return;
    }

    const logoHtml = `
        <div class="custom-report-header">
            <img src="https://rezzqa2.its-cs.com/assets/myPC-logo.svg" alt="MyPC Logo" style="height: 80px; margin-right: 15px;">
            <h1 style="display: inline-block; font-size: 24px; color: #333;">MyPC Test Report</h1>
        </div>
        <hr/>
    `;

    // Inject the logo into the report
    const modifiedReport = data.replace('<div class="report-title">', `${logoHtml}<div class="report-title">`);

    fs.writeFile(reportPath, modifiedReport, 'utf8', (err) => {
        if (err) {
            console.error("❌ Error writing modified report:", err);
        } else {
            console.log("✅ Custom logo & title added to Mochawesome report!");
        }
    });
});

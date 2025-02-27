const fs = require('fs');
const path = require('path');

const reportFile = path.join(__dirname, 'cypress/reports/index.html'); // Adjust if needed
const customCSS = '<link rel="stylesheet" type="text/css" href="custom-report-style.css">';

fs.readFile(reportFile, 'utf8', (err, data) => {
    if (err) return console.log("Error reading report file:", err);

    if (!data.includes(customCSS)) {
        const modifiedReport = data.replace('</head>', `${customCSS}\n</head>`);

        fs.writeFile(reportFile, modifiedReport, 'utf8', (err) => {
            if (err) console.log("Error writing modified report:", err);
            else console.log("Custom CSS applied successfully!");
        });
    }
});

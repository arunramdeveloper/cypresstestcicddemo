const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://rezzqa2.its-cs.com/Auth/Login",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
    specPattern: "cypress/e2e/**/*.cy.js",
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
    pdf: true,
    reportTitle: "MyPC Cloud Server Automation Report",   // Custom Report Title
    reportPageTitle: "Authentication- Test Report",  // Title for HTML page
    embeddedScreenshots: true,
    inlineAssets: true,
  },
});

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ibmd1w',
  
    reporter: 'mochawesome',
    reporterOptions: {
    reportDir: 'cypress/report/mochawesome-report',
    overwrite: true,
    html: true,
    json: false,
    timestamp: 'mmddyyyy_HHMMss',
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

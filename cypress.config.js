const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseurl: 'https://qa.api.suite7.io/v1' // This can be overridden by command line arguments
  },

  e2e: {
   // baseUrl: 'https://qa.api.suite7.io/v1',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    specPattern: "/Users/vidhyasrinivasan/LPAPI/cypress/integration/API/*.js"
  },
});

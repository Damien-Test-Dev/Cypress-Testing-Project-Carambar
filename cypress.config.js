const { defineConfig } = require("cypress");

module.exports = defineConfig({

  // modify the page load waiting time
  pageLoadTimeout: 10000,
  chromeWebSecurity: false,
  

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },


    


  },
});




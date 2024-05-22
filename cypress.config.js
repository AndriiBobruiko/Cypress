const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: { 
    projectId: "yt8yoo",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

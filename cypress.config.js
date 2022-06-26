const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      {
        "compilerOptions"; {
          "types"; ["cypress", "cypress-wait-until"]
        }
      }

      {
        "supportFile"; "cypress/support/commands.ts"
      }
    },
  },

  
});



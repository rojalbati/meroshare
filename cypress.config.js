const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    DEPOSITORY_PARTICIPANTS: 'DEPOSITORY_PARTICIPANTS',
    USERNAME: 'USERNAME',
    PASSWORD: 'PASSWORD',
    BANK: 'BANK',
    KITTA: 'KITTA',
    CRN: 'CRN',
    PIN: 'PIN'
  },
  defaultCommandTimeout: 60000,
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message)
          return null
        },
      })
    },
    baseUrl: 'https://meroshare.cdsc.com.np'
  },
});

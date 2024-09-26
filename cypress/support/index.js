// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

const ignoredExceptions = ['mod_pagespeed_','Cookies is not defined','multiple userscripts installed','e.indexOf is not a function'];
Cypress.on("uncaught:exception", (err, runnable) => {
  console.log(`Caught an exception. name - ${err.name} - ${err.message}`);

  for (let index = 0; index < ignoredExceptions.length; index++) {
    let message = ignoredExceptions[index];
    if (err.message.includes(message)) {
      return false;
    }
  }

  return true;
});

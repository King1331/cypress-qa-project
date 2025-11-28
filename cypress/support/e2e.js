// ***********************************************************
// This example support/e2e.js is processed and
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
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Screenshots automáticos en tests fallidos
afterEach(function() {
  if (this.currentTest.state === 'failed') {
    const testName = this.currentTest.title.replace(/[^a-z0-9]/gi, '-').toLowerCase();
    cy.screenshot(`FAILED-${testName}`, { overwrite: true });
    console.log(`📸 Screenshot tomado: FAILED-${testName}`);
  }
});

// Puedes agregar más configuraciones globales aquí:
// - Configuración de timeouts
// - Manejadores de errores globales
// - Configuración de viewport
// - etc.
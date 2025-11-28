const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
  
  // ACTIVAR VIDEOS
  video: true,                          // ← Grabación de videos
  videoCompression: 32,                 // ← Compresión (1-51, menor = mejor calidad)
  videosFolder: 'cypress/videos',       // ← Carpeta para videos
  
  // Configuración existente
  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/screenshots',
  
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'reports',
    overwrite: false,
    html: true,
    json: true,
    timestamp: 'mmddyyyy_HHMMss'
  }
});
exports.config = {
 
  specs: ['UItest.js'],
  capabilities: {
      browserName: 'chrome',

      chromeOptions: {
          args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
      }
  }
};


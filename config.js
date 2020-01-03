exports.config = {
		directConnect: true,
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['UItest.js'],
  capabilities: {
      'browserName': 'firefox',
      
      'moz:firefoxOptions': {
    	    'args': ['--headless', '--disable-gpu', '--window-size=800,600']

      }
  }
};

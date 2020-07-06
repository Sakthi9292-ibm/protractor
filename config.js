exports.config = {
		directConnect: true,
  //seleniumAddress: 'http://localhost:4444/wd/hub',
			seleniumServerJar:'selenium-server-standalone-2.53.0.jar',
  specs: ['UItest.js'],
  capabilities: {
      'browserName': 'firefox',
      
      'moz:firefoxOptions': {
    	    //'args': ['--headless', '--disable-gpu', '--window-size=800,600']
    	  'args': ['--disable-gpu', '--window-size=800,600']

      }
  }
};

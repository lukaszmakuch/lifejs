var allTestFiles = [];

Object.keys(window.__karma__.files).forEach(function(file) {
    
  if (/(spec|test)\.js$/i.test(file)) {
    var normalizedTestModule = file.replace(/^\/base\/js\|\.js$/g, '');
    allTestFiles.push(normalizedTestModule);
  }
});
require.config({
  baseUrl: '/base/js/gol',
  
  paths: {
      tests: '../tests'
  },
  
  deps: allTestFiles,

  callback: window.__karma__.start
});

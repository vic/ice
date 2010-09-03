/**
 * A requirejs module wrapping javascript console support by firebug/chrome.
 *
 * This module is intended to help debugging our javascript applications,
 * and as a basic example of reuquirejs for IBE developers.
 *
 * 
 */
new(function(undefined) {


  // test if thing is an string with more than one non-blank characters
  var hasChars = function(thing) {
    typeof(thing) === "string" && thing.trim().length > 0
  }

  var inBrowser = function() { return typeof(window) !== "undefined" }
  var hasConsole = function() { 
    return inBrowser() && typeof(window.console) !== 'undefined';
  }
  
  // are running in localhost?
  var inLocalhost = function() {
    return inBrowser() && /(127.0.0.1|localhost)/.test(window.location.hostname)
  }

  // get an url param from javascript, stolen from somewhere in the net.
  var param = function(name) {
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    return (results === null) ? null : results[1];
  };

  // no-operation function
  var noop = function() {};

  var consoleFunction = function(name) {
    if( hasConsole() && 
        typeof(window.console[name]) === 'function') {
      return function() { 
        // chrome expects the receiver to be the console object
        return window.console[name].apply(window.console, arguments); 
      } 
    } else {
      return noop;
    }
  }

  var disableLogging = function(obj) {
    obj.log = noop;
    obj.debug = noop;
    obj.info = noop;
    obj.error = noop;    
  }

  var enableLogging = function(obj) {
    obj.log = consoleFunction('log');
    obj.debug = consoleFunction('debug');
    obj.info = consoleFunction('info');
    obj.error = consoleFunction('error');
  };


  var Console = function(enabled) {

    if(enabled) {
      enableLogging(this);
    } else {
      disableLogging(this);
    }

    // Enable logging permanently
    this.enable = function() { enableLogging(this) };

    // Disable logging permanently
    this.disable = function() { disableLogging(this) };

    // Enable logging during body execution
    this.enabled = function(body) { 
      try { 
        enableLogging(this)
        body()
      } finally {
        disableLogging(this)
      }
    }

    // Disable loggin during body execution
    this.disabled = function(body) { 
      try { 
        disableLogging(this)
        body()
      } finally {
        enableLogging(this)
      }
    }
    
    return this;
  }; 

  /* 
     Finally define the module exporting public members
     If this module had dependencies, they would be listed on the 
     second argument array.
     The third argument function is invoked when all dependencies have
     been loaded, each dependency is given as argument to this function.
     The function is expected to return the "module" object.
     In this case we return a new Console instance.
  */
  $.def('console', function() {
    var shouldEnable = inLocalhost() || hasChars(param('console'));
    return new Console(shouldEnable)
  });

})(); /* and immediatly activate the function */


/***
 * This module expects jQuery and CommonJS have been loaded.
 *
 * A thin wrapper around CommonJS require system for the browser.
 * Currently this wrapper uses RequireJS, but that might change later,
 * Developers must use jQuery.def and jQuery.use to define and import
 * modules without caring what CommonJS impl we are using.
 *
 * For usage see: index.html
 *
 * @author vborja@apache.org
 ***/
new(function($, undefined){

  var require = window.require; // RequireJS

  var createCssLink = function(uri) {
    var rel = $('link[src="'+uri+'"]');
    if(rel.length > 0) { return; }
    $('<link></link>', {
      href: uri,
      rel: 'stylesheet',
      type: 'text/css'
    }).appendTo('head')
  }

  var args = function(argv, offset, visitor) {
    offset = offset || 0;
    visitor = visitor || function(a) { return a; }
    var args = []
    for(var i = offset, j = 0; i < argv.length; i++) { 
      var val = visitor(argv[i])
      if(val) { args[j] = val; j++ } 
    }
    var dependencies, callback,
    last = args[args.length - 1],
    blast = args[args.length - 2];
    if(typeof(blast) == 'function') {
      callback = function() { return blast.apply(last, arguments) }
      dependencies = args.slice(0, args.length - 2)
    } else if(typeof(last) == 'function') {
      callback = function() { return last.apply(arguments.callee, arguments) }
      dependencies = args.slice(0, args.length - 1)
    } else {
      callback = function(){}
      dependencies = args.slice(0)
    }
    return [dependencies, callback]
  }

  var use = function() {
    return require.apply(require, args(arguments, 0, function(arg) {
      if(typeof(arg) == 'string' && /^http.+\.(le|c)ss$/.test(arg)) {
        createCssLink(arg)
        return null;
      }
      return arg;
    }))
  }

  var def = function(name) {
    return require.def.apply(require, [name].concat(args(arguments, 1)))
  }

  $.use = use;
  $.def = def;

})(jQuery)

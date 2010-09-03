/***
 * jQuery is a tool for manipulating DOM elements using javascript.
 * most of the time, the $ variable is an alias for jQuery. 
 * 
 * Notice that in this file, we create an anonymous object, by instantiating
 * a function that takes two parameters: 
 *
 *  - the first is the jQuery object, we name it $
 *  - the second is undefined, (for which we provide no argument on invocation)
 *
 * @author vborja@apache.org
 ***/
new(function($, undefined){

  // Hide all divs that are direct childs from the element with class "content"
  $('.content > div').hide()
  // bind the onclick event for every h3 inside the content element
  $('.content > h3').click(function(event){
    // avoid parent elements from getting the click event.
    event.preventDefault()
    // find all the div element on my parent
    var sections = $(this).parent().find(' > div');
    // if they are visible
    if(sections.is(':visible')){
      // hide them with slideUp effect
      sections.slideUp()
    } else {
      // otherwise show them with slideDown
      sections.slideDown()
    }
  })
  
  // Test the location protocol with a regexp
  // to see if we are running on http
  if(/https?/.test(location.protocol)) {
    // not running on http, show a warning
    $('.protocol-warning').hide()
  } else {
    $('.protocol-warning').show()
  }

  // This example loads the console module if not already loaded.
  $.use('console', function(console){
    // when the module is loaded, this function body is executed
    // you can use the exported object from console.js here.
    console.log('Hello you can see me in chrome or firebug!')
    console.warn('This is a warning')
    console.error('An inteded error, please ignore')
    console.debug('This is the console object', console)
  })


  // even non commonjs modules
  $.use("http://jqueryui.com/themeroller/themeswitchertool/", function(){
    // when the document has finally loaded 
    // use theme-roller to configure the color theme
    $(document).ready(function(){
      $('.color-theme-select .theme-roller').themeswitcher({
        loadTheme: 'Redmond'
      })
    })
  })


  // you can load remote resources, like css, and js
  $.use('http://google-code-prettify.googlecode.com/svn/trunk/src/prettify.css',
        'http://google-code-prettify.googlecode.com/svn/trunk/src/prettify.js',
        function() { prettyPrint(); })

  // this one is jQueryTools from flowplayer
  // it has several javascript controls we will be using.
  $.use('http://cdn.jquerytools.org/1.2.4/jquery.tools.min.js')

})(jQuery)

/***
 *
 *
 * A thin wrapper around CommonJS require system for the browser.
 * Currently this wrapper uses RequireJS, but that might change later,
 * Developers must use jQuery.def and jQuery.use to define and import
 * modules without caring what CommonJS impl we are using.
 *
 * @author vborja@apache.org
 ***/
new(function(undefined){

  $('.content > div').hide()
  $('.content > h3').click(function(event){
    event.preventDefault()
    var sections = $(this).parent().find(' > div');
    if(sections.is(':visible')){
      sections.slideUp()
    } else {
      sections.slideDown()
    }
  })
  
  if(/https?/.test(location.protocol)) {
    // not running on http, show a warning
    $('.protocol-warning').hide()
  } else {
    $('.protocol-warning').show()
  }

  $(document).ready(function(){
    $('.color-theme-select .theme-roller').themeswitcher({
      loadTheme: 'Redmond'
    })
  })

  $.use('console')

  $.use('http://google-code-prettify.googlecode.com/svn/trunk/src/prettify.css',
        'http://google-code-prettify.googlecode.com/svn/trunk/src/prettify.js',
        function() { prettyPrint(); })

  $.use('http://cdn.jquerytools.org/1.2.4/jquery.tools.min.js')

})()

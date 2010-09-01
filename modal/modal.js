(function($) {


  // for demo 
  var themeroller = function() {
    var div = $('<div>').themeswitcher({ loadTheme: 'Redmond' }).hide()
    $('body').append(div)
  }


  var bindEvents = function() {
    $('a[href="#dialogContent"]').fancybox()
    $('a#fancybox').fancybox({type: 'iframe'})
  }

  var initialize = function() {
    themeroller()
    bindEvents()
  }

  $(document).ready(initialize)


})(jQuery)

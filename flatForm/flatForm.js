(function($) {


  // for demo 
  var themeroller = function() {
    var div = $('<div>').themeswitcher({ loadTheme: 'Redmond' }).hide()
    $('body').append(div)
  }

  var initialize = function() {
    themeroller()
  }

  $(document).ready(initialize)


})(jQuery)

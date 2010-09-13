(function($) {


  // for demo 
  var themeroller = function() {
    var div = $('<div>').themeswitcher({ loadTheme: 'Redmond' }).hide()
    $('body').append(div)
  }

  var initialize = function() {
    themeroller()


    $('fieldset legend').click(function(event) {
      $(this).parent().find('div').slideToggle()
    })
  }

  $(document).ready(initialize)


})(jQuery)

(function($) {


  // for demo 
  var themeroller = function() {
    var div = $('<div>').themeswitcher({ loadTheme: 'Redmond' }).hide()
    $('body').append(div)
  }

  var bindEvents = function() {
    $('.slideDownField label').click(function(){
      var div = $(this).parent().find('>div');
      if(div.is(':visible')) {
        div.slideUp()
        $(this).find('.ui-icon').
          removeClass('ui-icon-triangle-1-s').
          addClass('ui-icon-triangle-1-e')
      } else {
        div.slideDown()
        $(this).find('.ui-icon').
          removeClass('ui-icon-triangle-1-e').
          addClass('ui-icon-triangle-1-s')
      }
    })
  }


  var initialize = function() {
    themeroller()
    bindEvents()
  }

  $(document).ready(initialize)

})(jQuery)

(function($) {


  var themeroller = function() {
    var div = $('<div>').themeswitcher({ loadTheme: 'Redmond' }).hide()
    $('body').append(div)
  }

  var stylish = function() {
    $('.slideDownField .link').addClass('ui-button').
      addClass('ui-state-default').addClass('ui-corner-all')
    $('.slideDownField').addClass('ui-widget')
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
    stylish()
    bindEvents()
  }

  $(document).ready(initialize)

})(jQuery)

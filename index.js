(function($){

  var initialize = function(){
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
    $('.color-theme-select .theme-roller').themeswitcher({
      loadTheme: 'Redmond'
    })
    if(/https?/.test(location.protocol)) {
      // not running on http, show a warning
      $('.protocol-warning').hide()
    } else {
      $('.protocol-warning').show()
    }
  }

  $(document).ready(initialize)

})(jQuery)

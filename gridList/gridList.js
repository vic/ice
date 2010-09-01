/***
 * This example shows a container that can be switched from grid and list mode
 * using only css an very basic jquery.
 *
 * In this example you will find coding conventions you are expected to follow:
 *
 *  - Dont include js/css on html files.
 *  - Create less (see gridList.less) with variables
 *  - Use separate js file for registering event handling (this file)
 *  - On js files, ALLWAYS place all the code inside an 
 *    anonymous inmediatly-invoked function, to prevent poluting the global scope.
 *  - On js files always use var declarations. No free variable assignment;
 *  - On js files avoid using ; as much as possible, for readability.
 *  - On js files, always init your code on a function given to $(document).ready
 *  - enjoy!
 ***/

(function($) {
  
  var isGridMode = function(checkbox) {
    return 'grid' === $(checkbox).val()
  }

  var removeColumnClasses = function(container){
    // remove old columns classes. (eg, cols2, cols3, cols4)
    var colsCls = _.select(container.attr('class').split(' '), 
                           function(i) { return /^cols\d+$/.test(i) })
    _.each(colsCls, function(i) { container.removeClass(i) })    
  }

  var setGridMode = function(container, columnsClass) {
    // now add the new columnsClass
    container.addClass('grid').addClass(columnsClass).removeClass('list')
  }

  var setListMode = function(container) {
    container.addClass('list').removeClass('grid')
  }

  var bindEvents = function() {
    var container = $('#container')
    $('input[name="mode"]').change(function(event) {
      if($(this).is(':checked')) {
        removeColumnClasses(container)
        if(isGridMode(this)){
          setGridMode(container, $(this).attr('data-columns'))
        } else {
          setListMode(container)
        }
      }
    })
    // create a zebra , only for demo purposes !, remove this
    container.find('> :even').css('background-color', 'red')
    container.find('> :odd').css('background-color', 'blue')
  }

  var initialize = function() {
    bindEvents()
    // trigger the change event to create inital grid or list.
    $('input:checked[name="mode"]').trigger('change')
  }
  
  $(document).ready(initialize)

})(jQuery)

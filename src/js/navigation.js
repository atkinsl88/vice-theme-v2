(function ($, window, Drupal) {
  Drupal.behaviors.exampleTheme = {
    attach: function (context, settings) {
      $( "#burgerMenu", context ).click(function() {
        $('#myDIV').toggleClass("mystyle-active");
      });

      $( "#burgerMenuClose", context ).click(function() {
        $('#myDIV').removeClass("mystyle-active");
      });
    }
  }

})(jQuery, window, Drupal);
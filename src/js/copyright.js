(function ($, window, Drupal) {
  Drupal.behaviors.copyright = {
    attach: function (context, settings) {

      $("#copyright-year").text((new Date).getFullYear());

    }
  }

})(jQuery, window, Drupal);
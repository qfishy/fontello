/*global $, nodeca*/


"use strict";


module.exports = function () {
  $(function () {
    nodeca.client.init.app();

    //
    // Social buttons defered load - after all
    //

    setTimeout(function () {

      // Twitter buttons

      (function(d,s,id) {
        var js, fjs = d.getElementsByTagName(s)[0];

        if (!d.getElementById(id)) {
          js = d.createElement(s);
          js.id = id;
          js.src = "//platform.twitter.com/widgets.js";

          fjs.parentNode.insertBefore(js,fjs);
        }
      }(document, "script", "twitter-wjs"));

      // Google +1

      (function() {
        var po = document.createElement('script');

        po.type = 'text/javascript';
        po.async = true;
        po.src = 'https://apis.google.com/js/plusone.js';

        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(po, s);
      }());

      // Flattr
      /*

      (function() {
        var s = document.createElement('script'), t = document.getElementsByTagName('script')[0];
        s.type = 'text/javascript';
        s.async = true;
        s.src = '//api.flattr.com/js/0.6/load.js?mode=auto';
        t.parentNode.insertBefore(s, t);
      }());
      */

    }, 2000);
  });
};

angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("anon/home.html",
    "<div class=\"container home-map\" ng-controller=\"homeMap\">\n" +
    "\n" +
    "    <!--carousel-->\n" +
    "\n" +
    "    <div class=\"left-box\">\n" +
    "\n" +
    "        <section class=\"cam1\">\n" +
    "            <!--Caroussel, Map, Formulaire-->\n" +
    "            <div id=\"myCarousel\" data-ride=\"carousel\">\n" +
    "                <!-- Indicators -->\n" +
    "                <ol class=\"carousel-indicators\">\n" +
    "                    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n" +
    "                    <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n" +
    "                    <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n" +
    "                    <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\n" +
    "                </ol>\n" +
    "\n" +
    "                <!-- Wrapper for slides -->\n" +
    "                <div class=\"carousel-inner\" role=\"listbox\">\n" +
    "                    <div class=\"item active\">\n" +
    "                        <img src=\"http://lorempixel.com/130/130/abstract/\" alt=\"cam1\">\n" +
    "                    </div>\n" +
    "                    <div class=\"item\">\n" +
    "                        <img src=\"http://lorempixel.com/130/130/people/\" alt=\"cam1\">\n" +
    "                    </div>\n" +
    "                    <div class=\"item\">\n" +
    "                        <img src=\"http://lorempixel.com/130/130/nightlife/\" alt=\"cam1\">\n" +
    "                    </div>\n" +
    "                    <div class=\"item\">\n" +
    "                        <img src=\"http://lorempixel.com/130/130/\" alt=\"cam1\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </section>\n" +
    "\n" +
    "        <section class=\"cam2\">\n" +
    "            <!--Caroussel, Map, Formulaire-->\n" +
    "            <div id=\"myCarousel\" data-ride=\"carousel\">\n" +
    "                <!-- Indicators -->\n" +
    "                <ol class=\"carousel-indicators\">\n" +
    "                    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n" +
    "                    <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n" +
    "                    <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n" +
    "                    <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\n" +
    "                </ol>\n" +
    "\n" +
    "                <!-- Wrapper for slides -->\n" +
    "                <div class=\"carousel-inner\" role=\"listbox\">\n" +
    "                    <div class=\"item active\">\n" +
    "                        <img src=\"http://lorempixel.com/130/130/animals/\" alt=\"cam2\">\n" +
    "                    </div>\n" +
    "                    <div class=\"item\">\n" +
    "                        <img src=\"http://lorempixel.com/130/130/food/\" alt=\"cam2\">\n" +
    "                    </div>\n" +
    "                    <div class=\"item\">\n" +
    "                        <img src=\"http://lorempixel.com/130/130/nature/\" alt=\"cam2\">\n" +
    "                    </div>\n" +
    "                    <div class=\"item\">\n" +
    "                        <img src=\"http://lorempixel.com/130/130/city/\" alt=\"cam2\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </section>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--carousel fin-->\n" +
    "\n" +
    "    <!-- map début -->\n" +
    "\n" +
    "    <div map-lazy-load=\"https://maps.google.com/maps/api/js\" map-lazy-load-params=\"{{ googleMapsUrl }}\">\n" +
    "        <ng-map center=\"28,3\" zoom=\"2\" class=\"map\"></ng-map>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- map fin -->\n" +
    "\n" +
    "    <!--carousel-->\n" +
    "\n" +
    "    <div class=\"right-box\">\n" +
    "\n" +
    "        <section class=\"cam3\">\n" +
    "            <!--Caroussel, Map, Formulaire-->\n" +
    "            <div id=\"myCarousel\" data-ride=\"carousel\">\n" +
    "                <!-- Indicators -->\n" +
    "                <ol class=\"carousel-indicators\">\n" +
    "                    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n" +
    "                    <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n" +
    "                    <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n" +
    "                    <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\n" +
    "                </ol>\n" +
    "\n" +
    "                <!-- Wrapper for slides -->\n" +
    "                <div class=\"carousel-inner\" role=\"listbox\">\n" +
    "                    <div class=\"item active\">\n" +
    "                        <img src=\"http://lorempixel.com/130/130/business/\" alt=\"cam3\">\n" +
    "                    </div>\n" +
    "                    <div class=\"item\">\n" +
    "                        <img src=\"http://lorempixel.com/130/130/cats/\" alt=\"cam3\">\n" +
    "                    </div>\n" +
    "                    <div class=\"item\">\n" +
    "                        <img src=\"http://lorempixel.com/130/130/fashion/\" alt=\"cam3\">\n" +
    "                    </div>\n" +
    "                    <div class=\"item\">\n" +
    "                        <img src=\"http://lorempixel.com/130/130/technics/\" alt=\"cam3\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </section>\n" +
    "\n" +
    "        <section class=\"cam4\">\n" +
    "            <!--Caroussel, Map, Formulaire-->\n" +
    "            <div id=\"myCarousel\" data-ride=\"carousel\">\n" +
    "                <!-- Indicators -->\n" +
    "                <ol class=\"carousel-indicators\">\n" +
    "                    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n" +
    "                    <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n" +
    "                    <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n" +
    "                    <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\n" +
    "                </ol>\n" +
    "\n" +
    "                <!-- Wrapper for slides -->\n" +
    "                <div class=\"carousel-inner\" role=\"listbox\">\n" +
    "                    <div class=\"item active\">\n" +
    "                        <img src=\"http://lorempixel.com/130/130/transport/\" alt=\"cam4\">\n" +
    "                    </div>\n" +
    "                    <div class=\"item\">\n" +
    "                        <img src=\"http://lorempixel.com/130/130/abstract/\" alt=\"cam4\">\n" +
    "                    </div>\n" +
    "                    <div class=\"item\">\n" +
    "                        <img src=\"http://lorempixel.com/130/130/business/\" alt=\"cam4\">\n" +
    "                    </div>\n" +
    "                    <div class=\"item\">\n" +
    "                        <img src=\"http://lorempixel.com/130/130/animals/\" alt=\"cam4\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </section>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--carousel fin-->\n" +
    "\n" +
    "</div>\n"
  );

  $templateCache.put("anon/login.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "        <form class=\"form\" name=\"loginForm\" novalidate ng-submit=\"login()\">\n" +
    "            <div ng-repeat=\"error in errors\">{{error.error}}</div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n" +
    "                <input id=\"email\" type=\"email\" class=\"form-control\" ng-model=\"user.email\" required placeholder=\"Email Address\">\n" +
    "            </div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "                <input id=\"password\" type=\"password\" class=\"form-control\" ng-model=\"user.password\" required placeholder=\"Password\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-primary btn-block\">Login</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("anon/navbar.html",
    "<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "            <a class=\"navbar-brand\" href=\"#\"></a>\n" +
    "        </div>\n" +
    "\n" +
    "        <ul class=\"nav navbar-nav\">\n" +
    "            <li ui-sref-active=\"active\">\n" +
    "                <a ui-sref=\"anon.home\"><img alt=\"Brand\" src=\"img/neogeo.png\"></a>\n" +
    "            </li>\n" +
    "\n" +
    "        </ul>\n" +
    "\n" +
    "        <form class=\"navbar-form navbar-right navbarSearch\" role=\"search\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-primary\">Go !</button>\n" +
    "        </form>\n" +
    "\n" +
    "    </div>\n" +
    "</nav>\n" +
    "\n" +
    "<!--Footer-->\n" +
    "\n" +
    "<footer>\n" +
    "    <link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n" +
    "    <link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha256-MfvZlkHCEqatNoGiOXveE8FIwMzZg4W85qfrfIFBfYc= sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==\"\n" +
    "        crossorigin=\"anonymous\">\n" +
    "    <!-- // -->\n" +
    "    <div class=\"container\">\n" +
    "        <a id=\"fin\"> NeoGeo | WCS  La loupee Product | Dream by Olivier & Jehan | Ⓒ 2017<br></a>\n" +
    "        <a href=\"https://www.facebook.com/bootsnipp\"><i id=\"social-fb\" class=\"fa fa-facebook-square fa-3x social\"></i></a>\n" +
    "        <a href=\"https://twitter.com/bootsnipp\"><i id=\"social-tw\" class=\"fa fa-twitter-square fa-3x social\"></i></a>\n" +
    "        <a href=\"https://plus.google.com/+Bootsnipp-page\"><i id=\"social-gp\" class=\"fa fa-google-plus-square fa-3x social\"></i></a>\n" +
    "        <a href=\"mailto:bootsnipp@gmail.com\"><i id=\"social-em\" class=\"fa fa-envelope-square fa-3x social\"></i></a>\n" +
    "    </div>\n" +
    "    <hr>\n" +
    "    </div>\n" +
    "</footer>\n" +
    "\n" +
    "<!--Footer fin-->\n"
  );

  $templateCache.put("anon/register.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "        <form class=\"form\" name=\"loginForm\" novalidate ng-submit=\"register()\">\n" +
    "            <div ng-repeat=\"error in errors\">{{error.error}}</div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n" +
    "                <input id=\"email\" type=\"email\" class=\"form-control\" ng-model=\"user.email\" required placeholder=\"Email Address\">\n" +
    "            </div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "                <input id=\"password\" type=\"password\" class=\"form-control\" ng-model=\"user.password\" required placeholder=\"Password\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-primary btn-block\">Register</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("user/dashboard.html",
    "Dashboard de {{user.email}}\n"
  );

  $templateCache.put("user/navbar.html",
    "<nav class=\"navbar navbar-default\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "            <a class=\"navbar-brand\" href=\"#\"></a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"navbar\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"user.dashboard\" ng-show=\"auth.isAuthenticated()\">Dashboard</a></li>\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"user.profile\" ng-show=\"auth.isAuthenticated()\">Profile</a></li>\n" +
    "\n" +
    "            </ul>\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li>\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"anon.home\">Website</a></li>\n" +
    "                    <li><a ng-click=\"logout()\" ng-show=\"auth.isAuthenticated()\" href='#'>Logout</a></li>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n"
  );

  $templateCache.put("user/profile.html",
    "Profile de {{user.email}}\n"
  );

}]);

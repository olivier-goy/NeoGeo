angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("anon/home.html",
    "<div class=\"container\" ng-controller=\"homeMap\">\n" +
    "\n" +
    "    <div map-lazy-load=\"https://maps.google.com/maps/api/js\" map-lazy-load-params=\"{{ googleMapsUrl }}\">\n" +
    "        <ng-map center=\"48,2\" zoom=\"2\"  class=\"map\"></ng-map>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n"
  );

  $templateCache.put("anon/login.html",
    "<div class=\"container\">\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <div class=\"row\" ng-controller=\"LoginController\">\n" +
    "        <div class=\"row\">\n" +
    "\n" +
    "\n" +
    "            <div class=\"col-lg-offset-3 col-lg-6\">\n" +
    "                <div class=\"input-group\">\n" +
    "                    <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\" ng-model=\"country\">\n" +
    "                    <span class=\"input-group-btn\">\n" +
    "                      <button class=\"btn btn-primary\" type=\"button\"  ng-click=\"search()\">Go !</button>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <br/>\n" +
    "        <div class=\"row\">\n" +
    "\n" +
    "            <div class=\"col-lg-offset-1 col-lg-10\">\n" +
    "\n" +
    "\n" +
    "                <div >\n" +
    "\n" +
    "\n" +
    "                    <!-- <p>{{ screen[1].id }}</p> -->\n" +
    "                    <div ng-repeat=\"screen in screens\" class=\"screen col-xs-6\">\n" +
    "\n" +
    "                        <!-- <div ng-if=\"screen[1].id !== undefined\"> -->\n" +
    "                        <a name=\"lkr-timelapse-player\" data-id=\"{{ screen.id }}\" data-play=\"day\" href=\"//lookr.com/{{ screen.id }}\" target=\"_blank\">Navarredonda de Gredos: Bar el Cruce</a>\n" +
    "                        <script async type=\"text/javascript\" src=\"//api.lookr.com/embed/script/timelapse.js\"></script>\n" +
    "                        <!-- </div> -->\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("anon/navbar.html",
    "<nav class=\"navbar navbar-inverse navbar-static-top\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
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
    "\n" +
    "            </li>\n" +
    "            \n" +
    "        </ul>\n" +
    "\n" +
    "\n" +
    "        <div class=\"nav navbar-right  navbarSearch\">\n" +
    "            <button class=\"btn btn-primary \" ui-sref=\"anon.login\">Search !</button>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</nav>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<footer>\n" +
    "\n" +
    "    <div class=\"navbar navbar-inverse navbar-fixed-bottom\">\n" +
    "        <div class=\"container\">\n" +
    "            <p class=\"navbar-text pull-left\">NeoGeo © 2017 | WCS Product | Dream by Olivier & Jehan</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</footer>\n"
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

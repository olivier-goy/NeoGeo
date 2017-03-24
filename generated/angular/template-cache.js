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
    "        <ng-map center=\"48,2\" zoom=\"2\" class=\"map\">\n" +
    "            <custom-marker id=\"foo\" position=\"france\" on-click=\"vm.closeCustomMarker()\">\n" +
    "              <button type=\"button\" class=\"btn btn-link btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\"><img width=\"70\" src=\"http://www.toutesleswebcams.com/images/webcam-metz-cathedrale.jpg\" align=\"left\" /></button>\n" +
    "\n" +
    "            </custom-marker>\n" +
    "\n" +
    "            <!-- Modal -->\n" +
    "            <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n" +
    "              <div class=\"modal-dialog\" role=\"document\">\n" +
    "                <div class=\"modal-content\">\n" +
    "                  <div class=\"modal-header\">\n" +
    "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "\n" +
    "                  </div>\n" +
    "                  <div class=\"modal-body\">\n" +
    "                    <a name=\"lkr-timelapse-player\" data-id=\"1178148742\" data-play=\"day\" href=\"//lookr.com/1178148742\" target=\"_blank\">Navarredonda de Gredos: Bar el Cruce</a>\n" +
    "                    <script async type=\"text/javascript\" src=\"//api.lookr.com/embed/script/timelapse.js\"></script>\n" +
    "                  </div>\n" +
    "                  <div class=\"modal-footer\">\n" +
    "                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <custom-marker id=\"foo\" position=\"russie\" on-click=\"vm.closeCustomMarker()\">\n" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-link btn-lg\" data-toggle=\"modal\" data-target=\"#myModal1\"><img width=\"70\" src=\"http://www.playawebcams.com/andy/webcam-novosibirsk.jpg\" align=\"left\" /></button>\n" +
    "            </custom-marker>\n" +
    "            <!-- Modal -->\n" +
    "            <div class=\"modal fade\" id=\"myModal1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n" +
    "              <div class=\"modal-dialog\" role=\"document\">\n" +
    "                <div class=\"modal-content\">\n" +
    "                  <div class=\"modal-header\">\n" +
    "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "\n" +
    "                  </div>\n" +
    "                  <div class=\"modal-body\">\n" +
    "                    <a name=\"lkr-timelapse-player\" data-id=\"1428614761\" data-play=\"day\" href=\"//lookr.com/1428614761\" target=\"_blank\">Moscow: HD</a><script async type=\"text/javascript\" src=\"//api.lookr.com/embed/script/timelapse.js\"></script>\n" +
    "                  </div>\n" +
    "                  <div class=\"modal-footer\">\n" +
    "                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <custom-marker id=\"foo\" position=\"usa\" on-click=\"vm.closeCustomMarker()\">\n" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-link btn-lg\" data-toggle=\"modal\" data-target=\"#myModal2\"><img width=\"70\" src=\"https://images.webcamgalore.com/webcamimages/webcam-001164.jpg\" align=\"left\" /></button>\n" +
    "            </custom-marker>\n" +
    "            <!-- Modal -->\n" +
    "            <div class=\"modal fade\" id=\"myModal2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n" +
    "              <div class=\"modal-dialog\" role=\"document\">\n" +
    "                <div class=\"modal-content\">\n" +
    "                  <div class=\"modal-header\">\n" +
    "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "\n" +
    "                  </div>\n" +
    "                  <div class=\"modal-body\">\n" +
    "                  <a name=\"lkr-timelapse-player\" data-id=\"1341941407\" data-play=\"day\" href=\"//lookr.com/1341941407\" target=\"_blank\">Iowa City: The University of − Campus live webcam − City</a><script async type=\"text/javascript\" src=\"//api.lookr.com/embed/script/timelapse.js\"></script>\n" +
    "                  </div>\n" +
    "                  <div class=\"modal-footer\">\n" +
    "                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <custom-marker id=\"foo\" position=\"australie\" on-click=\"vm.closeCustomMarker()\">\n" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-link btn-lg\" data-toggle=\"modal\" data-target=\"#myModal3\"><img width=\"70\" src=\"http://www.mylivestreams.com/images/camera/large_10706.jpg\" align=\"left\" /></button>\n" +
    "            </custom-marker>\n" +
    "            <!-- Modal -->\n" +
    "            <div class=\"modal fade\" id=\"myModal3\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n" +
    "              <div class=\"modal-dialog\" role=\"document\">\n" +
    "                <div class=\"modal-content\">\n" +
    "                  <div class=\"modal-header\">\n" +
    "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "\n" +
    "                  </div>\n" +
    "                  <div class=\"modal-body\">\n" +
    "                    <a name=\"lkr-timelapse-player\" data-id=\"1237889733\" data-play=\"day\" href=\"//lookr.com/1237889733\" target=\"_blank\">Sydney</a><script async type=\"text/javascript\" src=\"//api.lookr.com/embed/script/timelapse.js\"></script>\n" +
    "                  </div>\n" +
    "                  <div class=\"modal-footer\">\n" +
    "                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <custom-marker id=\"foo\" position=\"angola\" on-click=\"vm.closeCustomMarker()\">\n" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-link btn-lg\" data-toggle=\"modal\" data-target=\"#myModal4\"><img width=\"70\" src=\"https://images.webcams.travel/webcam/1378309110-Weather-Skyna-Hotel-Luanda-Angola-Maianga.jpg?token=gv-Te9wpQRe\" align=\"left\" /></button>\n" +
    "            </custom-marker>\n" +
    "            <!-- Modal -->\n" +
    "            <div class=\"modal fade\" id=\"myModal4\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n" +
    "              <div class=\"modal-dialog\" role=\"document\">\n" +
    "                <div class=\"modal-content\">\n" +
    "                  <div class=\"modal-header\">\n" +
    "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "\n" +
    "                  </div>\n" +
    "                  <div class=\"modal-body\">\n" +
    "                    <a name=\"lkr-timelapse-player\" data-id=\"1181821601\" data-play=\"day\" href=\"//lookr.com/1181821601\" target=\"_blank\">Windhoek</a><script async type=\"text/javascript\" src=\"//api.lookr.com/embed/script/timelapse.js\"></script>\n" +
    "                  </div>\n" +
    "                  <div class=\"modal-footer\">\n" +
    "                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <custom-marker id=\"foo\" position=\"bresil\" on-click=\"vm.closeCustomMarker()\">\n" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-link btn-lg\" data-toggle=\"modal\" data-target=\"#myModal5\"><img width=\"70\" src=\"https://www.monde-du-voyage.com/bresil/webcams-bresil.jpg\" align=\"left\" /></button>\n" +
    "            </custom-marker>\n" +
    "            <!-- Modal -->\n" +
    "            <div class=\"modal fade\" id=\"myModal5\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n" +
    "              <div class=\"modal-dialog\" role=\"document\">\n" +
    "                <div class=\"modal-content\">\n" +
    "                  <div class=\"modal-header\">\n" +
    "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "\n" +
    "                  </div>\n" +
    "                  <div class=\"modal-body\">\n" +
    "                    <a name=\"lkr-timelapse-player\" data-id=\"1324489923\" data-play=\"day\" href=\"//lookr.com/1324489923\" target=\"_blank\">Copacabana: Beach</a><script async type=\"text/javascript\" src=\"//api.lookr.com/embed/script/timelapse.js\"></script>\n" +
    "                  </div>\n" +
    "                  <div class=\"modal-footer\">\n" +
    "                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <custom-marker id=\"foo\" position=\"chine\" on-click=\"vm.closeCustomMarker()\">\n" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-link btn-lg\" data-toggle=\"modal\" data-target=\"#myModal6\"><img width=\"70\" src=\"http://www.mylivestreams.com/images/camera/large_11828.jpg\" align=\"left\" /></button>\n" +
    "            </custom-marker>\n" +
    "            <!-- Modal -->\n" +
    "            <div class=\"modal fade\" id=\"myModal6\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n" +
    "              <div class=\"modal-dialog\" role=\"document\">\n" +
    "                <div class=\"modal-content\">\n" +
    "                  <div class=\"modal-header\">\n" +
    "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "\n" +
    "                  </div>\n" +
    "                  <div class=\"modal-body\">\n" +
    "                    <a name=\"lkr-timelapse-player\" data-id=\"1179240123\" data-play=\"day\" href=\"//lookr.com/1179240123\" target=\"_blank\">Hong Kong: Downtown live webcam in China</a><script async type=\"text/javascript\" src=\"//api.lookr.com/embed/script/timelapse.js\"></script>\n" +
    "                  </div>\n" +
    "                  <div class=\"modal-footer\">\n" +
    "                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <custom-marker id=\"foo\" position=\"kazakhstan\" on-click=\"vm.closeCustomMarker()\">\n" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-link btn-lg\" data-toggle=\"modal\" data-target=\"#myModal7\"><img width=\"70\" src=\"http://www.worldincams.com/img/webcams/kazakhstan/kazakhstan-almaty-ploshad-respubliki-almaty-daylight.jpg\" align=\"left\" /></button>\n" +
    "            </custom-marker>\n" +
    "            <!-- Modal -->\n" +
    "            <div class=\"modal fade\" id=\"myModal7\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n" +
    "              <div class=\"modal-dialog\" role=\"document\">\n" +
    "                <div class=\"modal-content\">\n" +
    "                  <div class=\"modal-header\">\n" +
    "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "\n" +
    "                  </div>\n" +
    "                  <div class=\"modal-body\">\n" +
    "                    <a name=\"lkr-timelapse-player\" data-id=\"1481519833\" data-play=\"day\" href=\"//lookr.com/1481519833\" target=\"_blank\">Zaimka Bulygina › North-East: Central square, Semip: View from Irtysh hotel to Central square</a><script async type=\"text/javascript\" src=\"//api.lookr.com/embed/script/timelapse.js\"></script>\n" +
    "                  </div>\n" +
    "                  <div class=\"modal-footer\">\n" +
    "                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <custom-marker id=\"foo\" position=\"canada\" on-click=\"vm.closeCustomMarker()\">\n" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-link btn-lg\" data-toggle=\"modal\" data-target=\"#myModal8\"><img width=\"70\" src=\"http://canadianrockies.org/banffwebcam/wp-content/uploads/tdomf/336/GetLiveImage.jpg\" align=\"left\" /></button>\n" +
    "            </custom-marker>\n" +
    "            <!-- Modal -->\n" +
    "            <div class=\"modal fade\" id=\"myModal8\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n" +
    "              <div class=\"modal-dialog\" role=\"document\">\n" +
    "                <div class=\"modal-content\">\n" +
    "                  <div class=\"modal-header\">\n" +
    "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "\n" +
    "                  </div>\n" +
    "                  <div class=\"modal-body\">\n" +
    "                    <a name=\"lkr-timelapse-player\" data-id=\"1349193322\" data-play=\"day\" href=\"//lookr.com/1349193322\" target=\"_blank\">Fort McMurray: Airport − Southeast View</a><script async type=\"text/javascript\" src=\"//api.lookr.com/embed/script/timelapse.js\"></script>\n" +
    "                  </div>\n" +
    "                  <div class=\"modal-footer\">\n" +
    "                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </ng-map>\n" +
    "        <!-- <ng-map center=\"-25.363882,131.044922\" zoom=\"4\"> -->\n" +
    "\n" +
    "        <!-- </ng-map> -->\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
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
    "                      <button class=\"btn btn-primary\" type=\"button\" ng-click=\"search()\">Go !</button>\n" +
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
    "\n" +
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
    "\n" +
    "        <div class=\"nav navbar-right  navbarSearch\">\n" +
    "            <button class=\"btn btn-primary \" ui-sref=\"anon.login\">Search !</button>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "</nav>\n" +
    "\n" +
    "<!--Footer-->\n" +
    "\n" +
    "\n" +
    "<footer>\n" +
    "\n" +
    "        <link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n" +
    "        <link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha256-MfvZlkHCEqatNoGiOXveE8FIwMzZg4W85qfrfIFBfYc= sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==\"\n" +
    "            crossorigin=\"anonymous\">\n" +
    "        <!-- // -->\n" +
    "        <div class=\"container\">\n" +
    "            <a id=\"fin\"> NeoGeo | WCS  La loupee Product | Dream by Olivier & Jehan | Ⓒ 2017<br></a>\n" +
    "            <a href=\"https://www.facebook.com/bootsnipp\"><i id=\"social-fb\" class=\"fa fa-facebook-square fa-3x social\"></i></a>\n" +
    "            <a href=\"https://twitter.com/bootsnipp\"><i id=\"social-tw\" class=\"fa fa-twitter-square fa-3x social\"></i></a>\n" +
    "            <a href=\"https://plus.google.com/+Bootsnipp-page\"><i id=\"social-gp\" class=\"fa fa-google-plus-square fa-3x social\"></i></a>\n" +
    "            <a href=\"mailto:bootsnipp@gmail.com\"><i id=\"social-em\" class=\"fa fa-envelope-square fa-3x social\"></i></a>\n" +
    "        </div>\n" +
    "        <hr>\n" +
    "        </div>\n" +
    "\n" +
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

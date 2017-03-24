angular.module('app')
    .controller('mapController', function($http, $interval, NgMap) {
        $scope.map = {
            center: {
                latitude: 46.5132, //Position initial de la carte
                longitude: 0.1033
            },
            zoom: 11 // de 0 à 19, 0 étant la valeur de zoom la plus forte
        };

        $scope.markers = [{
            coord: {
                latitude: 44.93, //Coordonnées où placer le point
                longitude: 4.89
            },
            email: "netapsys@netapsys.fr", //Propriété métier, pour les afficher à l'utilisateur lorsqu'il sélectionne le point par exemple
            icon: "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi.png", //Icone personnalisée
            id: 412
        }, {
            coord: {
                latitude: 46.5132,
                longitude: 0.1033
            },
            email: "netapsys@netapsys.fr",
            icon: "//developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png", //Icone personnalisée
            id: 413
        }];

        $scope.clickMarker = function(marker) {
            alert(marker.email); //Affichera l'email du point sur lequel on a cliqué
        };
    });

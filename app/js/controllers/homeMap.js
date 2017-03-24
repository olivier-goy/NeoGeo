angular.module('app')
    .controller('homeMap', function($scope) {
      $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyCv5auTo8Sbai_cAn0L8vS1yTJi6WCIoDU";
    });


    // angular.module('app')
    //     .controller('homeMap', function($scope, $http) {
    //       $http.get('https://webcamstravel.p.mashape.com/webcams/list/country=' + country + 'X-Mashape-Key' + 'eZY75umHXumshR2VkxxmAMf8mDqIp1BscWhjsnuQfAAguHJVdi');
    //     });

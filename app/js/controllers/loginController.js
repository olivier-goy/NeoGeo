angular.module('app')
    .controller('LoginController', function($scope, $http) {


        $scope.country = "";

        $scope.search = function() {
            $http.get('https://webcamstravel.p.mashape.com/webcams/list/limit=10/country=' + $scope.country +'?show=webcams:location,image,url', {
                headers: {
                    'X-Mashape-Key': 'eZY75umHXumshR2VkxxmAMf8mDqIp1BscWhjsnuQfAAguHJVdi'
                }
            }).then(function(res) {
                $scope.tot = res.data;
                $scope.screens = res.data.result.webcams;


                console.log(res.data);
            });

        };

    });

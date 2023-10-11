var app = angular.module('myApp', []);
app.service('dataService', function ($http) {
    var data = [];
    this.loadData = function () {
        return $http.get('https://api.adviceslip.com/advice')
            .then(function (response) {
                data = response.data;
                return data;
            });
    };
    this.getData = function () {
        return data;
    };
});


app.controller('randController', function($scope, $http, $location, $filter, dataService) {
    $scope.loadNewAdvice = function() {
        dataService.loadData()
          .then(function(response) {
            $scope.items = dataService.getData();
            $scope.advices = $scope.items.slip;
          })
          .catch(function(error) {
            console.error('Erreur lors de la récupération du JSON :', error);
          });
      };

      $scope.loadNewAdvice();

});




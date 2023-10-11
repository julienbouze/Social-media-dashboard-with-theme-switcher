var app = angular.module('myApp', []);


app.controller('styleController', function($scope) {

    $scope.isChecked = false; // Initialisez la valeur par défaut
    $scope.checkboxChanged = function() {
    $scope.isChecked = !$scope.isChecked;
        console.log('La valeur de la checkbox est : ' + $scope.isChecked);
    };
});


var app = angular.module('reddit-app', [])

app.controller("AppController", function ($scope) {
  $scope.showingForm = false;

  $scope.toggleForm = function () {
    $scope.showingForm = !$scope.showingForm;
  }
})

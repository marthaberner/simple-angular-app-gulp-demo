var app = angular.module('reddit-app', [])

app.controller("AppController", function ($scope) {
  $scope.showingForm = false;

  $scope.showForm = function () {
    $scope.showingForm = !$scope.showingForm;
  }
})

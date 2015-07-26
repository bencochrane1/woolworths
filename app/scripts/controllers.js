angular.module('starter.controllers', [])

.controller('ProductsCtrl', function($scope) {})

.controller('RecipesCtrl', function($scope) {})

.controller('ListsCtrl', function($scope) {})

.controller('TrolleyCtrl', function($scope) {})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

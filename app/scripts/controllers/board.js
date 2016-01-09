'use strict';

/**
 * @ngdoc function
 * @name chessApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chessApp
 */
angular.module('chessApp')
  .controller('BoardCtrl', function ($scope, $log, Board) {
    Board.setup();
    $scope.board = Board.board;
  });

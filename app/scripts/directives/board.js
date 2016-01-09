'use strict';

/**
 * @ngdoc directive
 * @name chessApp.directive:board
 * @description
 * # board
 */
angular.module('chessApp')
  .directive('board', function () {
    return {
      templateUrl: 'views/board.html',
      restrict: 'E',
      scope: {},
      controller: 'BoardCtrl',
      link: function postLink(scope, element, attrs) {

      }
    };
  });

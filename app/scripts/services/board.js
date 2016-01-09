'use strict';

/**
 * @ngdoc service
 * @name chessApp.board
 * @description
 * # board
 * Service in the chessApp.
 */
angular.module('chessApp')
  .service('Board', function () {
    var board = {};

    board.board = [];

    // initial array of arrays of hashes
    function setInitialBoard(){
      return [
        [{}, {}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}, {}]
      ];
    }

    board.setup = function(){

      var initialBoard = setInitialBoard();

      // bind
      this.board = initialBoard;

      // paint the fields
      _.each(initialBoard, function(row, rowNo){
        _.each(row, function(column, columnNo){
          board.getField(rowNo, columnNo).color = ((rowNo % 2 !== 0 && columnNo % 2 !== 0) || (rowNo % 2 === 0 && columnNo % 2 === 0)) ? 'white' : 'black';
        });
      });

      return this.board;
    };

    // returns a field at given coordinates from the board
    board.getField = function(x, y){
      return board.board[x][y];
    };

    return board;
  });

(function () {
    'use strict';

    angular
        .module('app')
        .controller('YesNoController', YesNoController);

    YesNoController.$inject = ['$scope', 'close'];
    function YesNoController($scope, close) {
      $scope.close = function(result) {
          close(result, 500);
      };

    }

})();

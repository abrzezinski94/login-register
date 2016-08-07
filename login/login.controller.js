(function(){
  'use strict';

  angular
    .module('app')
    .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService'];
    function LoginController($location, AuthenticationService, FlashService){
      var ctrl = this;

      ctrl.login = login;

      (function initController(){
        // reset login status
        AuthenticationService.ClearCredentials();
      })();

      function login() {
        ctrl.dataLoading = true;
        AuthenticationService.Login(ctrl.username, ctrl.password, function(response){
          if(response.success){
            AuthenticationService.SetCredentials(ctrl.username, ctrl.password);
            $location.path('/');
          }else{
            FlashService.Error(response.message);
            ctrl.dataLoading = false;
          }
        });
      };
    }
})();

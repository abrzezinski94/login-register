(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['UserService', '$rootScope', '$location', 'ModalService'];
    function HomeController(UserService, $rootScope, $location, ModalService) {
        var ctrl = this;

        ctrl.user = null;
        ctrl.allUsers = [];
        ctrl.deleteUser = deleteUser;
        ctrl.changePassword = changePassword;

        initController();

        function initController() {
            loadCurrentUser();
            loadAllUsers();
        }

        function loadCurrentUser() {
            UserService.GetByUsername($rootScope.globals.currentUser.userName)
                .then(function (user) {
                    ctrl.user = user;
                });
        }

        function loadAllUsers() {
            UserService.GetAll()
                .then(function (users) {
                    ctrl.allUsers = users;
                });
        }

        function deleteUser(id) {
            UserService.GetById(id)
            .then(function (user) {
                  UserService.Delete(id).then(function(){
                    if(user.username === $rootScope.globals.currentUser.username){
                      $location.path('/login');
                    }else{
                      loadCurrentUser();
                      loadAllUsers();
                    }

                  });
            });
        }

        function changePassword(){

        };
    }

})();

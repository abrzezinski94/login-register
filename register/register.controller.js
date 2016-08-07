(function () {
    'use strict';

    angular
        .module('app')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];
    function RegisterController(UserService, $location, $rootScope, FlashService) {
        var ctrl = this;

        ctrl.register = register;

        function register() {
            ctrl.dataLoading = true;
            UserService.Create(ctrl.user)
                .then(function (response) {
                    if (response.success) {
                        FlashService.Success('Registration successful', true);
                        $location.path('/login');
                    } else {
                        FlashService.Error(response.message);
                        ctrl.dataLoading = false;
                    }
                });
        }
    }

})();

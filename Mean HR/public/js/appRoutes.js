angular.module('appRoutes', ['ui.router'])

    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('index', {
                    url: '/',
                    templateUrl: 'views/home.html'
                })

                .state('admin', {
                    url: '/admin',
                    templateUrl: 'views/admin/admin.html'
                })

                .state('admin.admin-home', {
                    url: '/home',
                    templateUrl: 'views/admin/adminHome.html'
                })

                .state('admin.admin-add', {
                    url: '/add',
                    templateUrl: 'views/admin/adminAdd.html',
                    controller: 'vehicleAddController as vac'
                })

                .state('admin.admin-list', {
                    url: '/list',
                    templateUrl: 'views/admin/adminList.html',
                    controller: 'vehicleAddController as vac'
                })

                .state('admin.admin-make-add', {
                    url: '/make/add',
                    templateUrl: 'views/admin/adminMakeAdd.html',
                    controller: 'vehicleAddController as vac'
                })

                .state('admin.admin-make-list', {
                    url: '/make/list',
                    templateUrl: 'views/admin/adminMakeList.html',
                    controller: 'vehicleAddController as vac'
                })

            $urlRouterProvider.otherwise('/');

        }]);
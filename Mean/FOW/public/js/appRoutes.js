angular.module('appRoutes', ['ui.router'])

    .config([
        '$stateProvider',
        '$urlRouterProvider',
        '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {



            $stateProvider
                .state('index', {
                    url: '/',
                    templateUrl: 'views/home.html',
                })

                .state('cards', {
                    url: '/cards',
                    templateUrl: 'views/cards/cards.html'
                })

                .state('cards-list', {
                    url: '/cards/list',
                    templateUrl: 'views/cards/cardsList.html'
                })
                .state('cards-search', {
                    url: '/cards/search',
                    templateUrl: 'views/cards/cardsSearch.html'
                })

                .state('admin', {
                    url: '/admin',
                    templateUrl: 'views/admin/admin.html'
                })



            $locationProvider.html5Mode({
                enabled: true,
            });

            $urlRouterProvider.otherwise('/');
        }]);
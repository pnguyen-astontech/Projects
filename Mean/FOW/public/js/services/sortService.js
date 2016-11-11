angular.module('sortService', [])

    .factory('sortService', ['$http', function ($http) {
        return {
            getAllAttributes: function () {
                return $http.get('/api/attributes')
                    .then(function (response) {
                        return response.data;
                    });
            },

            getAllReleases: function () {
                return $http.get('/api/releases')
                    .then(function (response) {
                        return response.data;
                    });
            },

            getCardByName: function (val) {
                return $http.get('/api/cards?q='+ val)
                    .then(function (response) {
                        return response.data;
                    });
            }

        }
    }])
angular.module('cardService', [])

    .factory('cardService', ['$http', function($http) {
        return {
            getAll : function() {
                return $http.get('/api/cards')
                    .then(function (response) {
                        return response.data;
                    });
            },

            getById : function(id) {
                return $http.get('/api/cards/' + id)
                    .then(function (response) {
                        return response.data;
                    });
            },

            addNew : function(card) {
                return $http.post('/api/cards', vehicle)                
                    .then(function (response) {
                        return response.data;
                    });
            },

            update : function(id, card) {
                return $http.post('/api/cards/' + id, vehicle)
                    .then(function (response) {
                        return response.data;
                    });
            },

            delete : function (id) {
                return $http.delete('/api/cards/' + id)
                    .then(function (response) {
                        return response.data;
                    });
            } 
        }
    }])


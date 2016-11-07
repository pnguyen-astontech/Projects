angular.module('vehicleService', [])

    .factory('vehicleService', ['$http', function($http) {
        return {
            getAll : function() {
                return $http.get('/api/vehicle')
                    .then(function (response) {
                        return response.data;
                    });
            },

            getById : function(id) {
                return $http.get('/api/vehicle/' + id)
                    .then(function (response) {
                        return response.data;
                    });
            },

            addNew : function(vehicle) {
                return $http.post('/api/vehicle', vehicle)                
                    .then(function (response) {
                        return response.data;
                    });
            },

            update : function(id, vehicle) {
                return $http.post('/api/vehicle/' + id, vehicle)
                    .then(function (response) {
                        return response.data;
                    });
            },

            delete : function (id) {
                return $http.delete('/api/vehicle/' + id)
                    .then(function (response) {
                        return response.data;
                    });
            } 
        }
    }])


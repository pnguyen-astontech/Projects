angular.module('vehicleController', ['vehicleService'])

    .directive('adminMakeSubNavBar', function() {
        return {
            templateUrl: '/views/admin/adminMakeSubNavBar.html'
        };
    })
    .directive('adminSubNavBar', function () {
        return {
            templateUrl: '/views/admin/adminSubNavBar.html'
        };
    })

    .controller('vehicleAddController', function ($scope, $window, vehicleService) {
        var self = this;

        vehicleService.getAll()
            .then(function (foundVehicleList) {
                self.vehicleList = foundVehicleList;
            });

        self.addVehicle = function () {
            self.vehicle = {
                make: $scope.make,
                model: $scope.model,
                plate: $scope.plate,
                vin: $scope.vin,
                year: $scope.year,
                color: $scope.color
            }

            vehicleService.addNew(self.vehicle)
                .then(function (data) {
                    if (data) {
                        alert('Save successful');
                        self.clearFields();
                    } else {
                        alert('Save unsucessful');
                    }
                });
        };

        self.editVehicle = function (id) {
        };

        self.deleteVehicle = function (id) {
            vehicleService.delete(id)
                .then(function (updatedVehicleList) {
                    self.vehicleList = updatedVehicleList;
                })
        };

        self.clearFields = function () {
            $scope.make = '';
            $scope.model = '';
            $scope.plate = '';
            $scope.vin = '';
            $scope.year = '';
            $scope.color = '';
        };
    });

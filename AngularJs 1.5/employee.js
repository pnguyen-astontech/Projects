//region APP.JS

angular.module('app', [])
    .service('employeeService', employeeService)
    .controller('EmployeeCtrl', EmployeeCtrl);

//endregion

//region EMPLOYEE-SERVICE.JS

function employeeService($http) {

    var url = "http://localhost:8080/api/employee/"

    this.getAll = function() {
        return $http.get(url)
            .then(function (response) {
                return response.data;
            })
    };

    this.getById = function(id) {
        return $http.get(url + id)
            .then(function (response) {
                console.log(response);
                return response.data;
            })
    }

    this.save = function(data) {
        return $http.post(url, data);
    }

    this.delete = function(id) {
        return $http.delete(url + id)
            .then(function (response) {
                return response.data;
            })
    }

}

//endregion

//region EMPLOYEE-CONTROLLER.JS


function EmployeeCtrl(employeeService) {
    var self = this;

    employeeService.getAll()
        .then(function(employeeList) {
            self.employeeList = employeeList;
        });


    self.edit = function(id) {
        console.log(id);
        employeeService.getById(id)
            .then(function(foundEmployee) {
                console.log(foundEmployee);
                self.employee = foundEmployee;
                // just easier to use jQuery to open the modal.
                $('#employeeModal').modal('show');
            })
    }


    self.save = function (employee) {
        console.log(employee);
        employeeService.save(employee)
            .success(function(body) {
                window.location.reload();
                console.log(body);
            })
    }

    self.delete = function(id) {
        employeeService.delete(id)
            .then(function(response){
                // success callback
                console.log(response);
                window.location.reload();
            })
    }

    self.lookup = function(id) {
        employeeService.getById(id)
            .then(function (data) {
                self.employeeEdit = data;
            })

    }


}

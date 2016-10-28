var sudoku = angular.module('mainApp', []);

sudoku.controller('mainController', ['$scope', function ($scope) {
        $scope.sudoku = [
                {list: [
                        {item: 1}, 
                        {item: 2}, 
                        {item: 3}
                        ]
                },
                {list: [
                        {item: 4}, 
                        {item: 5}, 
                        {item: 6}
                        ]
                },
                {list: [
                        {item: 7}, 
                        {item: 8}, 
                        {item: 9}
                        ]
                },
        ];
}]);

sudoku.directive('sudoku', function () {
        return {
                templateUrl: 'app/Sudoku.html'
        }
});

//region APP.JS

var app = angular.module('app', []);

app.controller("appController", function ($scope, bc) {
        $scope.one = '';
        $scope.two = '';
        $scope.three = '';
        $scope.four = '';
        $scope.five = '';

        $scope.checkCounter = bc.checkCounter;

        bc.generateRandomNumber();
        $scope.generateRandomNumber = function () {
                bc.generateRandomNumber();
                $scope.checkCounter = bc.checkCounter;
                $scope.bullsAndCows = bc.bullsAndCows;
                $scope.winner = bc.winner;
        };

        $scope.checkGuesses = function (one, two, three, four, five) {
                bc.checkGuesses(one, two, three, four, five);
                $scope.checkCounter = bc.checkCounter;
                $scope.bullsAndCows = bc.bullsAndCows;
                $scope.winner = bc.winner;
        };
})

app.service("bc", function () {

        this.checkCounter = 0;
        this.listItems = [0, 0, 0, 0, 0];
        this.bullsAndCows = [null, null, null, null, null];
        this.winner = false;

        this.generateRandomNumber = function () {
                this.checkCounter = 0;
                this.bullsAndCows = [null, null, null, null, null];
                this.winner = "";

                var rand = Math.floor((Math.random() * 10));
                for (let key in this.listItems) {
                        while (this.listItems.indexOf(rand) != -1) {
                                rand = Math.floor((Math.random() * 10));
                        }
                        this.listItems[key] = rand;
                }
                console.log(this.listItems);
        }

        this.checkGuesses = function (one, two, three, four, five) {
                this.checkCounter += 1;

                this.validateInput(one, 0);
                this.validateInput(two, 1);
                this.validateInput(three, 2);
                this.validateInput(four, 3);
                this.validateInput(five, 4);

                console.log(this.listItems);
                console.log(this.bullsAndCows);
                if (this.checkWinCondition()) {
                        this.setWinner();
                }

        }

        this.validateInput = function (input, index) {
                if (!isNaN(input) && input != '') {
                        this.compareGuess(input, index);
                }
                else {
                        this.bullsAndCows[index] = null;
                }

        }

        this.compareGuess = function (guess, index) {
                if (this.listItems[index] == guess) {
                        this.bullsAndCows[index] = "BULL";
                }

                else if (this.listItems.indexOf(parseInt(guess)) != -1) {
                        this.bullsAndCows[index] = "COW";
                }

                else {
                        this.bullsAndCows[index] = guess;
                }

        }

        this.checkWinCondition = function () {
                for (let key in this.bullsAndCows) {
                        if (this.bullsAndCows[key] != "BULL") {
                                return false;
                        }
                }

                return true;
        }

        this.setWinner = function () {
                this.winner = true;
        }

})

app.directive('ryan', function() {
        return {
                templateUrl: 'app/asciiRyan.html'
        }
})
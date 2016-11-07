angular.module('appController', ['cardService', 'ui.bootstrap'])

    .directive('navbar', function () {
        return {
            templateUrl: '/views/includes/navbar.html'
        };
    })
    .directive('cardsNavbar', function () {
        return {
            templateUrl: '/views/cards/cardsNavbar.html'
        };
    })
    .directive('footer', function () {
        return {
            templateUrl: '/views/includes/footer.html'
        };
    })

    .controller('appController', function ($scope, $uibModal, $document, cardService) {
        var self = this;

        cardService.getAll()
            .then(function (foundCardList) {
                self.cardList = foundCardList;
                console.log(foundCardList);
            });

        $scope.showModal = function () {
        }

        self.openCardModal = function (size, card) {
            var modalInstance = $uibModal.open({
                template: `<div class="img-responsive center-block">
                                <img src="` + card.picture + `"/>
                           </div`,
                 size: size
            })
        }
    });

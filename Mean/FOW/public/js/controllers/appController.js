angular.module('appController', ['cardService', 'sortService', 'ui.bootstrap'])

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

    .controller('appController', function ($scope, $uibModal, $document, cardService, sortService, limitToFilter) {
        var self = this;

        cardService.getAll()
            .then(function (foundCardList) {
                self.cardList = foundCardList;
            });

        sortService.getAllAttributes()
            .then(function (foundAttributeList) {
                self.attributeList = foundAttributeList;
            })

        sortService.getAllReleases()
            .then(function (foundReleaseList) {
                self.releaseList = foundReleaseList;
            })

        self.displayReleases = function(attr) {

        }

        self.cardSearch = [];
        $scope.$watch('asyncSelected', function(val) {
            sortService.getCardByName(val)
                .then(function (foundCardList) {   
                    self.cardSearch.length = 0;                 
                    angular.forEach(foundCardList, function(item) {
                        self.cardSearch.push("item.name");
                    });
                })
        })
        self.getCardByName = function (val) {
            return sortService.getCardByName(val)
                .then(function (foundCardList) {                    
                    return limitToFilter(foundCardList.map(function(item) {
                        return item;
                    }), 8);
                })
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

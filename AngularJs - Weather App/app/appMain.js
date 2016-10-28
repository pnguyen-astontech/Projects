angular.module('app', [])
    .service('locationService', locationService)
    .controller('appController', appController)
    .directive('main', function () {
        return {
            templateUrl: 'app/appMain.html'
        }
    });

function locationService($http) {

    this.getIpLocation = function () {
        var url = 'http://ip-api.com/json'
        return $http.get(url)
            .then(function (response) {
                return response.data;
            });
    };

    this.getLocation = function (place) {
        var placeArray = place.split(" ");
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
        placeArray.forEach(function (word) {
            url += '+' + word;
        })
        url += '&key=AIzaSyCTPMBK2iJYnNhFm8MXFYUxxoXoPXg0K_E';

        return $http.get(url)
            .then(function (response) {
                return response.data;
            });
    };

    this.getWeather = function (lat, lon) {
        var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=366d18c36bd87052b953449b2917cf1f'
        return $http.get(url)
            .then(function (response) {
                return response.data;
            });
    };

    this.getForecast = function (lat, lon) {
        var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + lat + '&lon=' + lon + '&cnt=7&appid=366d18c36bd87052b953449b2917cf1f'
        return $http.get(url)
            .then(function (response) {
                return response.data;
            });
    };
}

function appController(locationService, $scope) {
    var self = this;

    locationService.getIpLocation()
        .then(function (foundIpLocation) {
            self.ipLocation = foundIpLocation;
            $scope.place = self.ipLocation.city + ", " + self.ipLocation.region + " " + self.ipLocation.zip;
        });

    self.getLocation = function (place) {
        locationService.getLocation(place)
            .then(function (foundLocation) {
                self.location = foundLocation;
            });
    };

    self.getWeather = function (lat, lng) {
        locationService.getWeather(lat, lng)
            .then(function (foundWeather) {
                self.weather = foundWeather;
                $('#weatherModal').modal('show');
            });
        locationService.getForecast(lat, lng)
            .then(function (foundForecast) {
                self.forecast = foundForecast;
            });
    };

}

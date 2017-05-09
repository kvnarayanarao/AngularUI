(function() {
    var app = angular.module("ABC");

    app.factory("requestHandlers", ['$http', '$rootScope', 'config', function($http, $rootScope, config) {

        var requestMapService = function(url) {
            return $http({
                url: url,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Encoding': 'gzip',
                }
                //,cache: true
            });
        }
        return {
            requestMapService: requestMapService,
        };
    }]);

})();
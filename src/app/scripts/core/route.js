(function() {
    angular.module("ABC")
        .config(['config', '$routeProvider',

            function(config, $routeProvider) {

                $routeProvider.when("/mainA", {
                    templateUrl: config.routing.menuA,
                    controller: "mainAController"
                });

                $routeProvider.when("/mainB", {
                    templateUrl: config.routing.menuB,
                    controller: "mainBController"
                });
                $routeProvider.otherwise({
                    redirectTo: "/mainA"
                });

            }
        ]);


})();
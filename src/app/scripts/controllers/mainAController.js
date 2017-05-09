(function() {
    angular.module("ABC").controller("mainAController", ['config', '$scope', '$rootScope', 'chartHandlerService', '$route', '$routeParams', 'requestHandlers', '$timeout', 'Crossfilter',
        function(config, $scope, $rootScope, chartHandler, $route, $routeParams, requestHandlers, $timeout, Crossfilter) {
                
                $rootScope.allData={};
                $rootScope.viewFlag=true;
                requestHandlers.requestMapService(config.data.menuAJSON).then(
                    function(successResponse) {
                        if (successResponse.status == 200 && successResponse.data != "") {
                            $rootScope.allData = successResponse.data;
                            $rootScope.subleftPanel = successResponse.data.subMenu;
                            $scope.loadCenterPanel($rootScope.subleftPanel[0]);
                        } else {
                            requestHandlers.erorHandler(false, $scope);
                        }
                    },
                    function(error) {
                        requestHandlers.erorHandler(error, $scope);
                    });

                $scope.loadCenterPanel = function(leftPanel){
                    $scope.centerData = $rootScope.allData[leftPanel];
                    $rootScope.rightPanel = leftPanel;
                }
                $scope.savePersonalDetails = function(){
                    $rootScope.viewFlag=true;
                }
        }
    ]);
})();
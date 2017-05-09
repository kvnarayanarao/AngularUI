 (function() {
     'use strict';

     angular.module("ABC").controller("TabController", ['$scope', '$rootScope', 'chartHandlerService', '$route', '$routeParams',
         function($scope, $rootScope, chartHandlerService, $route, $routeParams) {

             $rootScope.serverError = false;

             $scope.tabs = [{
                     id: 1,
                     desc: "Main A",
                     link: "#/mainA"
                 }, {
                     id: 2,
                     desc: "Main B",
                     link: "#/mainB"
                 }
             ];

             $scope.currentTab = 1;

             $scope.$on("$routeChangeSuccess", function(event, next, current) {
                 switch (next.originalPath) {
                     case "/mainA":
                         $scope.currentTab = 1;
                         break;
                     case "/mainB":
                         $scope.currentTab = 2;
                         break;
                     default:
                         $scope.currentTab = 1;
                         break;
                 };
             });


             $scope.setCurrentTab = function(currentTab) {
                 if ($scope.currentTab != currentTab.id) {
                     $scope.currentTab = currentTab.id;
                 }
             };

             $scope.editPersonDetails =  function(){
                $rootScope.viewFlag=false;             
            }

             $scope.viewPersonDetails =  function(){
                $rootScope.viewFlag=true;             
            }            
         }
     ]);
 })();
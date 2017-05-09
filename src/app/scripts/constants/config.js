(function() {
    angular.module("ABC").constant('config', {
        routing: {
            menuA: "app/templates/mainA.html",
            menuB: "app/templates/mainB.html"
        },
        directives: {
            leftSubNav: "app/templates/directives/leftSubNav.html",
            filterBar: "app/templates/directives/filterBar.html",
            ttElem: "app/templates/directives/dataTable.html"
        },
        data: {
            menuAJSON: "app/data/menuA.json",
            menuBJSON: "app/data/menuB.json"
        }
    });
})();
(function() {
    var app = angular.module("ABC");
    app.filter('pointFilter', ['$filter', function($filter) {
        return function(input, filterName) {
            if (input != '-' && input != undefined) {

                input = input + "";
                var inputValues = input.split(".");

                if (inputValues.length == 1) {
                    input = input + '.0';
                }
            }else{
                input ="-";
            }
            return input;
        }
    }]);

    app.filter('commaFilter', ['$filter', function($filter) {
        return function(num, filterName) {
            if (num != '-' && num != undefined) {
                num =  num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
            }else{
                num="-";
            }
            return num;
        }
    }]);

    app.filter('numberFixedLen', function() {
        return function(n, len) {
            var num = parseInt(n, 10);
            len = parseInt(len, 10);
            if (isNaN(num) || isNaN(len)) {
                return n;
            }
            num = '' + num;
            while (num.length < len) {
                num = '0' + num;
            }
            return num;
        };
    });

})();
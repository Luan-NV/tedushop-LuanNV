/// <reference path="../plugins/angular/angular.js" />

var myApp = angular.module('myModule', [])

myApp.controller("schoolController", schoolController);

myApp.service('validatorServiceName', validatorServiceImpl);

myApp.directive('teduShopDirective', teduShopDirective);

schoolController.$inject['$scope', 'validatorServiceName'];



//schoolController.$inject = ['$scope'];

//declare
function schoolController($scope, validatorServiceName) {
    //$scope.message = "Announcement from school.";
    //$scope.message =  Validator.outCheckNumber(1);
    $scope.clickCheckNumber = function () {
        $scope.message = validatorServiceName.returnCheckNumber($scope.num);
    }

    $scope.num = 1;
}

function validatorServiceImpl($window) {
    return {
        returnCheckNumber: checkNumber
    }

    function checkNumber(input) {
        if (input % 2 == 0) {
            return 'This is even';
        }
        else {
            return 'This is odd';
        }
    }
}

function teduShopDirective() {
    return {
        template: "<h1>This is my first custom directive</h1>"
    }
}
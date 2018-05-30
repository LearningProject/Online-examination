var app = angular.module("myApp",  []);
app.controller("registerCtrl", ['$scope', function($scope) {
    $scope.pwd = " ";
    $scope.email_id = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    $scope.email="";
    $scope.reset=function(){
        $scope.pwd="";
        $scope.email="";
        $scope.myForm.$setPristine();
$scope.myForm.$setValidity();
$scope.myForm.$setUntouched();
$scope.myForm.$setDirty();
    }
}]);

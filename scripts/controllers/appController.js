mainApp.controller('appController', function($scope,$document,$uibModal) {

    $scope.myInterval = 0;
    $scope.noWrapSlides = false;
    $scope.animationsEnabled = true;

    $scope.toTheTop = function() {
        $document.scrollTopAnimated(0, 1000).then(function() {
        });
    };

    $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };

    $scope.projectModal = function (size,title) {

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'projects/'+title+'.html',
            controller: 'projectController',
            size: size,
            resolve: {
                items: function () {
                }
            }
        });

        modalInstance.result.then(function () {

        }, function () {

        });
    };





});
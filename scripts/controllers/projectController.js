mainApp.controller('projectController', function ($scope, $uibModalInstance, items) {

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});
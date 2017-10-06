Application.$controller("MainPageController", ["$scope", function($scope) {
    "use strict";

    /* perform any action on widgets/variables within this block */
    $scope.onPageReady = function() {
        /*
         * variables can be accessed through '$scope.Variables' property here
         * e.g. to get dataSet in a staticVariable named 'loggedInUser' use following script
         * $scope.Variables.loggedInUser.getData()
         * 
         * widgets can be accessed through '$scope.Widgets' property here
         * e.g. to get value of text widget named 'username' use following script
         * '$scope.Widgets.username.datavalue'
         */
    };

    $scope.getName = function() {
        var name = _.split(_.get($scope.Variables.activeContainers.dataSet, 'success.body.content[0].emailAddress'), '.', 1)[0];

        return name;

    }

    $scope.activeContainersonBeforeUpdate = function(variable, inputData) {



    };


    $scope.search2Submit = function($event, $isolateScope) {

    };

}]);
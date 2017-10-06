Application.$controller("DeployedApps_PartialPageController", ["$scope", function($scope) {
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


}]);


Application.$controller("wavemakeronlineTable1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.anchor1Click = function($event, $isolateScope, row) {

            debugger;

            var lv = $scope.Variables.logsDownload;
            lv.setInput({
                "containerId": row.containerId
            });

            lv.invoke();

        };
    }
]);

Application.$controller("passiveContainersTable1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("dialog1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("dialog2Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.checkboxset1Change = function($event, $isolateScope, newVal, oldVal) {

            if (newVal.length > 1) {
                $scope.Variables.emailToast.notify();
            }

        };


        $scope.button2Click = function($event, $isolateScope) {

            if ($scope.Widgets.checkboxset1.datavalue === undefined) {
                $scope.Variables.emailToast.notify();

            } else {

                if ($scope.Widgets.checkboxset1.datavalue.length != 1) {
                    $scope.Variables.emailToast.notify();
                } else {

                    $scope.Widgets.dialog2.close();

                    var lv = $scope.Variables.activeContainers;
                    lv.setInput({
                        "q": $scope.Widgets.checkboxset1.datavalue[0]
                    });

                    lv.invoke();

                    var sv = $scope.Variables.passiveContainers1;
                    lv.setInput({
                        "q": $scope.Widgets.checkboxset1.datavalue[0]
                    });

                    sv.invoke();
                }

            }

        };


        $scope.dialog2Close = function($event, $isolateScope) {

            $isolateScope.$parent.$parent.Widgets.container1.show = true;

        };

    }
]);
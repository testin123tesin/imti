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

            var lv = $scope.Variables.deploy_logs;
            lv.setInput({
                "containerId": row.containerId
            });

            lv.invoke();

        };

        $scope.switch1_1Change = function($event, $isolateScope, newVal, oldVal) {

            if (newVal == "ACTIVATED") {

                $scope.Widgets.confirmdialog1.open();

            }

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
            debugger;

            if ($scope.Widgets.checkboxset1.datavalue === undefined) {
                $scope.Variables.emailToast.notify();

            } else {

                if ($scope.Widgets.checkboxset1.datavalue.length != 1) {
                    $scope.Variables.emailToast.notify();
                } else {



                    var lv = $scope.Variables.activeContainers;
                    lv.invoke({
                        'inputFields': {
                            'q': $scope.Widgets.checkboxset1.datavalue[0]
                        }
                    });

                    var sv = $scope.Variables.passiveContainers1;

                    sv.invoke({
                        'inputFields': {
                            'q': $scope.Widgets.checkboxset1.datavalue[0]
                        }
                    });

                    $scope.Widgets.dialog2.close();
                }

            }

        };

        $scope.dialog2Close = function($event, $isolateScope) {

            $isolateScope.$parent.$parent.Widgets.container1.show = true;

        };

    }
]);

Application.$controller("confirmdialog1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.confirmdialog1Ok = function($event, $isolateScope) {

            //Calling the variable to activate and in success refresh the grid data using below statement.

            // $scope.Widgets.wavemakeronlineTable1.refreshData();

        };


        $scope.confirmdialog1Cancel = function($event, $isolateScope) {
            $scope.Widgets.wavemakeronlineTable1.redraw(true)

        };

    }
]);
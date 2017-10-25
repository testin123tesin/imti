Application.$controller("Development_Apps_PartialPageController", ["$scope", function($scope) {
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

Application.$controller("dev_dataTable1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.switch2_1Change = function($event, $isolateScope, newVal, oldVal) {
            debugger;

            if (newVal == "ACTIVATED") {

                $scope.Widgets.confirmdialog1_dev.open();

            }

        };

        $scope.anchor2Click = function($event, $isolateScope, row) {

            debugger;

            var lv = $scope.Variables.Dev_logsDownload;
            lv.setInput({
                "containerId": row.containerId
            });

            lv.invoke();

        };
    }
]);

Application.$controller("confirmdialog1_devController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;



        $scope.confirmdialog1_devOk = function($event, $isolateScope) {

            //Calling the variable to activate and in success refresh the grid data using below statement.

            // $scope.Widgets.wavemakeronlineTable1.refreshData();

        };


        $scope.confirmdialog1_devCancel = function($event, $isolateScope) {
            debugger
            $scope.Widgets.dev_dataTable1.redraw(true);
        };

    }
]);
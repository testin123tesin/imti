Application.$controller("AttachmentController", ["$scope", function($scope) {
    "use strict";
    //Variabile utilizzata da tutta la pagina per conoscere il numero di righe

    var numRighe;

    /* 
     * This function will be invoked when any of this prefab's property is changed
     * @key: property name
     * @newVal: new value of the property
     * @oldVal: old value of the property
     */


    function propertyChangeHandler(key, newVal, oldVal) {

        switch (key) {
            case "directory":

                $scope.Variables.setDirectory.setInput("directory", newVal);

                $scope.Variables.setDirectory.invoke();

                break;

        }
    }

    /*
    switch (key) {
        case "prop1":
            // do something with newVal for property 'prop1'
            break;
        case "prop2":
            // do something with newVal for property 'prop2'
            
    }

    /* register the property change handler */
    $scope.propertyManager.add($scope.propertyManager.ACTIONS.CHANGE, propertyChangeHandler);

    $scope.onInitPrefab = function() {

        // this method will be triggered post initialization of the prefab.
    };



    $scope.SelectAllClick = function($event, $isolateScope) {
        for (var i = 0; i < numRighe; ++i) {
            $scope.Widgets.gridmostrafile.selectItem(i);

        }
    };

    $scope.DeselectAllClick = function($event, $isolateScope) {
        $scope.Widgets.gridmostrafile.selecteditem = [];
    };


    $scope.gridmostrafileDatarender = function($isolateScope, $data) {
        numRighe = $data.length;
        $scope.Widgets.gridmostrafile.selecteditem = [];

    };


    $scope.gridmostrafileDeselect = function($event, $rowData) {

    };



    /*
        $scope.DeleteAllClick = function($event, $isolateScope) {


            if ($scope.Widgets.gridmostrafile.selectedItems.length > 0) {

                var filesDaCancellare = "";

                //carico l'array da inviare alla serviceVariable
                for (var i = 0; i < $scope.Widgets.gridmostrafile.selectedItems.length; i++) {

                    filesDaCancellare += $scope.Variables.CartellaPrefab.getItem(0).dataValue + "/" + $scope.Widgets.gridmostrafile.selectedItems[i].name + ",";
                }
                if ($scope.Widgets.gridmostrafile.selectedItems.length > 1) {
                    filesDaCancellare = filesDaCancellare.substring(0, filesDaCancellare.length - 1);
                } else {
                    filesDaCancellare = filesDaCancellare.substring(0, filesDaCancellare.length);
                }

                //alert(filesDaCancellare);

                $scope.Variables.DeleteSelectedFiles.setInput("files", filesDaCancellare);
                $scope.Variables.DeleteSelectedFiles.invoke();
            } else {

                $scope.Variables.nessunFileSelezionato.invoke();
                $scope.Variables.DeleteSelectedFiles.invoke();

            }


        };

    */


    $scope.DownloadAllClick = function($event, $isolateScope) {
        $event.preventDefault();
        if ($scope.Widgets.gridmostrafile.selectedItems.length > 0) {

            var filesDaScaricare = "";

            //carico l'array da inviare alla serviceVariable
            for (var i = 0; i < $scope.Widgets.gridmostrafile.selectedItems.length; i++) {

                filesDaScaricare += $scope.Variables.CartellaPrefab.getItem(0).dataValue + "/" + $scope.Widgets.gridmostrafile.selectedItems[i].name + ",";

            }
            //if ($scope.Variables.FilesDeletable.getCount() > 1) {
            filesDaScaricare = filesDaScaricare.substring(0, filesDaScaricare.length - 1);
            //   } else {
            //    filesDaScaricare = filesDaScaricare.substring(0, filesDaScaricare.length);
            // }

            $scope.Variables.DownloadSelectedFiles.setInput("files", filesDaScaricare);
            $scope.Variables.DownloadSelectedFiles.invoke();
        } else {
            $scope.Variables.nessunFileSelezionato.invoke();


        }
    };

    $scope.fileuploadwidgetSelect = function($event, $isolateScope) {
        $scope.Widgets.fileuploadwidget.maxfilesize = $scope.Variables.maxsize.dataSet.dataValue;
    };


    $scope.EliminaFilesonOk = function($event, $isolateScope) {
        if ($scope.Widgets.gridmostrafile.selectedItems.length > 0) {

            var filesDaCancellare = "";

            //carico l'array da inviare alla serviceVariable
            for (var i = 0; i < $scope.Widgets.gridmostrafile.selectedItems.length; i++) {

                filesDaCancellare += $scope.Variables.CartellaPrefab.getItem(0).dataValue + "/" + $scope.Widgets.gridmostrafile.selectedItems[i].name + ",";
            }
            if ($scope.Widgets.gridmostrafile.selectedItems.length > 1) {
                filesDaCancellare = filesDaCancellare.substring(0, filesDaCancellare.length - 1);
            } else {
                filesDaCancellare = filesDaCancellare.substring(0, filesDaCancellare.length);
            }

            //alert(filesDaCancellare);

            $scope.Variables.DeleteSelectedFiles.setInput("files", filesDaCancellare);
            $scope.Variables.DeleteSelectedFiles.invoke();
        } else {

            $scope.Variables.nessunFileSelezionato.invoke();
            $scope.Variables.DeleteSelectedFiles.invoke();

        }


    };


}]);

Application.$controller("gridmostrafileController", ["$scope",
    function($scope) {
        "use strict";

        $scope.assegnaImmagine = function(type) {
            var immagine = "";
            var bool = false;
            var defaultImg = "file.png";
            var projectPath = "app/prefabs/Attachment/resources/images/imagelists/";
            //var localTestPath = "./resources/images/imagelists/"; TEST USE ONLY
            for (var i = 0; i < $scope.Variables.mimetypes.getCount(); i++) {
                if (type == $scope.Variables.mimetypes.getValue("valore", i)) {
                    immagine = projectPath + $scope.Variables.mimetypes.getValue("immagine", i);
                    bool = true;
                }
            }
            if (bool)
                return immagine;
            else
                return projectPath + defaultImg;
        };

        $scope.approximateBytes = function(bytes) {
            var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
            if (bytes === 0) return "Informazione non disponibile";
            var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
            if (i === 0) return bytes + " " + sizes[i];
            return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i];
        };

        $scope.RichiediConferma = function($event, $rowdata) {
            $event.preventDefault();
            $scope.Variables.EliminaFile.invoke();
        };


    }
]);




Application.$controller("grid2Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);
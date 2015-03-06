(function () {
    'use strict';

    var notesModule = angular.module('notesModule', [
        // Angular modules 
        'ngAnimate',
        'ngResource',
        'ngCookies',

        // Custom modules 

        // 3rd Party Modules
        'ui.router',
        'ui.bootstrap'
    ]);

    notesModule.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider',
            function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

                // For any unmatched URL redirect to main URL
                $urlRouterProvider.otherwise("/notes");

                $stateProvider

                     .state('notes', {
                         url: "/notes",
                         views: {
                             'main': {
                                 templateUrl: "app/notes/notes.view.html",
                                 controller: "notesController as vm"
                             }
                         },
                     })
                ;
            }]);

})();
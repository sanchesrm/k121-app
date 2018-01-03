angular.module('angularApp')
    .config(['$locationProvider','$stateProvider', function($locationProvider,$stateProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('/', {
                url         : '/',
                templateUrl : 'public/templates/home.html',
                controller  : 'mainController'
            }) 
            .state('home', {
                url         : '/amigoSecreto',
                templateUrl : 'public/templates/home.html',
                controller  : 'mainController'
            })            
            .state('novoParticipante', {
                url         : '/novoParticipante',
                templateUrl : 'public/templates/novoParticipante.html',
                controller  : 'novoParticipanteController'
            })
            .state('editParticipante', {
                url         : '/novoParticipante/:participanteId',
                templateUrl : 'public/templates/novoParticipante.html',
                controller  : 'novoParticipanteController'
            })
    }]);
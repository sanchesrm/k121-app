angular.module('angularApp')
    .controller('novoParticipanteController', [ '$scope', '$window', '$stateParams', 'participantesFactory',  function ($scope, $window, $stateParams, participantesFactory) {
    	$scope.erroAdd = false;

       	$scope.addParticipante = () => {
       		if ($stateParams.participanteId) {
       			participantesFactory.editParticipante($scope.participante).then(
	       			res => $window.location.href = '/amigoSecreto'
	   			).catch(err => $scope.erroAdd = true)
	       	} else {
	       		let data = {
	       			nome: $scope.participante.nome,
	       			email: $scope.participante.email
	       		};

	       		participantesFactory.addParticipante(data).then(
	       			res => $window.location.href = '/amigoSecreto'
	   			).catch(err => $scope.erroAdd = true)
	       	}
       	}

		if ($stateParams.participanteId) {
			const participanteId = $stateParams.participanteId;
	    	participantesFactory.getParticipante(participanteId).then(resp => {
	    		$scope.participante = resp[0];
	    	});
       	}
    }]);
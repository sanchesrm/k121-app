angular.module('angularApp')
    .controller('mainController', [ '$scope', 'participantesFactory', 'sorteioFactory', 'enviarEmailFactory', function ($scope, participantesFactory, sorteioFactory, enviarEmailFactory) {
        
        $scope.sorteando = false;
    	$scope.loadingEmail = false;
		$scope.emailEnviado = false;
		$scope.emailFalhou = false;

		$scope.deleteParticipante = (id_participante) => {
			participantesFactory.deleteParticipante(id_participante).then(
				resp => loadAllParticipantes()
			);
		}

		$scope.sortear = () => {
			$scope.sorteando = true;
	    	$scope.loadingEmail = false;
			$scope.emailEnviado = false;
			$scope.emailFalhou = false;
			
			sorteioFactory.sortear().then(
	        	participantesList => {
	        		$scope.sorteando = false;
	        		$scope.loadingEmail = true;
	        		$scope.participantesList = participantesList

	        		enviarEmailFactory.enviarEmail().then(
	        			resp => {
	        				$scope.loadingEmail = false;
	        				$scope.emailEnviado = true;
	        			}
        			).catch(err => {
        				$scope.loadingEmail = false;
        				$scope.emailFalhou = true;
        			});
	        	}
			).catch(err => {
				$scope.sorteando = false;
				$scope.emailFalhou = true;
			});
		}

		$scope.getNomeAmigo = (id_amigo) => {
			if (id_amigo) {
				return $scope.participantesList[id_amigo].nome;
			} else {
				return '';
			}
		}

		$scope.checkIfSortear = () => {
			if ($scope.participantesList && Object.keys($scope.participantesList).length > 1) {
				return false;
			} else {
				return true;
			}
		}

		loadAllParticipantes = () => {
	        participantesFactory.getParticipantes().then(
	        	participantesList => $scope.participantesList = participantesList
			);
		}

    	loadAllParticipantes();
    }]);
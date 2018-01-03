angular.module('angularApp')
    .factory('participantesFactory', ['$http', 'rest_url', function ($http, rest_url) {
    	getParticipantes = () => {
			return $http.get(rest_url + '/participante')
				.then(res => res.data)
    	}

    	getParticipante = (participante_id) => {
			return $http.get(rest_url + '/participante/'+participante_id)
				.then(res => res.data)
    	}

    	editParticipante = (participante) => {
    		return $http.put(rest_url + '/participante/'+participante._id, participante)
				.then(res => res.data)	
    	}

    	deleteParticipante = (participante_id) => {
    		return $http.delete(rest_url + '/participante/'+participante_id)
    			.then(res => res.status)
    	}

    	addParticipante = (participante) => {
    		return $http.post(rest_url + '/participante/', participante)
    			.then(res => res)
    	}

        return {
            getParticipantes: getParticipantes,
            deleteParticipante: deleteParticipante,
            addParticipante: addParticipante,
			getParticipante: getParticipante,
			editParticipante: editParticipante
        };
    }]);
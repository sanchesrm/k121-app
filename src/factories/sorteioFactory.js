angular.module('angularApp')
    .factory('sorteioFactory', ['$http', '$q', 'rest_url', function ($http, $q, rest_url) {

    	sortear = () => {
            var defer = $q.defer();
			$http.get(rest_url + '/realizarSorteio')
				.then(res => defer.resolve(res.data))
				.catch(err => defer.reject(err));

            return defer.promise;
    	}

    	return {
    		sortear: sortear
    	}
    }]);
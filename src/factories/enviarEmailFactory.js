angular.module('angularApp')
    .factory('enviarEmailFactory', ['$http', '$q', 'rest_url', function ($http, $q, rest_url) {

    	enviarEmail = () => {
            var defer = $q.defer();
			$http.get(rest_url + '/enviarEmail')
				.then(res => {
                    defer.resolve(res.data);
                })
				.catch(err => {
                    defer.reject(err);
                });

            return defer.promise;
    	}

    	return {
    		enviarEmail: enviarEmail
    	}
    }]);
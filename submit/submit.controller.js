// Controller for newconf template
app.controller('submitController',function($scope, $rootScope, $http, $location){
	$scope.conf = {}
	$scope.conf.user = $rootScope.user.email
	$scope.conf.password = $rootScope.user.password
	$scope.conf.uploader = "sahcj.html"
	$scope.conf.type = "1"
	if (typeof($rootScope) == 'undefined' || $rootScope.user == undefined) $location.path("/login");
	
	// submit function, starts a new conference
	$scope.submit = function () {
		$http.post('submit.php', $scope.conf).then(res => {
			alertify.success($scope.conf.name + " added successfully!");
			$location.path('/')
		})
	}
	
	// Watch for changes caused by the iframe
	setInterval(function(){
		if ($scope.conf.titleid != document.getElementById('hb_titleid').value) $scope.conf.titleid = document.getElementById('hb_titleid').value
		if ($scope.conf.name != document.getElementById('hb_title').value) $scope.conf.name = document.getElementById('hb_title').value
		if ($scope.conf.icon != document.getElementById('url').value) $scope.conf.icon = document.getElementById('url').value
	}, 500)
	
})
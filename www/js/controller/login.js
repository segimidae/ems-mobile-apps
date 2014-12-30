var apps = angular.module('loginModule', []);
	
	apps.controller('Login', function($scope,$http, $ionicSideMenuDelegate, Settings, $state, init, Auth) {
  $ionicSideMenuDelegate.canDragContent(false);


    url = Settings.url;

    /** Using dummy data for development testing only */
    $scope.username = '';
    $scope.password = '';
    /* remove this in production environment */
   
  $scope.doLogin = function(){

      var user = {
        username : $scope.username,
        password : $scope.password
      } 

   
  $http.get(url, Auth.doAuth(user.username, user.password))
        .success(function(data) {
         
          $scope.success = "berjaya";
          init.username = user.username;
          init.password = user.password;
          $state.go('app.dashboard');
        })
        .error(function(data, status, headers, config){
          $scope.success = "xberjaya";
          //console.log(config);
        })             
  }
  
})
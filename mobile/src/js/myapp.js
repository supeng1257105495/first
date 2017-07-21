/**
 * Created by Administrator on 2017/5/22/022.
 */
var myapp = angular.module('myapp',['ui.router']);
myapp.run(['$http','$rootScope',function($http,$rootScope){
    $http.get('/api/users/session')
        .then(function(data){
        if(data.data.data){
            $rootScope.name = data.data.data.username;
        }

        })
}]);
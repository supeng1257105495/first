/**
 * Created by Administrator on 2017/5/24/024.
 */
myapp.controller('loginctr',['$scope','$http','$state','$rootScope',function($scope,$http,$state,$rootScope){

    $scope.logSubmit = function(){
        var login = {
            username:$scope.username
        };
        $http({
            url:'/api/users/login',
            method:'post',
            data:login
        }).then(function(data){
            if(data.data.data == 3 ){
                Materialize.toast('用户名不存在,请前往注册', 2000)
            }else{
                var u = data.data.data.username;
                var p = data.data.data.password;
                if(p!=$scope.password){
                    Materialize.toast('密码错误', 2000)
                }
                if(u == $scope.username && p == $scope.password ){
                    Materialize.toast('登录成功', 2000);
                    $rootScope.name = u;
                    $state.go('home')
                }
            }
        })
    }

}]);
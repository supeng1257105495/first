/**
 * Created by Administrator on 2017/5/24/024.
 */

myapp.controller('registerctr',['$scope','$http','$state',function($scope,$http,$state){

    //注册
    $scope.resSubmit = function(){
        var user = {
            username:$scope.username,
            password:$scope.password,
            email:$scope.email
        };
        $http({
            url:'/api/users/register',
            method:'post',
            data:user
        }).then(function(data){
            if(data.data.msg == '注册成功'){
                Materialize.toast('注册成功', 2000)
                $state.go('login')
            }
        })
    };

    //验证用户名������֤
    $scope.resUsername = function(){
        var username = {
            username:$scope.username
        };
        if(username.username == undefined){
            return false
        }else{
            console.log(username);
            $http({
                url:'/api/users/username',
                method:'post',
                data:username
            }).then(function(data){
                console.log(data)
                if(data.data.data == 1){
                    $scope.check = true;
                }else{
                    Materialize.toast('用户名存在', 2000)
                }
            })
        }

    };

    //验证邮箱���֤
    $scope.resEmail = function(){
        var email = {
            email:$scope.email
        };
        //�ж�
        if(email.email == undefined){
            return false
        }else{
            $http({
                url:'/api/users/email',
                method:'post',
                data:email
            }).then(function(data){
                if(data.data.data ==2 ){
                    $scope.check1 = true;
                }else{
                    Materialize.toast('邮箱存在', 4000)
                }
            })
        }

    }
}]);
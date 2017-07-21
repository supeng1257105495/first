/**
 * Created by Administrator on 2017/5/24/024.
 */
myapp.controller('homectr',['$scope','$rootScope',function($scope,$rootScope){
    if($rootScope.name!='sp1111'&&$rootScope.name!='sp2222'&&$rootScope.name!='sp3333'&&$rootScope.name!='sp4444'&&$rootScope.name!='sp5555'&&$rootScope.name!='sp6666'){
                       $scope.img = "sp1111";
                    }

                $scope.do = function(){
                    $rootScope.name=null;
                };

                if($rootScope.name){

                }else{
                    $rootScope.name = "请登录";
                    $scope.img="请登录";
                    $("#go").html('登录');
                }



}]);
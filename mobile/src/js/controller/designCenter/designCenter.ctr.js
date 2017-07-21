/**
 * Created by Administrator on 2017/5/25/025.
 */
var app = angular.module("myapp");
app.controller('designCenterctr',['$scope','$http','$rootScope',function ($scope,$http,$rootScope) {

    //$scope.slideList = [
    //    {type:'der',src:"li_0.png"}
    //];

    //$scope.sectionList = [
    //    {type:'section',src:"li_1.jpg",title:"花伴视觉",content:"花伴为您提...",price:25400,count:44},
    //    {type:'section',src:"li_2.png",title:"一心视觉",content:"一心是学习、工作、创业的根本道理方法，一...",price:22500,count:34},
    //    {type:'section',src:"li_3.png",title:"蜂鸟智创",content:"专业的团队，中国线上策划设计领航者，专业...",price:20400,count:31},
    //    {type:'section',src:"li_4.jpg",title:"联邦设计",content:"设计来源于生活，生活中的点点滴滴都会成为...",price:17579,count:38},
    //    {type:'section',src:"li_5.jpg",title:"深圳谷雨",content:"谷雨致力于各类产品设计与研究。我们...",price:0,count:0},
    //    {type:'section',src:"li_6.png",title:"色界视觉",content:"视觉改变世界，成功设计创造，我们秉承让客...",price:28100,count:37},
    //    {type:'section',src:"li_7.png",title:"海浪文化",content:"我们是一群对设计狂热的人诚信 / 专...",price:27560,count:22},
    //    {type:'section',src:"li_8.png",title:"方圈文化",content:"世界本无极，一切皆方圆，我们最明白创意设...",price:19600,count:46},
    //    {type:'section',src:"li_9.png",title:"星光文化",content:"用时光雕刻品牌，用专业专注点亮视觉创意，...",price:19300,count:27},
    //    {type:'section',src:"li_10.png",title:"超凡视觉",content:"超凡的设计，创意设计不复制，独一无二品质...",price:17680,count:43},
    //    {type:'section',src:"li_11.jpg",title:"左道品牌策划",content:"金牌设计师坐镇，为您的设计保驾护航，专业...",price:17610,count:24}
    //];
    $http({
        url:'api/design/des',
        method:'post',
        data: {type:'section'}
        //data: $scope.sectionList
    }).then(function(data){
        $scope.sectionList = data.data.data;
    });

    if($rootScope.slideList== undefined){
        $http({
            url:'api/design/der',
            method:'post',
            data: {type:'der'}
            //data: $scope.slideList
        }).then(function(data){
            $rootScope.slideList = data.data.data;
            //console.log(data)
        });
    }


    $scope.options = {
        slideList:$scope.slideList,
        fullWidth:false,
        height:"418px",
        autoStart:false
    };
    $('.h-selectli span').click(function () {
        var $index = $(this).index();
        $('.h-detail').children().hide();
        $('.h-detail').children().eq($index).show();
        $('.h-selectli').find('span').css({"borderBottom":"none","color":"#282828"});
        $('.h-selectli').find('span').eq($index).css({"borderBottom":"2px solid #ef3442","color":"#ef3442"});
    });
    $('.h-shop').click(function () {
        $('.h-downli').show();
        $('.h-op').css("opacity","0.6");
    });
}]);
app.directive("slider",function ($rootScope) {
    return {
        restrict:'ECMA',
        templateUrl:'../../../tpl/design.tpl.html',
        scope: {
            slideList:'=option',
            fullWidth:'='
        },
        compile:function(){
            return {
                pre: function(scope,elements,attribute){
                    $(function(){
                        //if($rootScope.flag==undefined){
                           // $rootScope.flag =1 ;
                         ///   console.log($rootScope)
                            var fullWidth = scope.fullWidth;
                            $('.carousel.carousel-slider').carousel({fullWidth:fullWidth});
                       // }
                    })
                },
                post:function (scope,elements,attributes) {
                    var fullWidth = scope.fullWidth;
                    $(function () {
                        //$('.carousel.carousel-slider').carousel({fullWidth:fullWidth});
                        //$(".carousel").css("height", $(".carousel a img").eq(0).height());
//                    console.log($(".carousel a img").eq(0).height())
                    })
                }
            }
        }
    }
});
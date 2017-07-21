/**
 * Created by Administrator on 2017/5/25/025.
 */
var myapp = angular.module('myapp');
myapp.controller('indexctr',['$scope','$http',function($scope,$http){
    //$scope.sliderList=[
    //    {type:'slider',slidersrc:'o_1b3otn5bv9cg141f7nksnhkgi7.jpg',title:'赛事一'},
    //    {type:'slider',slidersrc:'o_1ap70hrk0tlc9e717vf1s0ocpt7.jpg',title:'赛事二'}
    //];

    //$scope.perfectList=[
    //    {type:'prefect',perfectsrc:'index1.jpg',classify:'卡片设计',hot:1001,heart:0,zan:0,mess:0,designerSrc:'40_small.jpg',designer:'凇源'},
    //    {type:'prefect',perfectsrc:'index2.jpg',classify:'怪兽',hot:805,heart:0,zan:0,mess:0,designerSrc:'39_avatar_small.jpg',designer:'我系小太阳'},
    //    {type:'prefect',perfectsrc:'index3.jpg',classify:'家具空间设计',hot:1001,heart:0,zan:1,mess:0,designerSrc:'03_avatar_small.jpg',designer:'设计小生'},
    //    {type:'prefect',perfectsrc:'index4.jpg',classify:'花千代烤鱼店标志设计',hot:870,heart:1,zan:0,mess:0,designerSrc:'87_avatar_small.jpg',designer:'张品牌设计创意机构'}
    //];


    //$scope.serviceList=[
    //    {type:'service',servicesrc:'o_1alualorvqmipud2v7ouh38k7.jpg',serviceClassify:'logo设计',prive:'499.00',p1:23,intro:'专业logo设计，标志设计,满意为止，价...',servicedisigner:'酷品设计'},
    //    {type:'service',servicesrc:'o_1alm7npcah2qfetn1imk1gmb7.jpg',serviceClassify:'名片设计',prive:'100.00',p1:17,intro:'名片设计与印刷流水服务，包邮，包满意，下...',servicedisigner:'方圈文化'},
    //    {type:'service',servicesrc:'o_1alub40uu1plfkcg1aqmvuh11qu7.jpg',serviceClassify:'名片设计',prive:'200.00',p1:16,intro:'名片设计与印刷流水服务，包邮，包满意，下...',servicedisigner:'花伴视觉'},
    //    {type:'service',servicesrc:'o_1ak946cob19n0jrc1ligkl7q5o7.png',serviceClassify:'画册设计',prive:'50.00',p1:10,intro:'画册价格为每p的价格，10p以内请更具p...',servicedisigner:'上上品牌'},
    //    {type:'service',servicesrc:'o_1alc56g7h57g1etc1u0nnfg11ue7.jpg',serviceClassify:'海报设计',prive:'500.00',p1:9,intro:'专业设计师为您量身设计，可修改。',servicedisigner:'福瑞设计'},
    //    {type:'service',servicesrc:'o_1alm9brik6ft13lk1lnb25as1d7.jpg',serviceClassify:'画册设计',prive:'150.00',p1:6,intro:'画册价格为每p的价格，10p以内请更具p...',servicedisigner:'方圈文化'},
    //    {type:'service',servicesrc:'o_1alu8ff5s1kb6hb7v2cgu01flh7.jpg',serviceClassify:'画册设计',prive:'100.00',p1:6,intro:'平面画册设计，提供最优方案，可修改，满意...',servicedisigner:'新世纪创意'},
    //    {type:'service',servicesrc:'o_1ak94amai1gal1gav133fbaikic7.png',serviceClassify:'包装设计',prive:'418.00',p1:4,intro:'本店包装设计仅支持纸质包装设计，不包括瓶...',servicedisigner:'上上品牌'}
    //];



    $http({
        url:'/api/index/indexser',
        method:'post',
        data:{type:'service'}
    }).then(function (data) {
        $scope.serviceList = data.data.data;
    });

    $http({
        url:'/api/index/indexper',
        method:'post',
        data: {type:'prefect'}
        //data:$scope.perfectList
    }).then(function (data) {
        $scope.perfectList = data.data.data
    });

    $http({
        url:'/api/index/indexder',
        method:'post',
        data: {type:'slider'}
    }).then(function (data) {
        $scope.sliderList = data.data.data
    });



    $scope.swiper = new Swiper('.swiper-container',{
        /*pagination:'.swiper-pagination',
         paginationClickable:true*/
        pagination : '.swiper-pagination',
        paginationClickable: true,
        longSwipesRatio: 0.3,
        touchRatio:1,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true//修改swiper的父元素时，自动初始化swiper
    });
}]);
/**
 * Created by Administrator on 2017/5/26/026.
 */
var app = angular.module("myapp");
app.controller('servicectr',['$scope',function ($scope) {
    $scope.recomList = [
        {_id:1,src:"rec_1.jpg",title:"logo设计",content:"专业logo设计，标志设计，满意为止，价...",price:200.00,count:16},
        {_id:2,src:"rec_2.jpg",title:"标志设计",content:"想你所想 做你所要",price:1600.00,count:3},
        {_id:3,src:"rec_3.png",title:"标志设计",content:"标志设计制作一条龙服务，价格优惠，总监操...",price:600.00,count:9},
        {_id:4,src:"rec_4.jpg",title:"LOGO设计",content:"",price:750.00,count:16}
    ];
    $('.l-server span').click(function(){
        var $index = $(this).index();
        $('.l-server-li').children().hide();
        $('.l-server-li').children().eq($index).show();
    })

}]);
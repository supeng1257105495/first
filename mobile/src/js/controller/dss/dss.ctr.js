/**
 * Created by Administrator on 2017/5/26/026.
 */
var app = angular.module("myapp");
app.controller('dssctr',['$scope',function ($scope) {
    $scope.shopList = [
        {_id:1,src:"de_1.jpg",title:"名片设计",content:"名片设计与印刷流水服务，包邮，包满意，下...",price:200.00,count:16},
        {_id:2,src:"de_2.jpg",title:"画册设计",content:"整套画册设计与制作，专业资深设计师，让您...",price:1600.00,count:3},
        {_id:3,src:"de_3.jpg",title:"包装设计",content:"定做各种包装设计，价格QQ询问，专业设计...",price:600.00,count:9},
        {_id:4,src:"de_4.jpg",title:"标志设计",content:"专业标志设计，让您企业财源滚滚，高端、大...",price:750.00,count:16}
    ];

    $('.dss-selectli span').click(function () {
        var $index = $(this).index();
        $('.dss-detail').children().hide();
        $('.dss-detail').children().eq($index).show();
        $('.dss-selectli').find('span').css({"borderBottom":"none","color":"#282828"});
        $('.dss-selectli').find('span').eq($index).css({"borderBottom":"2px solid #ef3442","color":"#ef3442"});
    })
}]);
/**
 * Created by Administrator on 2017/5/25/025.
 */
var myapp = angular.module('myapp');
myapp.controller('zixunonectr',['$scope',function($scope){
    //置顶按钮显示/隐藏实现
    $("#zi-top").hide();
    $(window).scroll(function(){
        var w_height = $(window).height();//浏览器高度
        // console.log(w_height);
        var scroll_top =$(document).scrollTop();//滚动条到顶部的垂直高度
        // console.log(scroll_top);

        if(scroll_top > 0){
            $("#zi-top").show();
        }else{
            $("#zi-top").hide();
        }
    });
    //置顶
    $("#zi-top").click(function(e){
        e.preventDefault();
        $(document.documentElement).animate({
            scrollTop: 0
        },200);
        //支持chrome
        $(document.body).animate({
            scrollTop: 0
        },200);
    });
}]);
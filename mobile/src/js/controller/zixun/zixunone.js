/**
 * Created by Administrator on 2017/5/25/025.
 */
var myapp = angular.module('myapp');
myapp.controller('zixunonectr',['$scope',function($scope){
    //�ö���ť��ʾ/����ʵ��
    $("#zi-top").hide();
    $(window).scroll(function(){
        var w_height = $(window).height();//������߶�
        // console.log(w_height);
        var scroll_top =$(document).scrollTop();//�������������Ĵ�ֱ�߶�
        // console.log(scroll_top);

        if(scroll_top > 0){
            $("#zi-top").show();
        }else{
            $("#zi-top").hide();
        }
    });
    //�ö�
    $("#zi-top").click(function(e){
        e.preventDefault();
        $(document.documentElement).animate({
            scrollTop: 0
        },200);
        //֧��chrome
        $(document.body).animate({
            scrollTop: 0
        },200);
    });
}]);
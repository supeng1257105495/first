/**
 * Created by Administrator on 2017/5/25/025.
 */
var myapp = angular.module('myapp');
myapp.controller('detailsctr',['$scope',function($scope){
    //�ö���ť��ʾ/����ʵ��
    $(window).scroll(function(){
        var w_height = $(window).height();//������߶�
        var scroll_top =$(document).scrollTop();//�������������Ĵ�ֱ�߶�
        if(scroll_top > w_height){
            $("#goto-top").fadeIn(500);
        }else{
            $("#goto-top").fadeOut(500);
        }
    });
    //�ö�
    $("#goto-top").click(function(e){
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
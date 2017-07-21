/**
 * Created by Administrator on 2017/5/25/025.
 */
var myapp = angular.module('myapp');
myapp.controller('projectctr',['$scope','$http',function($scope,$http){
    $scope.projectList=[
        {type:'pro',proTittle:'做两个LOGO',proPrie:1000.00,proHot:'241万',zhangshu:'0',jiezhidata:'剩两个月'},
        {type:'pro',proTittle:'数码产品拍摄及宣传详情海报设计',proPrie:0.00,proHot:'1217万',zhangshu:'0',jiezhidata:'已截稿'},
        {type:'pro',proTittle:'车贴设计',proPrie:100.00,proHot:'431万',zhangshu:'14',jiezhidata:'剩2小时'},
        {type:'pro',proTittle:'设计LOGO',proPrie:88.00,proHot:'683万',zhangshu:'15',jiezhidata:'已截稿'},
        {type:'pro',proTittle:'设计一个LOGO',proPrie:200.00,proHot:'757万',zhangshu:'19',jiezhidata:'已截稿'},
        {type:'pro',proTittle:'餐饮公司 公司LOGO设计',proPrie:200.00,proHot:'941万',zhangshu:'8',jiezhidata:'已截稿'},
        {type:'pro',proTittle:'网咖logo',proPrie:200.00,proHot:'913万',zhangshu:'9',jiezhidata:'已截稿'},
        {type:'pro',proTittle:'生态文化',proPrie:1000.00,proHot:'1022万',zhangshu:'13',jiezhidata:'已截稿'},
        {type:'pro',proTittle:'婚庆请柬设计',proPrie:388.00,proHot:'3790万',zhangshu:'38',jiezhidata:'已截稿'},
        {type:'pro',proTittle:'红茶设计包装',proPrie:1500.00,proHot:'1375万',zhangshu:'5',jiezhidata:'已截稿'},
        {type:'pro',proTittle:'职工休养院标志设计',proPrie:1000.00,proHot:'2597万',zhangshu:'27',jiezhidata:'已截稿'},
        {type:'pro',proTittle:'设计一个公司标志：鹰媒',proPrie:500.00,proHot:'2515万',zhangshu:'26',jiezhidata:'已截稿'},
        {type:'pro',proTittle:'CDR画一个人 有参考图，有步骤，有部分...',proPrie:50.00,proHot:'45万',zhangshu:'0',jiezhidata:'已截稿'},
        {type:'pro',proTittle:'儿童用品品牌设计',proPrie:100.00,proHot:'226万',zhangshu:'7',jiezhidata:'已截稿'},
        {type:'pro',proTittle:'基金管理公司logo设计',proPrie:500.00,proHot:'1339万',zhangshu:'35',jiezhidata:'已截稿'},
        {type:'pro',proTittle:'“泓锐”商标设计Logo',proPrie:1000.00,proHot:'1076万',zhangshu:'30',jiezhidata:'已截稿'},
        {type:'pro',proTittle:'设计名片',proPrie:50.00,proHot:'271万',zhangshu:'3',jiezhidata:'已截稿'},
        {type:'pro',proTittle:'短袖T恤印花设计',proPrie:50.00,proHot:'619万',zhangshu:'9',jiezhidata:'已截稿'}
    ]

    $http({
        url:'/api/project/pro',
        method:'post',
        //data:$scope.projectList
        data:{type:'pro'}
    }).then(function(data){
        $scope.projectList = data.data.data;
    })
}]);
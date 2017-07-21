/**
 * Created by Administrator on 2017/5/24.
 */
var myapp = angular.module('myapp');
myapp.controller('saichengctr', ['$scope','$http','$state', function ($scope,$http,$state) {
    $scope.activeIndex=0;
    $scope.changeIndex=function(index){
        $scope.activeIndex=index;
    };


    //$scope.saicheng=[
    //    {'type':'sai','src':'1.jpg','title':'坪山新区“智慧坪山”标志设计大赛','num':'50.8万','num2':'1004张'},
    //    {'type':'sai','src':'2.jpg','title':'2016“多彩贵州•寻美黔西南” 旅游文创产品设计大赛','num':'21.3万','num2':'231张'},
    //    {'type':'sai','src':'3.jpg','title':'我的设计会成为数字音乐专辑封面','num':'10.8万','num2':'133张'},
    //    {'type':'sai','src':'4.jpg','title':'2016年绿城大学生创意设计大赛','num':'10.1万','num2':'471张'},
    //    {'type':'sai','src':'5.jpg','title':'全国大学生设计Design DOT创意创业大赛','num':'16.8万','num2':'560张'},
    //    {'type':'sai','src':'6.png','title':'第二届数字设计创业大赛 工业设计中国智造','num':'11.9万','num2':'539张'},
    //    {'type':'sai','src':'7.png','title':'新动感·蜕变”动态图形创意设计大赛','num':'15万','num2':'169张'},
    //    {'type':'sai','src':'8.png','title':'让创意兑现 2016原创作品商业化版权出让作品集大赛','num':'2.6万','num2':'175张'},
    //    {'type':'sai','src':'9.1.png','title':'中国梦·创客梦“2016中国大学生毕业设计作品展','num':'15.6万','num2':'337张'},
    //    {'type':'sai','src':'9.png','title':'深圳华强北  世界新符号','num':'36.8万','num2':'1631张'},
    //    {'type':'sai','src':'10.png','title':'深圳35周年·创意海报设计大赛','num':'26万','num2':'612张'},
    //    {'type':'sai','src':'11.gif','title':'2015“柔”国际扩张品牌设计大赛','num':'30.2万','num2':'1336张'},
    //    {'type':'sai','src':'12.png','title':'新概念印艺创作设计大赛——2016利是封（红包）创意设计','num':'12.6万','num2':'256张'},
    //    {'type':'sai','src':'13.png','title':'新概念印艺创作设计大赛——2016利是封（红包）创意设计','num':'3.5万','num2':'69张'},
    //    {'type':'sai','src':'14.png','title':'正本清源，原生瑰宝” 御上制品牌形象系列海报创意设计大赛','num':'9.8万','num2':'109张'},
    //    {'type':'sai','src':'15.jpg','title':'【有调Studio】手机保护壳原创图案设计大赛','num':'6.8万','num2':'316张'},
    //    {'type':'sai','src':'16.png','title':'NUMANTOLO原创品牌淘宝旗舰店品牌图案设计大赛','num':'6.4万','num2':'139张'},
    //    {'type':'sai','src':'17.png','title':'用印刷记录美好” 笔记本封面图案创意设计大赛','num':'12.7万','num2':'555张'},
    //    {'type':'sai','src':'18.png','title':'放飞白鸽 呼唤和平” 反对恐怖主义，维护世界和平公益海报设...','num':'17万','num2':'989张'},
    //    {'type':'sai','src':'19.png','title':'2016年“灵猴献瑞”邮票设计','num':'14.8万','num2':'307张'},
    //    {'type':'sai','src':'20.png','title':'2016年“灵猴献瑞”邮票设计','num':'7.7万','num2':'124张'},
    //    {'type':'sai','src':'21.png','title':'节日的味道—2015年度摄影大赛','num':'6.8万','num2':'329张'},
    //    {'type':'sai','src':'22.png','title':'第一季“壁纸无限”手机壁纸创意征集大赛','num':'14.9万','num2':'671张'},
    //    {'type':'sai','src':'23.png','title':'Trouble Maker麻烦专家淘宝旗舰店 中国元素原创趣...','num':'4.3万','num2':'176张'},
    //    {'type':'sai','src':'24.jpg','title':'我的杯子我做主','num':'15.4万','num2':'356张'},
    //    {'type':'sai','src':'25.png','title':'《一起潮TEE，一起趴TEE》创意T恤印花设计大赛','num':'23.1万','num2':'416张'},
    //    {'type':'sai','src':'26.jpg','title':'“要拥抱，反家暴”——深圳市福田区妇女联合会公益海报设计大赛','num':'22.6万','num2':'360张'},
    //    {'type':'sai','src':'27.png','title':'融-2015国际字体创意设计大赛','num':'78万','num2':'2085张'},
    //    {'type':'sai','src':'28.png','title':'10万元全球征集大朗环球贸易广场吉祥物','num':'24.6万','num2':'422张'},
    //    {'type':'sai','src':'29.png','title':'药系千万家-2015第一届合理用药科普知识公益海报设计大赛','num':'66.9万','num2':'426张'},
    //    {'type':'sai','src':'30.png','title':'中国新生代包装创意设计大赛','num':'13.7万','num2':'191张'},
    //    {'type':'sai','src':'31.png','title':'2015全国高校毕业设计作品展','num':'13.8万','num2':'288张'},
    //    {'type':'sai','src':'32.jpg','title':'再&生 中国传统元素国际设计大赛获奖作品公布','num':'32.5万','num2':'1888张'},
    //    {'type':'sai','src':'33.png','title':'第一设计网1周岁生日首页Banner条画面形象征集','num':'4.3万','num2':'78张'},
    //    {'type':'sai','src':'34.jpg','title':'第一季“掌镜生活”中意韩国际手机摄影大赛','num':'105.1万','num2':'1972张'},
    //    {'type':'sai','src':'35.png','title':'华丰 · 前海湾全球标志大征集','num':'109.9万','num2':'841张'},
    //    {'type':'sai','src':'36.png','title':'创图征集令（第一季）','num':'39.3万','num2':'781张'},
    //    {'type':'sai','src':'37.png','title':'第一设计网表情图标设计征集大赛','num':'14.2万','num2':'182张'},
    //    {'type':'sai','src':'38.png','title':'“隐客”酒包装盒及瓶贴设计5000元征集','num':'1.6万','num2':'10张'},
    //    {'type':'sai','src':'39.png','title':'“隐客”酒包装盒及瓶贴设计5000元征集','num':'48.4万','num2':'256张'},
    //    {'type':'sai','src':'40.png','title':'10万火集 数字设计 创业大赛','num':'4万','num2':'38张'},
    //    {'type':'sai','src':'41.png','title':'“万科杯”2015年安徽省暨合肥市“新年健身走”第55届元旦...','num':'1.9万','num2':'17张'},
    //    {'type':'sai','src':'42.png','title':'7万元全国征集深圳光明凤凰城标志','num':'7.1万','num2':'32张'}
    //]


    //$scope.zixun=[
    //    {'type':'zixun','src':'11.jpg','title':'2017设计＋全国青年设计师创新创客大赛','p':'学院奖简...'},
    //    {'type':'zixun','src':'2.jpg','title':'2016中波视觉设计展”在桂林花桥美术...','p':'由知名策展人塞巴斯蒂安斯密特波兰、...'},
    //    {'type':'zixun','src':'3.jpg','title':'第十四届中国大学生广告艺术节学院奖秋季赛','p':'学院奖简...'},
    //    {'type':'zixun','src':'4.png','title':'北京国际设计周《2016当代国际水墨设计...','p':'学院奖简...'},
    //    {'type':'zixun','src':'15.jpg','title':'2016年深圳技能大赛——VI(视觉识别...','p':'一、竞赛宗旨...'},
    //    {'type':'zixun','src':'6.jpg','title':'触——香港国际海报三年展2017','p':'康乐及文化事务署与香港设计师协会合办...'},
    //    {'type':'zixun','src':'7.jpg','title':'“绿——国际环保招贴”作品征集','p':'大赛主题...'},
    //    {'type':'zixun','src':'8.jpg','title':'2016中关村国际创意节 科睿（Crea...','p':'一、竞赛宗旨...'},
    //    {'type':'zixun','src':'9.jpg','title':'2016“智创淮安”文化创意设计大赛 文...','p':'一、大赛名称...'},
    //    {'type':'zixun','src':'10.jpg','title':'“Shelter”国际学生建筑设计竞赛','p':'一、大赛简介...'}
    //
    //];

    $http({
        url:'/api/sai/saicheng',
        method:'post',
        data:{type:'sai'}
    }).then(function (data) {
        $scope.saicheng = data.data.data;

    });
    $http({
        url:'/api/zixun/list',
        method:'post',
        data:{type:'zixun'}
    }).then(function (data) {
        $scope.zixun = data.data.data;
    })



    $(".sai-btn").click(function (){
        $(".sai-btn").css({"background":"#ef3442","color":"#fff"});
        $(this).css({"background":"#fff","color":"#ef3442"});

    });


}]);


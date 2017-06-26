/**
 * Created by Administrator on 2017/6/14/014.
 */
(function(){
    //顶部按钮
    var aTopTabBtn = $('.index-tab-btngroup .btn'),
        aTopTabItem = $('.index-tab-item');

    aTopTabBtn.on('click',function(){
        var _iNow = $(this).index();

        aTopTabBtn.removeClass('active');
        $(this).addClass('active');
        aTopTabItem.removeClass('show');
        aTopTabItem.eq(_iNow).addClass('show');
    });

    var aSwitchBtn = $('#cm-assessment .title'),
        aSwitchBox = $('#cm-assessment .cm-Popular-assessment');

    aSwitchBtn.on('click',function(){
        var _iNow = $(this).index();

        aSwitchBtn.removeClass('title-active');
        $(this).addClass('title-active');

        aSwitchBox.removeClass('switch-show');
        aSwitchBox.eq(_iNow).addClass('switch-show');
    });



    //轮播图
    var aFocusBtn = $('.index-focus-box .btn-group'),
        aFocusBanner = $('.index-focus-list li');

    aFocusBtn.on('click','li',function(){

        aFocusBtn.find('li').removeClass('active');
        $(this).addClass('active');
        aFocusBanner.hide();
        aFocusBanner.eq($(this).index()).fadeIn();
    })

})();
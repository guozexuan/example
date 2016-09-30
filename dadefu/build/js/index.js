var index = (function(){

    var O = function(){},
        fn = O.prototype;

    var tool = (function() {
        var ua = navigator.userAgent.toLowerCase(),
            isAndroid = /android/.test(ua),
            isIOS = /iphone|ipad|ipod|itouch/.test(ua),
            getDataAttribute = function( $dom, type ) {
                return $dom.attr(type);
            },
            open = function( url, cb ) {
                var last = Date.now();
                ifr = document.createElement('IFRAME');
                ifr.src = url;
                ifr.style.position = 'absolute';
                ifr.style.left = '-1000px';
                ifr.style.top = '-1000px';
                ifr.style.width = '1px';
                ifr.style.height = '1px';

                //设置一个10秒的动画，用于检查客户端是否被调起。
                ifr.style.webkitTransition = 'all 1s';
                document.body.appendChild(ifr);

                setTimeout(function() {
                    ifr.addEventListener('webkitTransitionEnd', function() {
                        document.body.removeChild(ifr);
                        if( Date.now() - last < 6000 ) {
                            'function' === typeof cb && cb();
                        }
                    }, false);
                    ifr.style.left = '-10px';    //动画使用
                }, 0);

            };

        return {
            isAndroid: isAndroid,
            isIOS: isIOS,
            getDataAttribute: getDataAttribute,
            open: open
        };
    })();

    fn.data = {
        userId:''
    };

    fn.choice = function() {
        var _this = this;

        $('.select li').on('click',function() {
            $(this).addClass('current').siblings().removeClass('current');

            if( $('.choice01').hasClass('current') ){
                $('.intro').text('【五路運財符】請符、開光、加持');
            }
            else if( $('.choice02').hasClass('current') ){
                $('.intro').text('五路招財套餐包含【五路運財符+五路財神招財項鏈】');
            }
        });

        $('.btn-buy').on('click',function(){
            if( $('.choice01').hasClass('current') ){//跳转大德符咒
                _this.communicateWithClient()
            }
            else if( $('.choice02').hasClass('current') ){//判断登录下单
                _this.loginAndGoToShop();
            }

        })
    };

    fn.communicateWithClient = function() {//大德
        if( mmc.client.is('linghit ljms') ){
            VA.show('系统确认中...');
            event.stopPropagation();

            if( tool.isAndroid ) {
                var obj = {
                    "controller":"oms.mmc.fu.HomeActivity",
                    "gotoParams":{"title":"","url":""},
                    "gotoType":0
                };
                lingjiWebApp.MMCGoto( JSON.stringify(obj),"" );
            }
            else if( tool.isIOS ) {
                var obj2 = {controller:"comlyldadefuzhou",gotoType:0};
                MMCGoto( obj2 );
            }
        }
    };

    fn.loginAndGoToShop = function() {//登录 - 下单
        var _this = this;

        if( mmc.client.is('linghit ljms') ) {

            if ( tool.isAndroid ) {
                if ( (mmc.user.info.userid) ) {
                    $('.popup').show();
                    _this.data.userId = mmc.user.info.userid;
                    //_this.submit();
                }
                else {
                    $('.login-popup').show();
                    $('#j-prayer-login').on('click',function(){
                        $('.login-popup').hide();
                        lingjiWebApp.MMCLogin(null);
                    });
                }
            }

            else if (tool.isIOS) {
                mmc.user.info = getUserInfo();

                if ((mmc.user.info.userid)) {
                    $('.popup').show();
                    _this.data.userId = mmc.user.info.userid;
                    //_this.submit();
                }
                else {
                    $('.login-popup').show();
                    $('#j-prayer-login').on('click',function(){
                        $('.login-popup').hide();
                        MMCLogin(null);
                    });
                }
            }
        }
    };

    fn.clickHandleEvent = function() {

        $('.area').selectAlert({
            elWrap:$('#wrapper'),
            defautlArea:{
                curId:1,
                curText:"中国大陆"
            },
            data:[
                {id:1,text:"中国大陆"},
                {id:2,text:"中国香港"},
                {id:3,text:"台湾"},
                {id:4,text:"中国澳门"},
                {id:5,text:"西马来西亚"},
                {id:6,text:"东马来西亚"},
                {id:7,text:"澳大利亚"},
                {id:8,text:"新加坡"},
                {id:9,text:"泰国"},
                {id:10,text:"印尼"},
                {id:11,text:"韩国"},
                {id:12,text:"美国"},
                {id:13,text:"加拿大"},
                {id:14,text:"墨西哥"},
                {id:15,text:"欧洲"},
                {id:16,text:"孟加拉"},
                {id:17,text:"印度"},
                {id:18,text:"其他国家"}
            ]
        });

        $('.cancel a').on('click',function(){
            $('.popup').hide();
        });
    };

    fn.submit = function() {
        var _this = this;

        $('.go a').on('click',function() {
            var username = $('#username').val(),
                phone = $('#phone').val(),
                address = $('#address').val(),
                area = $('#area').val(),
                daDeUserId = _this.data.userId;

            if ( $.trim(username) == '' || username == undefined ){
                VA.show('姓名不能为空！');
                return false;
            }
            if ($.trim(phone) == '' || phone == undefined ){
                VA.show('电话号码不能为空！');
                return false;
            } else if( !isMobile(phone) ){
                VA.show('电话号码格式不正确！');
                return false;
            }
            if ($.trim(address) == '' || address == undefined ){
                VA.show('地址不能为空！');
                return false;
            }

            $.ajax({
                url:"/index.php?s=shop&c=cart&a=paynow",
                type:"POST",
                dataType:"json",
                data:{
                    id: '1989',
                    name: username,
                    phone: phone,
                    address: address,
                    area: area,
                    num: '1',
                    daDeUserId: daDeUserId,
                    channel_mark: 'lingjimiaosuan_dadeAction'
                },
                success: function(data){
                    if(data.status == 1) {
                        window.location = data.url;
                    } else {
                        VA.show(data.msg);
                    }
                },
                error: function(data){
                    VA.show('ajax error!');
                }
            })
        });
    };

    /**
     *判断电话格式
     */
    function isMobile(str) {
        var pattern = /(13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7}/;
        return pattern.test(str);
    }

    fn.onLoad = function() {
        this.choice();
        this.clickHandleEvent();
        this.submit();
    };

    return new O;

})();

$(function(){
    index.onLoad();
});
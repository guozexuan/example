;(function($){
    /*
     *	n.see
     *	2015.7.29
     *  用法：$('.area').selectAlert({
     *			elWrap:$('#activity-wrapper'), //
     *			defautlArea:{curId:2,curText:"台湾"},
     *			data:[{id:1,text:"中国大陆"},{id:1,text:"中国大陆"}]
     *		});
     *  html:<div class="auto area">
     *			<span class="right icon-go"></span><span class="auto text"></span>
     *			<input type="hidden" name="area" />
     *		</div>
     *
     *	    elWrap:$('#wrapper'),储存容器
     *
     * 必须: .area | .text | input  | #wrapper
     */

    var selectAlert = function(opt){
        this.appWrap = $('body');
        var defautl = {
            elWrap : this.appWrap
        };
        this.opt = $.extend(defautl, opt || {});
        this.$body = $('body');
        this.appWrap = this.opt.elWrap;
        this.init();
    };
    selectAlert.prototype ={
        init:function(){
            this.$selectWrap = $('<div />',{class:"select-wrap"});
            this.$selectAlert = $('<div />',{class:"select-alert"});
            this.$style = $('<style />',{type:"text/css"});
        },
        show:function(){

            if(!this.$body.attr('current-scroll-top')){
                this.$body.attr('current-scroll-top',$(window).scrollTop());
            }

            this.$body.css('position','fixed');

            var el = this.opt.el;
            var curId = el.attr('data-id');

            var listHtml = [];
            var data = this.opt.data;

            for(var i in data){
                if(curId == null && i == 0){
                    listHtml.push('<li class="current" data-id="'+data[i].id+'"><span>'+data[i].text+'</span><i></i></li>');
                }else{
                    if(curId == data[i].id){
                        listHtml.push('<li class="current" data-id="'+data[i].id+'"><span>'+data[i].text+'</span><i></i></li>');
                    }else{
                        listHtml.push('<li data-id="'+data[i].id+'"><span>'+data[i].text+'</span><i></i></li>');
                    }
                }
            }


            this.tpl(listHtml.join(''));

            this.$btnCancel = this.$selectWrap.find('.btn-cancel');
            this.$btnConfirml = this.$selectWrap.find('.btn-confirm');

            this.setStyle();
            this.selectRadio();

            this.btnCancel();
            this.btnConfirm(el);
        },
        tpl:function(dataList){
            var html ='<div class="list">'
                +			'<ul id="list-data">'+dataList+'</ul>'
                +		'</div>'
                +		'<div class="bottom">'
                +			'<span class="btn btn-cancel">取消</span>'
                +			'<span class="btn btn-confirm">确定</span>'
                +		'</div>';

            var alertHtml = this.$selectAlert.html(html);
            this.style();
            var wrapHtml = this.$selectWrap.append(alertHtml);
            this.appWrap.append(wrapHtml);
        },
        /*v1.2.0新增*/
        style:function(){
            var styleStr = '.select-wrap{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);overflow:hidden;z-index:1000}.select-alert{width:80%;left:50%;margin-left:-40%;background-color:#fff;position:absolute;top:50%;border-radius:2px;-o-border-radius:2px;-ms-border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px}.select-alert .list{margin:0 1rem;overflow:auto;overflow-y:auto;overflow-x:hidden}.select-alert .list li{padding:0 .5rem;height:2.5rem;line-height:2.5rem;border-bottom:1px solid #eee}.select-alert .list li span{float:left}.select-alert .list li i{float:right;display:block;border:.25rem solid #eee;width:.5rem;height:.5rem;background-color:#eee;border-radius:1rem;-o-border-radius:1rem;-ms-border-radius:1rem;-moz-border-radius:1rem;-webkit-border-radius:1rem;margin-top:.75rem}.select-alert .list li.current i{border:.25rem solid #ca9f75;background-color:#fff}.select-alert .bottom{margin:0 1rem;padding:1rem 0;clear:both}.select-alert .bottom:after{display:block;clear:both;visibility:hidden;height:0;overflow:hidden;content:"."}.select-alert .btn{height:2rem;line-height:2rem;text-align:center;width:46%;border:1px solid #eee;border-radius:2px;-o-border-radius:2px;-ms-border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px}.select-alert .btn-cancel{float:left}.select-alert .btn-confirm{float:right}';
            var styleHtml = this.$style.html(styleStr);
            this.$selectWrap.append(styleHtml);
        },
        setStyle:function(){
            var $selectAlert = this.$selectAlert,
                selectAlertHeight = $selectAlert.height(),
                selectHeight = parseInt(selectAlertHeight*0.9),
                winHeight = parseInt($(window).height()*0.9),
                wrapperWidth = this.appWrap.width(),
                $list = $selectAlert.find('.list'),
                $bottom = $selectAlert.find('.bottom');

            this.$selectWrap.css({
                'width': wrapperWidth,
                'margin-left': -wrapperWidth/2,
                'left':'50%'
            });

            if(!$selectAlert.attr('default-height')){
                $selectAlert.attr('default-height',selectAlertHeight);
            }
            var defaultAelectAlertHeight = $selectAlert.attr('default-height');

            if(defaultAelectAlertHeight > winHeight){
                $list.height(winHeight-$bottom.height());
                $selectAlert.css({
                    'height':winHeight,
                    'margin-top':'-'+parseInt(winHeight/2)+'px'
                });

            }else{
                $selectAlert.css({
                    'margin-top':'-'+parseInt(selectAlertHeight/2)+'px'
                });
            }
        },
        btnCancel:function(){
            var self = this;
            this.$btnCancel.on('click',function(){
                self.$body.css('position','static');

                $(window).scrollTop(self.$body.attr('current-scroll-top'));
                self.$body.removeAttr('current-scroll-top');

                self.$selectWrap.remove();
            });
        },
        btnConfirm:function(el){
            var self = this;
            this.$btnConfirml.on('click',function(){
                var listData = self.$selectWrap.find('#list-data'),
                    area = {};
                area.curId = listData.find('li.current').attr('data-id');
                area.curText = listData.find('li.current span').text();

                self.setArea(el,area);
                self.$body.css('position','static');

                $(window).scrollTop(self.$body.attr('current-scroll-top'));
                self.$body.removeAttr('current-scroll-top');

                self.$selectWrap.remove();
            });
        },
        setArea:function(el,area){
            el.attr('data-id',area.curId);
            el.find('.text').text(area.curText);
            el.find('input').val(area.curId);
            el.css({'color':'#333'});
        },
        selectRadio:function(){
            var listData = this.$selectWrap.find('#list-data'),
                cur = 'current';

            listData.find('li').on('click',function(){
                $(this).addClass(cur).siblings('li').removeClass(cur);
            });
        }

    };

    $.fn.selectAlert = function(opt){
        var $this = $(this);
        var mySelectAlert = new selectAlert({
            el:$this,
            elWrap:opt.elWrap,
            defautlArea:opt.defautlArea ? opt.defautlArea : {curId:1,curText:" "},
            data:opt.data
        });
        mySelectAlert.setArea($this,mySelectAlert.opt.defautlArea);
        $this.on('click',function(){
            mySelectAlert.show();
        });
    }

})(Zepto);
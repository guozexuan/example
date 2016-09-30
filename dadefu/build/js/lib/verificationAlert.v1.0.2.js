/*
 *提示插件
 *调用 VA.show('提示内容');
 *
 */
;(function(){

var VerificationAlertWrap = document.createElement('div');
VerificationAlertWrap.class = VerificationAlertWrap.className = 'verification-alert';
var topHeight = $(window).height()/2-$(VerificationAlertWrap).height();

var  VerificationAlert={
	timer:null,
    init:function(text){
        $('body').append(VerificationAlertWrap);
        $(VerificationAlertWrap).html(text);
        $(VerificationAlertWrap).css({'top':topHeight,'visibility':'hidden'});
    },
    show:function(text,time){
        time = time || 1000;
        this.init(text);
        this.setStyle();
		clearTimeout(this.timer);
       	this.timer = setTimeout(function(){
            VerificationAlert.hide(); 
        },time);
        $(VerificationAlertWrap).on('click',function(){
			clearTimeout(this.timer);
            VerificationAlert.hide(); 
        }); 
    },
    hide:function(){
        $(VerificationAlertWrap).css('visibility','hidden');
    },
    setStyle:function(){
        $(VerificationAlertWrap).css({
            'visibility':'visible',
            'width': '10.25rem',
            'position': 'fixed',
            'left': '50%',
            'top': '50%',
            'margin-left': '-6.125rem',
            'padding': '1rem',
            'line-height': '1.5rem',
            'background': 'rgba(0, 0, 0, 0.7)',
            'text-align': 'center',
            'border-radius': '0.25rem',
            '-o-border-radius': '0.25rem',
            '-ms-border-radius': '0.25rem',
            '-moz-border-radius': '0.25rem',
            '-webkit-border-radius': '0.25rem',
            'color': '#fff',
            'z-index':'1002'
        });
		var vaHeight = $(VerificationAlertWrap).height();
		$(VerificationAlertWrap).css('margin-top','-'+parseInt(vaHeight/2)+'px');
    }
    
};

window.VA = VerificationAlert;

})();
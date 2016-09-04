$(function(){
	/*圆bug*/
	$('.page').height($('body').height());
	var a = $('#main-1').css('width');
	$('#main-1').css('height', a);
	var b = $('#main-2').css('width');
	$('#main-2').css('height', b);
	var c = $('#main-3').css('width');
	$('#main-3').css('height', c);
	var d = $('#main-80').css('width');
	$('#main-80').css('height', d);
	var e = $('#main-85').css('width');
	$('#main-85').css('height', e);
	var f = $('#main-90').css('width');
	$('#main-90').css('height', f);
	var g = $('#main-95').css('width');
	$('#main-95').css('height', g);


	var dotChange=$('.progressDot');
	var pageChange=$('.page');
	var Key=0;
	var timer;
	var theHeight=$('#pageList li').height();
	//var tempPage=pageChange.children('li').first().clone(true);
	//pageChange.append(tempPage);
	//pageChange.eq(0).css('display', 'block');
	/*自动切换*/
	//$('.page').eq(0).css('display', 'block');
	function autoChange(){
		Key ++;
		if (Key>6) {Key=0};
		dotChange.eq(Key).addClass('current').siblings('li').removeClass('current');
		/*Key ++;
		if (Key>6) {Key=0};	*/	
		pageChange.eq(Key).stop().css('display', 'block').siblings('li').css('display', 'none' );
		
		//var moves=pageKey*-theHeight;
		//pageChange.stop().animate({'display','none'},500);
		//pageChange.stop().animate({'display':'block'},500);
	}
	timer=setInterval(autoChange, 10000);

	/*鼠标移入*/
	$('#wrapper').hover(function() {
		clearInterval(timer);
	}, function() {
		timer=setInterval(autoChange,10000);
	});

	/*小点click*/
	dotChange.click(function() {
		//clearInterval(timer);
		$(this).addClass('current').siblings('li').removeClass('current');
		var i=$(this).index();
		pageChange.eq(i).stop().css('display', 'block').siblings('li').css('display', 'none' );
		//setInterval(autoChange, 10000);
		Key=i;
		//var moves=i*-theHeight;
		//pageChange.stop().animate({'margin-top':moves},500);
	});
})


/*
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
*/
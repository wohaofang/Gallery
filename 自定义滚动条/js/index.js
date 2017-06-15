var content = $('#content');
var bar = $('#bar');

var maxTop = 1029-500;
/*------------------内容滚动---------------------*/
var ntop=0;
var yy = 0;
addW(content[0], function(aa) {
    // ntop = content[0].style.top;

    if (aa) {
        ntop += 10;
    } else {
        ntop -= 10;
    }

    if (ntop<0) {
    	ntop=0;
    }else if(ntop>540){
    	ntop=540;
    }
	yy=ntop*300/540
	bar[0].style.top=yy+'px';
    content[0].style.top = -ntop + 'px';

})

function addW(obj, fn) {
    obj.onmousewheel = function(ev) {
        var oEvent = ev || event;
        if (oEvent.wheelDelta > 0) {
            var down = false;
        } else {
            var down = true;
        }

        fn(down);
    }
};


/*---------------------按钮---------------------------*/ 
var timer=null;

$('#top').click(function(){

	ntop -=10;
	if (ntop<0) {
		ntop=0;
	}
	yy=ntop*300/540
	bar[0].style.top=yy+'px';
	content[0].style.top = -ntop + 'px';
})

$('#bottom').click(function(){
	
	ntop +=10;
	if (ntop>540) {
		ntop=540;
	}
	yy=ntop*300/540
	bar[0].style.top=yy+'px';
	content[0].style.top = -ntop + 'px';
})
$('#top').on('mousedown',function(){
	timer=setInterval(function(){
		ntop -=10;
	if (ntop<0) {
		ntop=0;
	}
	yy=ntop*300/540
	bar[0].style.top=yy+'px';
	content[0].style.top = -ntop + 'px';
	},100)
})
$('#top').on('mouseup',function(){
	clearInterval(timer);
});

$('#bottom').on('mousedown',function(){
	timer=setInterval(function(){
	ntop +=10;
	if (ntop>540) {
		ntop=540;
	}
	yy=ntop*300/540
	bar[0].style.top=yy+'px';
	content[0].style.top = -ntop + 'px';
	},100)
})
$('#bottom').on('mouseup',function(){
	clearInterval(timer);
});






/*--------------------right--------------------------*/


bar.on('mousedown',function(ev){
	var disY = ev.clientY - bar[0].offsetTop;

	bar.on('mousemove',function(ev){
		var top = ev.clientY - disY;

		if (top<0) {
			top=0;
		}else if (top>299){
			top=299;
		}

		bar[0].style.top=top+'px';

		var y = maxTop*top/299;
		ntop=y;
		content.css('top',-y+'px');

	});
	bar.on('mouseup',function(){
		bar.off('mousemove',null)
	});
});


function getStyle(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr] ;
		}else {
			return getComputedStyle(obj,false)[attr] ;
		}
}

function move(obj,attr,aim,fn){
 	clearInterval(obj.timer);
 	obj.timer = setInterval(function(){
 		var gg = '';
 		if(attr == 'opacity'){
 			gg = Math.round(parseFloat(getStyle(obj,'opacity'))*100);
 		}else {
 			gg = parseInt(getStyle(obj,attr));
 		}
 		//判断传入的属性

 		var speed = (aim - gg)/7 ;
 		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed) ;
 		//判断速度

 		if(gg == aim ){
 			clearInterval(obj.timer);
 			if(fn){
 				fn();
 			}
 		}
 		//判断结束条件

 		if(attr == 'opacity'){
 			obj.style['opacity'] = (gg + speed)/100 ;
 		}else {
 			obj.style[attr] = gg + speed + "px" ;
 		}
 		//判断定时器执行条件
 	},15)
}

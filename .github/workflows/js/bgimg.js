var count=0;
var ran;
	
	
	var arr=new Array();
	
	
	// for(var i=0;i<12;i++){
	// 	arr[i]=new Image();
	// 	arr[i].scr="https://w.wallhaven.cc/full/72/wallhaven-72rd8e.jpg";
	// 	arr[i].onload=fun;
	// }

	// arr[0]="../img/v2-95d6cfcd65b27c552508bb868d4ca70c_r.jpg";
	// arr[1]="../img/v2-992457951e05eb9d4d3dc77a50ed904d_r.jpg";
	// arr[2]="../img/wallhaven-4or8xl.jpg";
	// arr[3]="../img/wallhaven-6kom2l.png";
	// arr[4]="../img/wallhaven-72rd8e.jpg";
	// arr[5]="../img/wallhaven-e7xvzk.png";
	// arr[6]="../img/wallhaven-kwgd61.png";
	// arr[7]="../img/wallhaven-o3vyr9.png";
	// arr[8]="../img/wallhaven-v9e8jm.png";
	// arr[9]="../img/wallhaven-wqve97.png";
	// arr[10]="../img/wallhaven-xl633d.png";
	// arr[11]="../img/wallhaven-z8dg9y.png";
	
	arr[0]="https://w.wallhaven.cc/full/72/wallhaven-72rd8e.jpg";
	arr[1]="https://w.wallhaven.cc/full/wq/wallhaven-wqve97.png";
	arr[2]="https://w.wallhaven.cc/full/z8/wallhaven-z8dg9y.png";
	arr[3]="https://w.wallhaven.cc/full/6k/wallhaven-6kom2l.png";
	arr[4]="https://w.wallhaven.cc/full/kw/wallhaven-kwgd61.png";
	arr[5]="https://w.wallhaven.cc/full/xl/wallhaven-xl633d.png";
	arr[6]="https://w.wallhaven.cc/full/o3/wallhaven-o3vyr9.png";
	arr[7]="https://w.wallhaven.cc/full/v9/wallhaven-v9e8jm.png";
	arr[8]="https://w.wallhaven.cc/full/e7/wallhaven-e7xvzk.png";
	arr[9]="https://w.wallhaven.cc/full/4o/wallhaven-4or8xl.jpg";
	arr[10]="https://pic1.zhimg.com/v2-95d6cfcd65b27c552508bb868d4ca70c_r.jpg?source=1940ef5c";
	arr[11]="https://pica.zhimg.com/v2-992457951e05eb9d4d3dc77a50ed904d_r.jpg?source=1940ef5c";

	/*window.onload=function(){
	        var oImg=document.getElementById("img");
	        oImg.onclick=function(){
	             opacity(oImg,-0.1,0);
	        };
			*/
	        
	        //透明度的封装
	        function opacity(obj,dir,target){
	                clearInterval( obj.timer );
	                obj.timer = setInterval(function () {
	                    var speed =parseFloat(getStyle( obj, "opacity" ))+ dir;
	                    if ( speed < target) {
	                        clearInterval( obj.timer );
	                    }else  {
	                        obj.style.opacity=speed;
	                    }
	                }, 100);
	        		
	            }
	    //兼容不同浏览器获取行间样式
	    function getStyle ( obj, attr ) {
	        return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle( obj )[attr];
	    }
	
	
	
	

		setInterval(function(){ran=Math.random();ran=Math.round((ran*100000)%11); aa.src=arr[ran]; opacity(bb,-0.05,0);setTimeout("f1()",4000);},30000);
	// }
	// }
	
	function f1(){
		bb.src=arr[ran];
		bb.style.opacity=1;
	}

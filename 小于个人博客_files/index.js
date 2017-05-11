        var _index=0;
		var _index1=0;
		var _butt=0;
                var daoh = 0;
	    $(document).ready(function(){
			$("#back-to-top").hide();
	        $(".bt").animate({top:'0px',opacity:'1',},2500);
		    $(".bt2").animate({right:'41px',opacity:'1'},2500);
             var num = 0;
	  var s = setInterval(function (){
		   msg();
		   num++;
		   if(num>1){
		   clearInterval(s);}
		  }, 200)
function msg(){
     var ys = $(".bt2")
		 $(ys).animate({"opacity":"0",},150).animate({"opacity":"1",},150)
  }
            $(window).scroll(function(){
                  if($(window).scrollTop()>400){
                  $("#back-to-top").fadeIn(500);
                  }
                  else{
                      $("#back-to-top").fadeOut(500);
                      }
                  });
		     $("#back-to-top").click(function(){
             $('body,html').animate({scrollTop:0},400);
			 });
		});

               
		$(".But span").click(function(){
			_index=$(this).index();
			_index1=_index;
			play(_index);
			$(".albumright ul li").eq(_index1).addClass("beijing").siblings("li").removeClass("beijing");
		});	
		/*right pic*/
		$(".albumright ul li").click(function(){
			_index1=$(this).index();
			_index=_index1;
		    play(_index1);
			$(".albumright ul li").eq(_index1).addClass("beijing").siblings("li").removeClass("beijing");
		});
		/*setInterval */
		autoPlay();
		function autoPlay(){
		    clearTime=setInterval(function(){
		    _index++;_index1=_index;
			if(_index>=4){_index=0;}
   			if(_index1>=4){_index1=0;}
			play(_index);
			$(".albumright ul li").eq(_index1).addClass("beijing").siblings(".albumright ul li").removeClass("beijing");//µ÷ÓÃ²¥·Å
		    },3500);
		}
		$(".But span").mouseover(function(){
		    clearInterval(clearTime);//clear setInterval
		});

		$(".But span").mouseout(function(){
		    autoPlay();
		})
		$(".albumright ul li").mouseover(function(){
		    clearInterval(clearTime);//clear setInterval
		});

		$(".albumright ul li").mouseout(function(){
		    autoPlay();
		})
		function play(_index){
		    $(".But span").eq(_index).addClass("active").siblings("span").removeClass("active");
            //$(".scroll").animate({left:_index*-500},500);
			//$(".scroll").fadeOut(200).animate({left:_index*-500},10).fadeIn(400);
                        $(".scroll img").eq(_index1).fadeIn(1000).siblings().fadeOut(1500);
		}
		$(".xiaytop ul li").hover(function(){//ÇÐ»»¿¨
			_butt=$(this).index();
		    $(".xiaytop ul li").eq(_butt).addClass("butt").siblings(".xiaytop ul li").removeClass("butt");
			if(_butt==0)
			{
				$(".transform-son").css("display","block");
				$(".transform").css("display","none");
			}
			else if(_butt==1)
			{
				$(".transform-son").css("display","none");
				$(".transform").css("display","block");
			}
		});

        $(".daohang ul li").click(function(){
		    daoh = $(this).index();
            $(this).find("a").addClass("turn").parent().siblings("li").find("a").removeClass("turn");
		});
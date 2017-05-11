 $(window).scroll(function(){
       $(window).scroll(function(){
       var s=$(window).scrollTop();
       if(s<540){
           $(".xiay").css("position","absolute");
		   $(".xiay").css("top","578px");
      }
	   else if(s>540){
	      $(".xiay").css("position","fixed");
		  $(".xiay").css("top","15px");
	   }
	   if(s<890){
           $(".yq").css("position","absolute");
		   $(".yq").css("top","1275px");
	   }
	   else if(s>900){
           $(".yq").css("position","fixed");
		   $(".yq").css("top","380px");
	   }
    });
    });
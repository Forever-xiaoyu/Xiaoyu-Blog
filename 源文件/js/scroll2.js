 $(document).ready(function(){

     $(window).scroll(function(){
       var s=$(window).scrollTop();
       if(s<510){
           $(".xiay").css("position","absolute");
		   $(".xiay").css("top","490px");
      }
	   else if(s>510){
	      $(".xiay").css("position","fixed");
		  $(".xiay").css("top","-25px");
	   }
      if(s<510){
           $(".yq").css("position","absolute");
		   $(".yq").css("top","894px");
	   }
	   else if(s>510){
           $(".yq").css("position","fixed");
		   $(".yq").css("top","380px");
	   }
    });
});
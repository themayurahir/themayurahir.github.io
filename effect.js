$('document').ready(function(){
		var vw;

		
		 vw = $(window).width()/2;

		
	
				$('.message').fadeIn('slow');
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					window.setTimeout(function(){
						//Move to a new location or you can do something else	
						window.location.href = "ticket.html";
					}, 5000);
				});
				
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);
		
		function ready(){
			//			
		}
		
	
		
});

$(".js-sort").on("click", function() {
	$(".main-content__wrapper").removeClass().addClass("main-content__wrapper");
	$(".sorting-hat,.avatar__mouth").removeClass("animate");
	$(".js-go").removeClass("hide");
	$(".js-sort").addClass("hide");

	var houses = ["hufflepuff", "gryffindor", "ravenclaw", "slytherin"];
	var item = houses[Math.floor(Math.random() * houses.length)];

	setTimeout(function() {
		$(".sorting-hat").addClass("animate");
		$(".sorting-hat__answer").text(item + "!");
	}, 1000);
	setTimeout(function() {
		$(".avatar__mouth").addClass("animate");
	}, 1500);
	setTimeout(function() {
		$(".main-content__wrapper").addClass(item);
		$(".avatar-gender").addClass("hide");
	}, 4000);
	setTimeout(function() {
		if(item === 'hufflepuff')
		{
			document.getElementById("section2").style.backgroundImage = "url('assests/Hufflepuff.png')";
			document.getElementById("section2").style.backgroundPosition = "center center";
			document.getElementById("section2").style.backgroundRepeat = "no-repeat";
			document.getElementById("section2").style.backgroundSize = "100% 100%";
		}
		else if(item === 'gryffindor')
		{
			document.getElementById("section2").style.backgroundImage = "url('assests/Gryfindor.png')";
			document.getElementById("section2").style.backgroundPosition = "center center";
			document.getElementById("section2").style.backgroundRepeat = "no-repeat";
			document.getElementById("section2").style.backgroundSize = "100% 100%";
		}
		else if(item === 'ravenclaw')
		{
			document.getElementById("section2").style.backgroundImage = "url('assests/Ravenclaw.png')";
			document.getElementById("section2").style.backgroundPosition = "center center";
			document.getElementById("section2").style.backgroundRepeat = "no-repeat";
			document.getElementById("section2").style.backgroundSize = "100% 100%";
		}
		else if(item === 'slytherin')
		{
			document.getElementById("section2").style.backgroundImage = "url('assests/Slytherin.png')";
		    document.getElementById("section2").style.backgroundPosition = "center center";
			document.getElementById("section2").style.backgroundRepeat = "no-repeat";
			document.getElementById("section2").style.backgroundSize = "100% 100%";
		
		}
	}, 4000);

	//window.setTimeout(function(){
        //Move to a new location or you can do something else	
    //    window.location.href = "";
      //}, 8000);
});


$('input[name=avatar-gender]').on('change', function(){
	var value = $('input[name=avatar-gender]:checked').val();
	if (value == 1) {
		$('.avatar__hair').removeClass('female');
	} else if (value == 2) {
		$('.avatar__hair').addClass('female');
	}
});

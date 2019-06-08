var isBlurred = true;
        var line = 0;
        var titles = [
            "The Lion, the Witch and the Wardrobe",
            "The Lord of the Rings",
            "The Wind in the Willows",
            "Harry Potter",
            "Gregor the Overlander"];
        var titlesLength = titles.length;
        var typer = $(".typed"); 
        var swapTitle = function () {
            if (isBlurred) {
                $(title).addClass("unblur");
                var text = titles[line].split("");
                typer.empty();
                var timeSpacing = 80;
                text.forEach(function(el, index){
                    setTimeout(function(){
		                typer.text(typer.text()+el);
	                }, index * timeSpacing);
                });
                isBlurred = !isBlurred;
            } else{
                $(title).removeClass("unblur");
                isBlurred = !isBlurred;
            }
            line++;
            if (line > titlesLength) {
                line = 0;
            }
            render();
        }

        function render() {
            setTimeout(swapTitle, 5000);
        }
        $(document).ready(function () {
            render();
        });
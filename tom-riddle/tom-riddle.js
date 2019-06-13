        var isBlurred = true;
        var line = 0;
        var titles = [
            "The Lion, the Witch and the Wardrobe",
            "The Lord of the Rings",
            "The Wind in the Willows",
            "Gregor the Overlander",""];
        var titlesLength = titles.length;
        console.log('Length: ' + titlesLength);
        var typer = $(".typed"); 
        var check = true;
        var swapTitle = function () {
            //console.log('inside swapTitle');
            if(check) {
            if (isBlurred) {
                //console.log('inside blurred');
                console.log(titles[line]);
                $(title).addClass("unblur");
                var text = titles[line].split("");
                //console.log(text);
                typer.empty();
                var timeSpacing = 80;
                //console.log('line before loop: ' + line);
                text.forEach(function(el, index){
                    setTimeout(function(){
		                typer.text(typer.text()+el);
	                }, index * timeSpacing);
                });
                //console.log('line after loop: ' + line);
                isBlurred = !isBlurred;
            } else{
                //console.log('inside unblurred');
                $(title).removeClass("unblur");
                isBlurred = !isBlurred;
                line++;
                //console.log('line after increment: ' + line);
            }
        }
            if(check === true){
            if (line >= titlesLength) {
                //console.log('inside condition');
                $(btn).addClass("unblur");
                check = false;
            }
            //console.log('calling render');
            render();}
            else {
                $("js-toggle").onclick = function () {
                    console.log('Clicked');
                    
                }
            }
        }

        $('.js-toggle').on('click', function(){
            console.log('New Clicked');
            var vid1 = document.getElementById('myVideo1'),
            vidsrc = '../tom-riddle/2.17 Harry Destroys the Diary B2C17M3.mp4';
            vid1.setAttribute("src",vidsrc);
            vid1.load();
            vid1.play();
            
            vid1.onended = function() {
                console.log("Video ended");
                $(btn2).addClass("unblur");
                $(btn2).addClass("cssanimation");
                $(btn2).addClass("fadeInBottom");
            };

            window.location.href = "#section1";
        });

        $('.js-toggle2').on('click', function(){
            console.log('Chamber button clicked');
            window.setTimeout(function(){
                window.location.href = "../tom-riddle/chamber.html";
              }, 2000);
        });

        function render() {
            //console.log('inside render');
            setTimeout(swapTitle, 5000);
        }
        $(document).ready(function () {
            render();
        });

        
$('document').ready(function(){
    // Get random number from 0 to size
        var getRandomNumber = function (size) {
            return Math.floor(Math.random() * size);
        };

        // Calculate distance between click, event and target       
        var getDistance = function (event, target) {
            var diffX = event.offsetX - target.x;
            var diffY = event.offsetY - target.y;
            return Math.sqrt(diffX * diffX + diffY * diffY);
        };

        // Get a string representing the distance
        var getDistanceHint = function (distance) {
            if (distance < 8) {
                return "You found Potter using " + clicks + " spells!";
            } else if (distance < 10) {
                return "Oh, I sense him... He is VERY VERY close, I know it";
            } else if (distance < 20) {
                return "He is very close";
            } else if (distance < 40) {
                return "He is quite close... that Potter";
            } else if (distance < 80) {
                return "He is around here, but we are not yet there";
            } else if (distance < 160) {
                return "I don't sense him around...";
            } else if (distance < 320) {
                return "He is not here, and not close from here";
            } else {
                return "He is as far as he can be, search elsewhere";
            }
        };

        // set  uo the variables
        var width = 600;
        var height = 400;
        var clicks = 0;

        // Create a random target location
        var target = {
            x: getRandomNumber(width),
            y: getRandomNumber(height) 
        };


        // Add a click handler to the img element
        $("#map").click(function (event) {
            clicks++;
            var distance = getDistance(event, target);
            var distanceHint = getDistanceHint(distance);
            $("#distance").text(distanceHint);

            if (distance < 8) {
                window.setTimeout(function(){
                    //Move to a new location or you can do something else	
                    window.location.href = "wand/wand.html";
                }, 3000);
            }
            
        });
      //# sourceURL=pen.js
});
//toggle button
$('.js-toggle').on('click', function(){
	$('.map-base').toggleClass('active');
});


//initialization of speech recognition starts here
/*const artyom = new Artyom();
var commands = [
 {
	 indexes:["up to no good"],
	 action:function() {
        console.log("up to no good");
		 $('.map-base').addClass('active');
	 }
 }, {
	 indexes:["mischief managed"],
	 action:function() {
        console.log("mischief managed");
		 $('.map-base').removeClass('active');
	 }
 }, {
    indexes:["bad"],
    action:function() {
       console.log("I am bad at this :(");
        $('.toggle-map').removeClass('hide');
    }
}, {
    indexes:["oh"],
    action:function() {
       console.log("Oh harvey");
        $('.toggle-map').removeClass('hide');
    }
}, {
    indexes:["hey"],
    action:function() {
       console.log("Hey harvey");
        $('.toggle-map').removeClass('hide');
    }
}, {
    indexes:["exit"],
    action:function() {
       console.log("Exit");
        $('.toggle-map').removeClass('hide');
    }
}
]
artyom.addCommands(commands);

function startContinuousArtyom(){
    artyom.fatality();

    setTimeout(function(){
         artyom.initialize({
            lang:"en-GB",
            continuous:true,
            listen:true, 
            speed:1
        }).then(function(){
            console.log("Ready to work !");
        });
    },250);
}

startContinuousArtyom();*/



window.addEventListener('DOMContentLoaded', () => {
    const textDiv = document.getElementById('text');
    const map = document.querySelector('.map-base');
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
  
    recognition.start();
    console.log('started');
    recognition.addEventListener('result', result => {
      console.log('listned');
      console.log(result.results[0][0].transcript);
      let listenedWord = result.results[0][0].transcript;
      if (listenedWord.toLowerCase() === 'wingardium leviosa' || listenedWord.toLowerCase() === 'float')
      {
        map.classList.add('active');
      }
      else if(listenedWord.toLowerCase() === 'exit')
      {
          window.location.href = "../tom-riddle/tom-riddle.html";
      }
      textDiv.innerHTML = "Heard:";
      textDiv.innerHTML = textDiv.innerHTML + " " + listenedWord;
    });
  
    map.addEventListener('animationstart', () => {
  
    });
    map.addEventListener('animationend', () => {
      //feather.classList.remove('float');
      recognition.start();
    });
  
    recognition.addEventListener('end', recognition.start);
  });
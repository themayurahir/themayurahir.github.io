	//toggle button
    $('.js-toggle').on('click', function(){
        $('.map-base').toggleClass('active');
    });
    
    
    //initialization of speech recognition starts here
    const artyom = new Artyom();
    var commands = [
     {
         indexes:["up to no good"],
         action:function() {
             $('.map-base').addClass('active');
         }
     }, {
         indexes:["mischief managed"],
         action:function() {
             $('.map-base').removeClass('active');
         }
     }, {
        indexes:["oh harvey"],
        action:function() {
            window.setTimeout(function(){
                window.location.href = "../tom-riddle/tom-riddle.html";
            }, 5000);
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
    
    startContinuousArtyom();



    // =============== Voice Recognition for Heard ===============

    window.addEventListener('DOMContentLoaded', () => {
        const textDiv = document.getElementById('text');
        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
      
        recognition.start();
        console.log('started');
        recognition.addEventListener('result', result => {
          console.log('listned');
          console.log(result.results[0][0].transcript);
          let listenedWord = result.results[0][0].transcript;
          if (listenedWord.toLowerCase() === 'oh harvey' || listenedWord.toLowerCase() === 'hey harvey')
          {
            window.setTimeout(function(){
                window.location.href = "../t";
            }, 5000);
          }
          else if(listenedWord.toLowerCase() === 'exit')
          {
              window.location.href = "findme/findme.html";
          }
          textDiv.innerHTML = "Heard:";
          textDiv.innerHTML = textDiv.innerHTML + " " + listenedWord;
        });
      
        
        feather.addEventListener('animationstart', () => {
      
        });
        feather.addEventListener('animationend', () => {
          
        });
      
        recognition.addEventListener('end', recognition.start);
      });
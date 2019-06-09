var el = document.querySelector('.lumos');
        var elChild = document.querySelector('.lumos-spell');

        function initLumos(e) {
            el.style.top = e.clientY - el.offsetTop / 3 + 'px';
            el.style.left = e.clientX - el.offsetLeft / 3 + 'px';
        }

        function startLumos(e) {
            el.className += ' ' + "active";
            elChild.className += ' ' + 'hide';
            setTimeout(function () {
                el.classList.remove("active");
                elChild.classList.remove('hide');
            }, 13000);
        };

        window.addEventListener('click', startLumos);
        window.addEventListener('click', initLumos);
        window.addEventListener('mousemove', initLumos);


        // =============== Voice Recognition ===============

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
              if (listenedWord.toLowerCase() === 'find harvey' || listenedWord.toLowerCase() === 'ok go')
              {
                window.setTimeout(function(){
                    window.location.href = "../findme/findme.html";
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
              recognition.start();
            });
          
            recognition.addEventListener('end', recognition.start);
          });
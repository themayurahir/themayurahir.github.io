(function () {
    var cssTransition, imageOffset, imageWidth, images, queue, timeout, touch;
  
    cssTransition = function () {
      var body, i, len, style, vendor, vendors;
      body = document.body || document.documentElement;
      style = body.style;
      vendors = ['Moz', 'Webkit', 'O'];
      if (typeof style['transition'] === 'string') {
        return true;
      }
      for (i = 0, len = vendors.length; i < len; i++) {if (window.CP.shouldStopExecution(0)) break;
        vendor = vendors[i];
        if (typeof style[vendor + 'Transition'] === 'string') {
          return true;
        }
      }window.CP.exitedLoop(0);
      return false;
    };
  
    queue = false;
  
    touch = document.documentElement['ontouchstart'] !== void 0;
  
    images = document.querySelector('.images');
  
    imageWidth = images.firstElementChild.offsetWidth;
  
    imageOffset = images.firstElementChild.offsetLeft;
  
    timeout = cssTransition() ? [300, 400] : [0, 0];
  
    images.addEventListener(touch ? 'touchend' : 'click', function (event) {
      var direction, lastClassList;
      if (queue) {
        return;
      }
      queue = true;
      if ((touch ? event.changedTouches[0].pageX : event.pageX) - imageOffset > imageWidth / 2) {
        direction = 'slide-right';
      } else {
        direction = 'slide-left';
      }
      lastClassList = images.lastElementChild.classList;
      lastClassList.add(direction);
      return setTimeout(function () {
        lastClassList.remove(direction);
        lastClassList.add('back');
        return setTimeout(function () {
          images.insertBefore(images.lastElementChild, images.firstElementChild);
          lastClassList.remove('back');
          return queue = false;
        }, timeout[0]);
      }, timeout[1]);
    }, false);
  
  }).call(this);
  
  //# sourceURL=coffeescript



  // Loaders JavaScript

  (function () {
    function fullSketch() {
      var begin = 0;
      var durations = [2,2,1];
      var pathsNode = document.querySelectorAll('.main');
      var paths = Array.from(pathsNode);
      var length = 0;

      // paths[0].getBoundingClientRect();

      paths.forEach(function(path, i) {
        // console.log(path);
        length = path.getTotalLength();
        // Clear any style
        path.style.transition = path.style.WebkitTransition = 'none';
        path.style.strokeDasharray = length + ' ' + length;
        path.style.strokeDashoffset = length;
        // Trigger
        path.getBoundingClientRect();
        path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset ' + durations[i] + 's ' + begin + 's ease';
        path.style.strokeDashoffset = '0';
        begin += durations[i];

        setTimeout(addLightningAnimate, 5000);
        setTimeout(removeLightningAnimate, 8000);
      });

      function addLightningAnimate() {
        var lightning = document.getElementById("lightning");
        lightning.classList.add("lightningAnimate");
      }

      function removeLightningAnimate() {
        var lightning = document.getElementById("lightning");
        lightning.classList.remove("lightningAnimate");
      }
      //setTimeout(addLightningAnimate, 5000);
      setTimeout(fullSketch, 7000);
      setTimeout(showPage, 20000);
    }

    function showPage() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("myImgs").style.display = "block";
      }
  
    function alert() {
      console.log("it loaded!");
    }

    window.addEventListener('load', fullSketch);
  }());
window.onload = function () {

  

  // here we will handle which texture is visible and the timer to transition between images
  var activeTexture = 1;
  var transitionTimer = 0;

  // set up our WebGL context and append the canvas to our wrapper
  var webGLCurtain = new Curtains("canvas");

  // get our plane element
  var planeElements = document.getElementsByClassName("plane");

  // some basic parameters
  // we don't need to specifiate vertexShaderID and fragmentShaderID because we already passed it via the data attributes of the plane HTML element
  var params = {
    vertexShaderID: "plane-vs",
    fragmentShaderID: "plane-fs",
    imageCover: false, // our displacement texture has to fit the plane
    uniforms: {
      transitionTimer: {
        name: "uTransitionTimer",
        type: "1f",
        value: 0 } }




    // create our plane
  };var plane = webGLCurtain.addPlane(planeElements[0], params);

  // if our plane has been successfully created
  plane && plane.onReady(function () {
    // display the button
    document.body.classList.add("curtains-ready");

    // when our plane is ready we add a click event listener that will switch the active texture value
    planeElements[0].addEventListener("click", function () {
      if (activeTexture == 1) {
        activeTexture = 2;
      } else if (activeTexture == 2)
      {
        activeTexture = 3;
      }
      else
      {
        activeTexture = 1;
      }
    });

    // click to play the videos
   // document.getElementById("enter-site").addEventListener("click", function () {
      // display canvas and hide the button
      document.body.classList.add("video-started");

      // play our videos
      plane.playVideos();
    //}, true);

  }).onRender(function () {
    // increase or decrease our timer based on the active texture value
    // at 60fps this should last one second
    if (activeTexture == 2) {
      transitionTimer = Math.min(60, transitionTimer + 1);
    } else
    {
      transitionTimer = Math.max(0, transitionTimer - 1);
    }
    // update our transition timer uniform
    plane.uniforms.transitionTimer.value = transitionTimer;
  });
};
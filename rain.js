var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var cw = window.innerWidth;
var ch = window.innerHeight;

ctx.canvas.width = cw;
ctx.canvas.height = ch;

var rainSpeed = 25;
var rainWeight = 1; // 1 being heaviest
var raindrops = new Array();

var requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

function Raindrop(x, length, opacity) {
  this.x = x;
  this.y = (0 - length) * (Math.random() * 15);
  this.length = length;
  this.opacity = opacity;
}

Raindrop.prototype.update = function() {
  if (this.y >= ch) {
    // Set drop back to the top of the screen
    this.y = ch - this.y - this.length * 5;

    // Get a new random length and opacity
    this.length = Math.floor(Math.random() * 150) + 80;
    this.opacity = Math.random() * (0.3 - 0) + 0;
  } else {
    // Increment y coordinate to move down the screen.
    this.y = this.y + rainSpeed;
  }

  ctx.beginPath();

  var grd = ctx.createLinearGradient(0, this.y, 0, this.y + this.length);
  grd.addColorStop(0, "rgba(255,255,255,0)");
  grd.addColorStop(1, "rgba(255,255,255," + this.opacity + ")");

  ctx.fillStyle = grd;
  ctx.fillRect(this.x, this.y, 1, this.length);
};

function makeRain() {
  raindrops = [];
  for (var i = 0; i < cw; i++) {
    if (parseFloat(i) ? !(i % rainWeight) : void 0) {
      var posX = i;
      // Get random length range
      var length = Math.floor(Math.random() * 550) + 280;
      var opacity = Math.random() * (0.2 - 0) + 0;
      var newDrop = new Raindrop(posX, length, opacity);
      raindrops.push(newDrop);
    }
  }
  draw();
}

makeRain();

function draw() {
  ctx.clearRect(0, 0, cw, ch);
  for (var i = 0; i < raindrops.length; i++) {
    var currentDrop = raindrops[i];
    currentDrop.update();
  }

  requestAnimationFrame(draw);
}
var thunderBtn = document.getElementById("thunder");
var rainBtn = document.getElementById("rain");

thunderBtn.addEventListener(
  "click",
  function() {
    document.body.className = "thunder-now";
    setTimeout(function() {
      document.body.className = "";
    }, 1000);
  },
  false
);

rainBtn.addEventListener(
  "click",
  function() {
    document.body.className = "rain-pause";
    setTimeout(function() {
      document.body.className = "";
    }, 1000);
  },
  false
);

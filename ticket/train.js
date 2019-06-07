$('document').ready(function(){

/* Source Code :
Classic Train code by. All Sources - https://codepen.io/search/pens?q=classic+train&limit=all&type=type-pens
*/

$(function() {
    $("video,audio").mediaelementplayer({
      success: function(mediaElement, domObject) {
        var audio_src = $("li.current").attr("data-url");
        mediaElement.setSrc(audio_src);
        mediaElement.addEventListener(
          "ended",
          function(e) {
            mys2010PlayNext(e.target);
          },
          false
        );
      },
      keyActions: []
    });
    $(".mys2010-list li").click(function() {
      $(this)
        .addClass("current")
        .siblings()
        .removeClass("current");
      var audio_src = $(this).attr("data-url");
      $("audio#mys2010:first").each(function() {
        this.player.pause();
        this.player.setSrc(audio_src);
        this.player.play();
      });
    });
  });
  function mys2010PlayNext(currentPlayer) {
    if ($(".mys2010-list li.current").length > 0) {
      var current_item = $(".mys2010-list li.current:first");
      var audio_src = $(current_item)
        .next()
        .text();
      $(current_item)
        .next()
        .addClass("current")
        .siblings()
        .removeClass("current");
      console.log("if " + audio_src);
    } else {
      var current_item = $(".mys2010-list li:first");
      var audio_src = $(current_item)
        .next()
        .text();
      $(current_item)
        .next()
        .addClass("current")
        .siblings()
        .removeClass("current");
      console.log("elseif " + audio_src);
    }
    if ($(current_item).is(":last-child")) {
      $(current_item).removeClass("current");
    } else {
      currentPlayer.setSrc(audio_src);
      currentPlayer.play();
    }
  }
});
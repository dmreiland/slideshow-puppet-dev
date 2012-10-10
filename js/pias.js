jQuery.fn.pias = function () {
  this.each(function() {
    var id = $(this).attr("id");
    var player = null
    $(this).parent('.content').bind("showoff:next", function(event) {
      if (player == null) {
        event.preventDefault();
        player = new PIAS.Player("#" + id );
        player.play("file/pias/" + id + ".js");
      }
      else if (player.finished == false) {
        event.preventDefault();
      }
      else {
        player = null
      }
    });
  });
  return this;
}

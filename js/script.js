$(document).ready(function () {
  $("#pic1")
    .mouseover(function () {
      $("#overlay").show();
      var overlay = document.getElementById(overlay);
      overlay.style.border = "3px white solid";
      overlay.style.width = "50%";
      overlay.style.height = "50%";
    })
    .mouseout(function () {
      $("#overlay").hide();
    });
});
$(document).ready(function () {
  $("#pic2")
    .mouseover(function () {
      $("#overlay1").show();
      var overlay1 = document.getElementById(overlay1);
      overlay1.style.border = "3px white solid";
      overlay1.style.width = "50%";
      overlay1.style.height = "50%";
    })
    .mouseout(function () {
      $("#overlay1").hide();
    });
});

$(document).ready(function () {
  $("#pic3")
    .mouseover(function () {
      $("#overlay2").show();
      var overlay = document.getElementById(overlay2);
      overlay2.style.border = "3px white solid";
      overlay2.style.width = "75%";
      overlay2.style.height = "70%";
    })
    .mouseout(function () {
      $("#overlay2").hide();
    });
});

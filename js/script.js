var cost, crustCost, toppingCost;
var total = 0;
function orderPizza(size, crust, topping, total) {
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}
//proceed button
$(document).ready(function () {
  $("button.proceed").click(function (event) {
    let pizzaSize = $("#size option:selected").val();
    let pizzaCrust = $("#crust option:selected").val();
    let pizzaTopping = [];
    $.each($("input[name='toppings']:checked"), function () {
      pizzaTopping.push($(this).val());
    });
    console.log(pizzaTopping.join(","));
    switch (pizzaSize) {
      case "0":
        cost = 0;
        break;
      case "small":
        cost = 500;
        console.log(cost);
        break;
      case "medium":
        cost = 800;
        console.log(cost);
        break;
      case "large":
        cost = 1100;
        console.log(cost);
      default:
        console.log("error");
    }
    switch (pizzaCrust) {
      case "0":
        crustCost = 0;
        break;
      case "Crispy":
        crustCost = 150;
        break;
      case "Stuffed":
        crustCost = 170;
        break;
      case "Glutten-free":
        crustCost = 200;
      default:
        console.log("No cost!");
    }
    let toppingPrice = pizzaTopping.length * 70;
    console.log("Toppings price" + toppingPrice);

    if (pizzaSize == "0" && pizzaCrust == "0") {
      console.log("something must be selected");
    }
  });
});

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

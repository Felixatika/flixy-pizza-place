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
      $("button.proceed").show();
      $("#info").show();
      $("div.order-ready").hide();
      alert("Please select pizza size and crust");
    } else {
      $("button.proceed").hide();
      $("#info").hide();
      $("div.order-ready").slideDown(1000);
    }
    total = cost + crustCost + toppingPrice;
    console.log(total);
    let checkoutTotal = 0;
    checkoutTotal = checkoutTotal + total;

    $("#pizzasize").html($("#size option:selected").val());
    $("#pizzacrust").html($("#crust option:selected").val());
    $("#pizzatopping").html(pizzaTopping.join(","));
    $("#totals").html(total);

    //add pizza button
    $("button.addPizza").click(function () {
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
          break;
        case "medium":
          cost = 750;
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
        case "Gluten-free":
          crustCost = 200;
          break;
        default:
          console.log("No cost");
      }
      let toppingPrice = pizzaTopping.length * 100;
      console.log("toppings price" + toppingPrice);
      total = cost + crustCost + toppingPrice;
      console.log(total);

      checkoutTotal = checkoutTotal + total;
      console.log(checkoutTotal);
      //constructor function
      var newOrder = new orderPizza(pizzaSize, pizzaCrust, pizzaTopping, total);
      $("#ordersmade").append(
        '</td><td id="pizzasize">' +
          newOrder.size +
          '</td><td id="pizzacrust">' +
          newOrder.crust +
          '</td><td id="pizzatopping">' +
          newOrder.topping +
          '</td><td id="totals">' +
          newOrder.total +
          "</td></tr>"
      );
      console.log(newOrder);
    });
    // Checkout button
    $("button#checkout").click(function(){ 
      $("button#checkout").hide();
      $("button.addPizza").hide();
      $("button.deliver").slideDown(1000);
      $("#addedprice").slideDown(1000);
      console.log("Your total bills is sh. "+checkoutTotal);
      $("#pizzatotal").append("Your bill is sh. "+checkoutTotal);
    });
//home delivery button
    $("button.deliver").click(function () {
      $(".pizzatable").hide();
      $(".order-ready h2").hide();
      $(".delivery").slideDown(1000);
      $("#addedprice").hide();
      $("button.deliver").hide();
      $("#pizzatotal").hide();
      let deliveryAmount = checkoutTotal + 100;
      console.log("You will pay sh. " + deliveryAmount + " on delivery");
      $("#totalbill").append("Your bill plus delivery fee is: " + deliveryAmount);

    });
    //when one clicks place order button
    $("button#final-order").click(function (event) {
      event.preventDefault();
      $("#pizzatotal").hide();
      $(".delivery").hide();
      $("button#final-order").hide();
      let deliveryAmount = checkoutTotal + 100;
      console.log("Final Bill is: " + deliveryAmount);
      let person = $("input#name").val();
      let phone = $("input#phone").val();
      let location = $("input#location").val();

      if ($("input#name")).val() && $("input#phone").val && $("input#location").val() != ""){
        $("#finallmessage").append(person+", We have recieved your order and it will be delivered to you at "+location+ ". Prepare sh. "+deliceryamount);
        $("#totalbill").hide();
        $("#finallmessage").slideDown(1200);
      }
      else {
        alert("Please fill in the details for delivery!");
        $(".delivery").show();
        $("button#final-order").show();
      }
      }
    })
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

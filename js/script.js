var cost, crustCost, toppingCost;
var total = 0,
  AllOrders = 0;
function orderPizza(size, crust, topping, total) {
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}
//proceed button
$(document).ready(function () {
  $("#size").val("0");
  $("#crust").val("0");
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
        break;
      default:
        console.log("error");
        break;
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
      default:
        console.log("No cost!");
        break;
    }

    let toppingPrice = pizzaTopping.length * 70;
    console.log("Toppings price" + toppingPrice);

    if (pizzaSize == "0" && pizzaCrust == "0") {
      console.log("something must be selected");
      $("button.proceed").show();
      // $("#info").show();
      $("div.order-ready").hide();
      alert("Please select pizza size and crust");
    } else {
      AllOrders = 1;
      $("#create-order").hide();
      $("#blankks").show();
      $(".addtoorder").show();
      $("button.proceed").hide();
      // $("#info").show();
      $("#orderoptions").show();
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
      $("#create-order").show();
      $("#blankks").hide();
      $("button.addPizza").hide();
    });
    $("button.addtoorder").click(function () {
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
          break;
        default:
          console.log("error");
          break;
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
          break;
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
        '<tr><td id="pizzasize">' +
          newOrder.size +
          '</td><td id="pizzacrust">' +
          newOrder.crust +
          '</td><td id="pizzatopping">' +
          newOrder.topping +
          '</td><td id="totals">' +
          newOrder.total +
          "</td></tr>"
      );
      AllOrders++;
      $("#create-order").hide();
      $("#blankks").show();
      $(".addtoorder").show();
      $("button.addPizza").show();
      console.log(newOrder);
    });
    // Checkout button
    $("button#checkout").click(function () {
      $("button#checkout").hide();
      $("button.addPizza").hide();
      $("button.deliver").slideDown(1000);
      $("#addedprice").slideDown(1000);
      console.log("Your total bills is sh. " + checkoutTotal);
      // alert(checkoutTotal);
      $(".amountstatus").append(
        "<h4>Selected Items In Your Pizza(" +
          AllOrders +
          ")<br>Your bill is sh. " +
          checkoutTotal +
          "</h4>"
      );
      $("#pizzatotal").append("Your bill is sh. " + checkoutTotal);
      $(".yourcheckout").show();
      var yourcheckout = $("#ordersmade").html();
      $("#yourcheckoutitems").html(yourcheckout);
      $("#order-is").hide();
      $("#info").show();
      $(".deliveryform").show();
      $(".deliveryinfo").hide();
      $("#final-order").show();
    });
    //home delivery button
    $("button.deliver").click(function () {
      $(".yourcheckout").show();
      var yourcheckout = $("#ordersmade").html();
      console.log(yourcheckout);
      $("#yourcheckoutitems").html(yourcheckout);

      //$(".pizzatable").hide();
      // $(".order-ready h2").hide();
      $(".delivery").slideDown(1000);
      // $("#addedprice").hide();
      $("button.deliver").hide();
      // $("#pizzatotal").hide();
      $("#final-order").show();

      let deliveryAmount = checkoutTotal + 100;
      console.log("You will pay sh. " + deliveryAmount + " on delivery");
      $(".amountstatus").append(
        "<h4>Your bill plus delivery fee Is : " +
          deliveryAmount +
          "</h4>Ensure You Correctly Fill The Following Form"
      );
      $("#totalbill").append(
        "Your bill plus delivery fee is: " + deliveryAmount
      );
      $(".deliveryinfo").show();
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
      if (
        $("input#name").val() != "" &&
        $("input#phone").val() != "" &&
        $("input#location").val() != ""
      ) {
        $("#finalmessage").append(
          person +
            ", We have received your order and it will be delivered to you at " +
            location +
            ". Prepare sh. " +
            deliveryAmount
        );
        // $("#totalbill").hide();
        $("#finalmessage").slideDown(1200);
        $(".deliveryinfo").hide();
        $(".amountstatus").html("");
        $(".amountstatus").append(
          "<h4>Selected Items In Your Pizza(" +
            AllOrders +
            ")<br>Your bill is sh. " +
            checkoutTotal +
            "</h4>"
        );
        $(".amountstatus").append(
          "<h4>Your bill plus delivery fee Is : " + deliveryAmount + "</h4>"
        );
        // $(".amountstatus").append("<h5>"+person+", We have recieved your order and it will be delivered to you at " + location+" Preapare Sh. "+deliveryAmount+"</h5>");
      } else {
        alert("Please fill in the details for delivery!");
        $(".delivery").show();
        $("button#final-order").show();
      }
    });
    event.preventDefault();
  });
});

$(document).ready(function () {
  $("#pic1")
    .mouseover(function () {
      $("#overlay").show();
      var overlay1 = document.getElementById(overlay);
      overlay.style.border = "3px white solid";
      overlay.style.width = "75%";
      overlay.style.height = "70%";
    })
    .mouseout(function () {
      $("#overlay").hide();
    });
});
$(document).ready(function () {
  $("#pic2")
    .mouseover(function () {
      $("#overlay1").show();
      var overlay = document.getElementById(overlay1);
      overlay1.style.border = "3px white solid";
      overlay1.style.width = "75%";
      overlay1.style.height = "70%";
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

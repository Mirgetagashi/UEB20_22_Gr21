function Product(title, price, image, category) {
    this.title = title;
    this.price = price;
    this.image = image;
    this.category = category;
}

var flowers = {
    "products": [
        new Product("Flower 1", "20\u20ac", "images/fl6.webp", "FLOWER"),
        new Product("Flower 2", "25\u20ac", "images/fl8.webp", "FLOWER"),
        new Product("Flower 3", "23\u20ac", "images/fl9.webp", "FLOWER"),
        new Product("Flower 4", "20\u20ac", "images/fl12.webp", "FLOWER"),
        new Product("Flower 5", "30\u20ac", "images/fl5.webp", "FLOWER"),
        new Product("Flower 6", "25\u20ac", "images/fl13.webp", "FLOWER"),
        new Product("Flower 7", "22\u20ac", "images/fl8.webp", "FLOWER"),
        new Product("Flower 8", "25\u20ac", "images/fl11.webp", "FLOWER"),
        new Product("Flower 9", "25\u20ac", "images/fl14.webp", "FLOWER"),

    ]
}

var gifts = {
    "products": [
        new Product("Gift 1", "50\u20ac", "images/gift3.jpeg", "GIFTS"),
        new Product("Gift 2", "15\u20ac", "images/gift1.jpeg", "GIFTS"),
        new Product("Gift 3", "15\u20ac", "images/giftfinal.jpeg", "GIFTS"),
        new Product("Gift 4", "50\u20ac", "images/gift4.jpeg", "GIFTS"),
        new Product("Gift 5", "50\u20ac", "images/gifti2.jpeg", "GIFTS"),
        new Product("Gift 6", "50\u20ac", "images/gifti1.jpeg", "GIFTS"),
        new Product("Gift 7", "10\u20ac", "images/knotpillow.jpeg", "GIFTS"),
        new Product("Gift 8", "30\u20ac", "images/giftfinal.jpeg", "GIFTS"),
        new Product("Gift 9", "40\u20ac", "images/giftfinal1.jpeg", "GIFTS")
    ]
}



// Loop through each JSON item
$.each(flowers.products, function (index, item) {
    // Create and append HTML tags filled out with the data
    $("#flowers-container").append(
      $("<div>")
        .attr("class", "product")
        .append(
          $("<div>")
            .attr("class", "product-header")
            .append($("<a>")
              .click(function () {
                localStorage.setItem('prod', JSON.stringify(item));
              })
              .attr("href", "SingleProduct.html")
              .append($("<img>")
                .attr("src", item.image)
              )
            ),
          $("<div>")
            .attr("class", "product-footer")
            .append(
              $("<a>")
                .click(function () {
                  localStorage.setItem('prod', JSON.stringify(item));
                })
                .attr("href", "SingleProduct.html?")
                .append(
                  $("<h3>").text(item.title))
            )
            .append($("<h4>").text(item.price))
            .append(
              $("<button>", {
                attr: "btn",
                text: "ADD TO CART",
                click: function () {
                  if (!exists(item.title)) {
                    $("#cartList").append(
                      $("<button>")
                        .attr("id", "btn" + index)
                        .click(function () { removeItem("btn" + index) })
                        .append($("<i>").attr("class", "fas fa-times")),
                      $("<dt>").text(item.title),
                      $("<dd>").text('x1').attr('class', 'inline'),
                      $("<dd>").text(parseFloat(item.price.slice(0, -1)).toFixed(2) + '\u20ac')
                    )
                  }
                  else {
                    calcQuantity(item.title, item.price);
                  }
                  calcTotal();
                  if (document.getElementById("newTotal").innerHTML != "") {
                    document.getElementById("newTotal").innerHTML = " = " + (document.getElementById("totalPrice").innerHTML.slice(0, -1) - document.getElementById("discount").innerHTML.slice(3, -1)).toString() + "\u20ac"
                  }
                }
              })
            )
        )
    );
  });
  
  $.each(gifts.products, function (index, item) {
    // Create and append HTML tags filled out with the data
    $("#gifts-container").append(
      $("<div>")
        .attr("class", "product")
        .append(
          $("<div>")
            .attr("class", "product-header")
            .append($("<a>")
              .click(function () {
                localStorage.setItem('prod', JSON.stringify(item));
              })
              .attr("href", "SingleProduct.html?")
              .append($("<img>")
                .attr("src", item.image)
              )
            ),
          $("<div>")
            .attr("class", "product-footer")
            .append($("<a>")
              .click(function () {
                localStorage.setItem('prod', JSON.stringify(item));
              })
              .attr("href", "SingleProduct.html?")
              .append($("<h3>").text(item.title))
            )
            .append($("<h4>").text(item.price))
            .append(
              $("<button>", {
                attr: "btn",
                text: "ADD TO CART",
                click: function () {
                  if (!exists(item.title)) {
                    $("#cartList").append(
                      $("<button>")
                        .attr("id", "btn" + index)
                        .click(function () { removeItem("btn" + index) })
                        .append($("<i>").attr("class", "fas fa-times")),
                      $("<dt>").text(item.title),
                      $("<dd>").text('x1').attr('class', 'inline'),
                      $("<dd>").text(parseFloat(item.price.slice(0, -1)).toFixed(2) + '\u20ac')
                    )
                  }
                  else {
                    calcQuantity(item.title, item.price);
                  }
                  calcTotal();
                  if (document.getElementById("newTotal").innerHTML != "") {
                    document.getElementById("newTotal").innerHTML = " = " + (document.getElementById("totalPrice").innerHTML.slice(0, -1) - document.getElementById("discount").innerHTML.slice(3, -1)).toString() + "\u20ac"
                  }
                }
              })
            )
        )
    );
  });
  
  
  
  function CartProd(title, quantity, price) {
    Product.call(this, title, price);
    this.quantity = quantity;
  }
  
  var cart = JSON.parse(sessionStorage.getItem('cart'));
  
  $.each(cart, function (index, item) {
    $("#cartList").append(
      $("<button>")
        .attr("id", "btn" + index)
        .click(function () { removeItem("btn" + index) })
        .append($("<i>").attr("class", "fas fa-times")),
      $("<dt>").text(item.title),
      $("<dd>").text(item.quantity).attr('class', 'inline'),
      $("<dd>").text(item.price)
    )
  });
  calcTotal();
  
  function passCart() {
    const cart = [];
  
    var cartList = document.getElementById("cartList");
    var titles = cartList.getElementsByTagName("dt");
    var quantities_prices = cartList.getElementsByTagName("dd");
  
    var ddIndex = 0;
    for (let i = 0; i < titles.length; i++) {
      var product = new CartProd(titles[i].innerHTML, quantities_prices[ddIndex].innerHTML, quantities_prices[ddIndex + 1].innerHTML);
      cart.push(product);
      ddIndex += 2;
    }
  
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }
  
  function removeItem(elementId) {
    $("#" + elementId).next().remove();
    $("#" + elementId).next().remove();
    $("#" + elementId).next().remove();
    $("#" + elementId).remove();
    calcTotal();
    if (document.getElementById("newTotal").innerHTML != "") {
      document.getElementById("newTotal").innerHTML = " = " + (document.getElementById("totalPrice").innerHTML.slice(0, -1) - document.getElementById("discount").innerHTML.slice(3, -1)).toString() + "\u20ac"
    }
  }
  
  function calcQuantity(title, price) {
    var cartList = document.getElementById("cartList").getElementsByTagName("dt");
  
    for (let i = 0; i < cartList.length; i++) {
      if (cartList[i].innerHTML == title) {
  
        let quantity = cartList[i].nextElementSibling;
        quantity.innerHTML = 'x' + (parseInt(quantity.innerHTML.substring(1)) + 1).toString();
  
        let newPrice = quantity.nextElementSibling;
        newPrice.innerHTML = (parseFloat(price.slice(0, -1)) * parseInt(quantity.innerHTML.substring(1))).toFixed(2) + '\u20ac';
  
        break;
      }
    }
  };
  
  function exists(title) {
    var cartList = document.getElementById("cartList").getElementsByTagName("dt");
  
    for (let i = 0; i < cartList.length; i++) {
      if (cartList[i].innerHTML == title) {
        return true;
      }
    }
  
    return false;
  };
  
  function calcTotal() {
    var cartList = document.getElementById("cartList").getElementsByTagName("dd");
    var total = 0;
  
    for (let i = 0; i < cartList.length; i++) {
      if (i % 2 == 1) {
        total += parseFloat(cartList[i].innerHTML.slice(0, -1))
      }
    }
  
    document.getElementById("totalPrice").innerHTML = total.toFixed(2).toString() + "\u20ac"
  };
  
  window.onbeforeunload = function () {
    passCart();
  };
  
  function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  };
  
  var checkoutClicked;
  
  $("#checkout").click(function () {
    checkoutClicked = localStorage.getItem("checkoutClicked");
  
    if (checkoutClicked == null) {
      checkoutClicked = "false";
    }
  
    if (checkoutClicked == "false") {
      localStorage.setItem("checkoutClicked", "true");
  
      let rewardPrc = random(5, 25);
      let oldTotal = document.getElementById("totalPrice").innerHTML.slice(0, -1);
      let reward = oldTotal * rewardPrc / 100;
      let newTotal = oldTotal - reward;
  
      $("#discount").text(" - " + reward + "\u20ac");
      $("#newTotal").text(" = " + newTotal + "\u20ac");
    }
  })





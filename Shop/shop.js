function Product(title, price, image, category) {
    this.title = title;
    this.price = price;
    this.image = image;
    this.category = category;
}

var flowers = {
    "products": [
        new Product("Flower 1", "20\u20ac", "images/lulja1.jpeg", "FLOWER"),
        new Product("Flower 2", "25\u20ac", "images/lulja2.jpeg", "FLOWER"),
        new Product("Flower 3", "23\u20ac", "images/lulja3.jpeg", "FLOWER"),
        new Product("Flower 4", "20\u20ac", "images/lulja4.jpeg", "FLOWER"),
        new Product("Flower 5", "30\u20ac", "images/lulja5.jpeg", "FLOWER"),
        new Product("Flower 6", "25\u20ac", "images/lulja6.jpeg", "FLOWER"),
        new Product("Flower 7", "22\u20ac", "images/lulja7.jpeg", "FLOWER"),
        new Product("Flower 8", "25\u20ac", "images/lulja8.jpeg", "FLOWER"),
        new Product("Flower 9", "25\u20ac", "images/lulja9.jpeg", "FLOWER"),

    ]
}

var gifts = {
    "products": [
        new Product("Gift 1", "50\u20ac", "images/gift1.jpeg", "GIFTS"),
        new Product("Gift 2", "15\u20ac", "images/earings.jpeg", "GIFTS"),
        new Product("Gift 3", "15\u20ac", "images/candles.jpeg", "GIFTS"),
        new Product("Gift 4", "50\u20ac", "images/gift4.jpeg", "GIFTS"),
        new Product("Gift 5", "50\u20ac", "images/gift3.jpeg", "GIFTS"),
        new Product("Gift 6", "50\u20ac", "images/gift5.jpeg", "GIFTS"),
        new Product("Gift 7", "10\u20ac", "images/knotpillow.jpeg", "CGIFTS"),
        new Product("Gift 8", "10\u20ac", "images/bookmark.jpeg", "GIFTS"),
        new Product("Gift 9", "\u20ac", "images/gift2.jpeg", "GIFTS")
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
document.addEventListener("DOMContentLoaded", function () {
    var cartItemsDiv = document.querySelector(".cart-items");
    var cart = JSON.parse(localStorage.getItem("cart") || "[]");
    function displayCart() {
        cartItemsDiv.innerHTML = "";
        cart.forEach(function (product, index) {
            cartItemsDiv.innerHTML += "\n                  <div class=\"cart-item\">\n                      <img src=\"".concat(product.image, "\" alt=\"\">\n                      <h3>").concat(product.title, "</h3>\n                      <p>Price: Rs. ").concat(product.price, "</p>\n                      <button class=\"removeFromCart\" onclick=\"removeFromCart(").concat(index, ")\">Remove</button>\n                  </div>\n              ");
        });
    }
    window.removeFromCart = function (index) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCart();
    };
    displayCart();
});


document.addEventListener("DOMContentLoaded", function () {
    const cartItemsDiv = document.querySelector(".cart-items") as HTMLDivElement;
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    function displayCart() {
        cartItemsDiv.innerHTML = "";
        cart.forEach((product: any, index: number) => {
            cartItemsDiv.innerHTML += `
                  <div class="cart-item">
                      <img src="${product.image}" alt="">
                      <h3>${product.title}</h3>
                      <p>Price: Rs. ${product.price}</p>
                      <button class="removeFromCart" onclick="removeFromCart(${index})">Remove</button>
                  </div>
              `;
        });
    }

    (window as any).removeFromCart = function (index: number) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCart();
    };

    displayCart();
});

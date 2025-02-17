
document.addEventListener("DOMContentLoaded", async function () {
    const productDiv = document.querySelector(".product") as HTMLDivElement;
    const categoryListDiv = document.querySelector(
        ".CategoryList"
    ) as HTMLDivElement;
    let allCategories: string[] = [];

    async function displayProducts(selectedCategories: string[] = []) {
        productDiv.innerHTML = "";
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();

        products.forEach((product: any) => {
            if (!allCategories.includes(product.category)) {
                categoryListDiv.innerHTML += `
                      <label>
                          <input type="checkbox" onclick='filterByCategory()' value="${product.category}"> ${product.category}
                      </label>
                  `;
                allCategories.push(product.category);
            }

            if (selectedCategories.length === 0) {
                selectedCategories = allCategories;
            }

            if (selectedCategories.includes(product.category)) {
                productDiv.innerHTML += `
                      <div class="productItems">
                          <img src="${product.image}" alt="">
                          <h4>${product.category}</h4>
                          <p>Price: Rs. ${product.price} | Rating: ${product.rating.rate}</p>
                          <h3>${product.title}</h3>
                          <button class="addToCart" onclick="addToCart(${product.id}, '${product.title}', '${product.image}', ${product.price})">Add to Cart</button>
                      </div>
                  `;
            }
        });
    }

    (window as any).filterByCategory = function () {
        const checkedInputs = document.querySelectorAll(
            "input[type='checkbox']:checked"
        );
        const selectedCategories = Array.from(checkedInputs).map(
            (input) => (input as HTMLInputElement).value
        );
        displayProducts(selectedCategories);
    };

    (window as any).addToCart = function (
        id: number,
        title: string,
        image: string,
        price: number
    ) {
        let cart = JSON.parse(localStorage.getItem("cart") || "[]");
        const product = { id, title, image, price };

        if (!cart.some((item: any) => item.id === id)) {
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
            alert("Added to cart!");
        } else {
            alert("This item is already in your cart.");
        }
    };

    displayProducts();
});

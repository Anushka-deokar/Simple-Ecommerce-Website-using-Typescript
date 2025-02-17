var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
document.addEventListener("DOMContentLoaded", function () {
    return __awaiter(this, void 0, void 0, function () {
        function displayProducts() {
            return __awaiter(this, arguments, void 0, function (selectedCategories) {
                var response, products;
                if (selectedCategories === void 0) { selectedCategories = []; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            productDiv.innerHTML = "";
                            return [4 /*yield*/, fetch("https://fakestoreapi.com/products")];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2:
                            products = _a.sent();
                            products.forEach(function (product) {
                                if (!allCategories.includes(product.category)) {
                                    categoryListDiv.innerHTML += "\n                      <label>\n                          <input type=\"checkbox\" onclick='filterByCategory()' value=\"".concat(product.category, "\"> ").concat(product.category, "\n                      </label>\n                  ");
                                    allCategories.push(product.category);
                                }
                                if (selectedCategories.length === 0) {
                                    selectedCategories = allCategories;
                                }
                                if (selectedCategories.includes(product.category)) {
                                    productDiv.innerHTML += "\n                      <div class=\"productItems\">\n                          <img src=\"".concat(product.image, "\" alt=\"\">\n                          <h4>").concat(product.category, "</h4>\n                          <p>Price: Rs. ").concat(product.price, " | Rating: ").concat(product.rating.rate, "</p>\n                          <h3>").concat(product.title, "</h3>\n                          <button class=\"addToCart\" onclick=\"addToCart(").concat(product.id, ", '").concat(product.title, "', '").concat(product.image, "', ").concat(product.price, ")\">Add to Cart</button>\n                      </div>\n                  ");
                                }
                            });
                            return [2 /*return*/];
                    }
                });
            });
        }
        var productDiv, categoryListDiv, allCategories;
        return __generator(this, function (_a) {
            productDiv = document.querySelector(".product");
            categoryListDiv = document.querySelector(".CategoryList");
            allCategories = [];
            window.filterByCategory = function () {
                var checkedInputs = document.querySelectorAll("input[type='checkbox']:checked");
                var selectedCategories = Array.from(checkedInputs).map(function (input) { return input.value; });
                displayProducts(selectedCategories);
            };
            window.addToCart = function (id, title, image, price) {
                var cart = JSON.parse(localStorage.getItem("cart") || "[]");
                var product = { id: id, title: title, image: image, price: price };
                if (!cart.some(function (item) { return item.id === id; })) {
                    cart.push(product);
                    localStorage.setItem("cart", JSON.stringify(cart));
                    alert("Added to cart!");
                }
                else {
                    alert("This item is already in your cart.");
                }
            };
            displayProducts();
            return [2 /*return*/];
        });
    });
});

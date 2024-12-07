const products = [
    { name: "Smartphone", price: 299, category: "Electronics", img: "https://tse4.mm.bing.net/th?id=OIP.OzKCrUatmdgOmI6hS7QiZQHaHa&pid=Api&P=0&h=180" },
    { name: "Headphones", price: 150, category: "Electronics", img: "https://tse3.mm.bing.net/th?id=OIP.3o2tPUP5QY8u1U-YglaWcAHaHa&pid=Api&P=0&h=180" },
    { name: "Wrist Watch", price: 90, category: "Accessories", img: "https://img.lovepik.com/free-png/20210928/lovepik-rhino-modeling-smart-watch-png-image_401775421_wh1200.png" },
    { name: "Laptop", price: 690, category: "Electronics", img: "https://lukepeters.me/uploads/laptop-jpeg-vs-webp.jpg" },
    { name: "Backpack", price: 60, category: "Accessories", img: "https://images.meesho.com/images/products/126068927/dkfbu_512.webp" },
    { name: "Camera", price: 250, category: "Electronics", img: "https://tse4.mm.bing.net/th?id=OIP.cuBcZpTjLS8cX1s-a-RVSwHaFh&pid=Api&P=0&h=180" },
    { name: "Shoes", price: 200, category: "Fashion", img: "https://inspiration.garden/content/images/2023/08/shoes.webp" },
    { name: "Sunglasses", price: 30, category: "Accessories", img: "https://tse3.mm.bing.net/th?id=OIP.0g4DoZvvGbDLGcPeFSImMQHaE5&pid=Api&P=0&h=180" },
    { name: "Smart TV", price: 700, category: "Electronics", img: "https://tse1.mm.bing.net/th?id=OIP.l4uAXlHXN_mHUNYGYT-x5gHaEK&pid=Api&P=0&h=180" },
    { name: "Gaming Console", price: 500, category: "Electronics", img: "https://tse2.mm.bing.net/th?id=OIP.ziDAuIOZqhu7pJNj6KBUBQHaET&pid=Api&P=0&h=180" },
    { name: "Tablet", price: 550, category: "Electronics", img: "https://tse2.mm.bing.net/th?id=OIP.6wlY4ikvpRoMNq8eA-cq8wHaE8&pid=Api&P=0&h=180" },
    { name: "Blender", price: 300, category: "Home Appliances", img: "https://d3vk3ilzkajryp.cloudfront.net/yflh-webp/products/blendlabpro2/grey/carousel-1-warranty.webp" },
    { name: "Coffee Maker", price: 290, category: "Home Appliances", img: "https://tse1.mm.bing.net/th?id=OIP.TEvzI7V5hgKekOiOXThzPQHaHa&pid=Api&P=0&h=180" },
    { name: "T-shirt", price: 80, category: "Fashion", img: "https://tse1.mm.bing.net/th?id=OIP.tlyMams84FyxlL_Y2fOlNwHaHa&pid=Api&P=0&h=180" },
    { name: "Jeans", price: 75, category: "Fashion", img: "https://tse4.mm.bing.net/th?id=OIP.9pcLjsRyQuNZPiAHbWI-EQHaE6&pid=Api&P=0&h=180" },
    { name: "Earrings", price: 20, category: "Accessories", img: "https://tse4.mm.bing.net/th?id=OIP.dnYJWVSvCCDtdrP2KGFOxQHaGP&pid=Api&P=0&h=180" },
    { name: "Cap", price: 5, category: "Accessories", img: "https://tse2.mm.bing.net/th?id=OIP._1E_nxbuGmBn3fJMKXIbDgHaJ4&pid=Api&P=0&h=180" },
    { name: "Desk Lamp", price: 170, category: "Home Appliances", img: "https://tse1.mm.bing.net/th?id=OIP.7UKJUuVVKQu-XsMK2UdBNwHaHa&pid=Api&P=0&h=180" },
    { name: "Gaming Mouse", price: 100, category: "Electronics", img: "https://tse1.mm.bing.net/th?id=OIP.-AWZ40eAglVCok6OHEOtoAHaHa&pid=Api&P=0&h=180" },
    { name: "Wireless Charger", price: 160, category: "Electronics", img: "https://tse3.mm.bing.net/th?id=OIP.e-VJTMpdQfJM6pJkIWEC3AAAAA&pid=Api&P=0&h=180" }
];

function generateRandomReviews() {
    const reviews = ["Excellent!", "Good product!", "Value for money.", "Highly recommended!", "Not bad."];
    return reviews[Math.floor(Math.random() * reviews.length)];
}

function displayProducts() {
    const productGrid = document.getElementById("product-grid");
    productGrid.innerHTML = "";

    products.forEach((product, index) => {
        productGrid.innerHTML += `
            <div class="product-card">
                <img src="${product.img}" alt="${product.name}">
                <div class="info">
                    <h4>${product.name}</h4>
                    <div class="price">$${product.price.toFixed(2)}</div>
                    <div class="reviews">${generateRandomReviews()} | ⭐⭐⭐⭐</div>
                    <button class="btn" onclick="addToCart(${index})">Add to Cart</button>
                </div>
            </div>`;
    });
}

function addToCart(index) {
    const product = products[index];
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`"${product.name}" has been added to your cart!`);
}

document.addEventListener("DOMContentLoaded", displayProducts);
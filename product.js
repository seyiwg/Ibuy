const products = [
    { name: "Smartphone X", price: "$299", image: "Images/Smart_phone.jpg" },
    { name: "Wireless Earbuds", price: "$59", image: "Images/Airpod.jpg" },
    { name: "Smartwatch Pro", price: "$199", image: "Images/Smart_Watch.jpg" },
    { name: "Laptop Air", price: "$999", image: "Images/Laptop.jpg" },
    { name: "Tablet Max", price: "$399", image: "Images/Tab.jpg" },
    { name: "Bluetooth Speaker", price: "$79", image: "Images/Bluetooth.jpg" },
    { name: "Gaming Console", price: "$499", image: "Images/Game console.jpg" },
    { name: "Wireless Charger", price: "$29", image: "Images/Wireless.jpg" },
    { name: "VR Headset", price: "$349", image: "Images/VAR.jpg" },
    { name: "Smart TV", price: "$799", image: "Images/Smart TV.jpg" },
    { name: "Noise Cancelling Headphones", price: "$159", image: "Images/Headphone.jpg" },
    { name: "Fitness Tracker", price: "$89", image: "Images/Fitness.jpg" },
    { name: "Portable SSD", price: "$129", image: "Images/SSD.jpg" },
    { name: "Drone Pro", price: "$699", image: "Images/Dron.jpg" },
    { name: "Smart Home Hub", price: "$149", image: "Images/Home hub.jpg" },
    { name: "Desktop PC", price: "$1199", image: "Images/Home laptop.jpg" },
    { name: "Mechanical Keyboard", price: "$109", image: "Images/Keyboard.jpg" },
    { name: "Gaming Mouse", price: "$49", image: "Images/Mouse.jpg" },
    { name: "4K Action Cam", price: "$249", image: "Images/Cam.jpg" },
    { name: "E-reader", price: "$139", image: "Images/E reader.jpg" }
  ];
  
  const productList = document.getElementById("product-list");
  
  products.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <button onclick="addToCart(${index})" class="btn">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
  
  function addToCart(index) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = products[index];
  
    const existing = cart.find(p => p.name === item.name);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item.name} added to cart!`);
  }
  
  const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.toLowerCase();
  document.querySelectorAll(".product-card").forEach(card => {
    const name = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = name.includes(searchText) ? "block" : "none";
  });
});

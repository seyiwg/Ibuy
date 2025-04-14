const products = [
    {
      name: "Smartphone X",
      price: "$299",
      image: "Images/Smart_phone.jpg"
    },
    {
      name: "Wireless Earbuds",
      price: "$59",
      image: "Images/Airpod.jpg"
    },
    {
      name: "Smartwatch Pro",
      price: "$199",
      image: "Images/Smart_Watch.jpg"
    },
    {
      name: "Laptop Air",
      price: "$999",
      image: "Images/Laptop.jpg"
    }
  ];
  
  const productList = document.getElementById("product-list");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <p>${product.price}</p>
    <a href="#" class="btn">Buy Now</a>
  `;
  productList.appendChild(card);
});


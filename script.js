let selectedProduct = {};

fetch("/products")
  .then(res => res.json())
  .then(data => {
    const productsDiv = document.getElementById("products");

    data.forEach(product => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>₹${product.price}</strong></p>
        <button onclick="showForm('${product.name}', ${product.price})">
          Buy Now
        </button>
      `;

      productsDiv.appendChild(card);
    });
  });

function showForm(name, price) {
  selectedProduct = { name, price };
  document.getElementById("orderForm").style.display = "block";
}

function submitOrder() {
  const name = document.getElementById("customerName").value;
  const phone = document.getElementById("customerPhone").value;
  const address = document.getElementById("customerAddress").value;

  fetch("/buy", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      customerName: name,
      phone: phone,
      address: address,
      product: selectedProduct.name,
      price: selectedProduct.price
    })
  })
    .then(res => res.json())
    .then(data => {
      alert(data.message);
    });
}
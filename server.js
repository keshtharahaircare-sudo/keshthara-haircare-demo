const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// Test API
app.get("/buy", (req, res) => {
  res.json({ message: "GET works" });
});
// VIEW ORDERS (for company demo)
app.get("/orders", (req, res) => {
  res.json(orders);
});

app.post("/buy", (req, res) => {
  const order = {
    customerName: req.body.customerName,
    phone: req.body.phone,
    address: req.body.address,
    product: req.body.product,
    price: req.body.price,
    date: new Date()
  };

  orders.push(order);

  res.json({
    message: "Order placed successfully",
    order: order
  });
});


// PRODUCT DATA
const products = [
  {
    id: 1,
    name: "Keshthara Herbal Hair Oil",
    description: "Reduces hair fall and improves hair growth",
    price: 800
  },
  {
    id: 2,
    name: "Keshthara Herbal Hair Gel",
    description: "Non-sticky gel for healthy shine",
    price: 800
  },
  {
    id: 3,
    name: "Oil + Gel Combo",
    description: "Complete hair care combo pack",
    price: 1600
  }
];
// TEMP ORDER STORAGE
const orders = [];

// GET PRODUCTS API
app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
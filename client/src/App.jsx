import React, { useState, useEffect } from "react";
import "./App.css";

function Header() {
  return (
    <header>
      <h1>Amazon Product Store</h1>
    </header>
  );
}

function ProductCard(props) {
  useEffect(() => {
    console.log("Product details updated");
  }, [props.quantity, props.color, props.city]);

  return (
    <div className="product-card">
      <h2>{props.name}</h2>
      <p>Price: ₹{props.price}</p>

      <label>Colour: </label>
      <select
        value={props.color}
        onChange={(e) => props.setColor(e.target.value)}
      >
        <option value="Black">Black</option>
        <option value="Blue">Blue</option>
        <option value="White">White</option>
      </select>

      <p>Selected Colour: {props.color}</p>

      <label>Delivery City: </label>
      <input
        type="text"
        value={props.city}
        onChange={(e) => props.setCity(e.target.value)}
      />

      <p>Delivery to: {props.city}</p>

      <button onClick={() => props.setQuantity(props.quantity + 1)}>
        Add to Cart
      </button>

      <button
        onClick={() => props.setQuantity(props.quantity - 1)}
        disabled={props.quantity === 0}
      >
        Remove One
      </button>

      <button onClick={() => props.setQuantity(0)}>
        Reset Cart
      </button>

      <h3>Quantity: {props.quantity}</h3>
      <h3>Total: ₹{props.quantity * props.price}</h3>

      <p>
        {props.quantity === 0
          ? "Cart is empty"
          : "Product added to cart"}
      </p>
    </div>
  );
}

function Footer() {
  return <footer>© 2026 Amazon Product Store</footer>;
}

function App() {
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [deliveryCity, setDeliveryCity] = useState("Coimbatore");
  const [showProduct, setShowProduct] = useState(true);

  return (
    <div>
      <Header />

      <main>
        <button onClick={() => setShowProduct(!showProduct)}>
          Show/Hide Product
        </button>

        {showProduct && (
          <ProductCard
            name="Wireless Mouse"
            price={499}
            quantity={quantity}
            color={selectedColor}
            city={deliveryCity}
            setQuantity={setQuantity}
            setColor={setSelectedColor}
            setCity={setDeliveryCity}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
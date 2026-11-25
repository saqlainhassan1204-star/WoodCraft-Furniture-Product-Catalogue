
import { useState, useEffect } from "react";
import ProductCard from "./Components/ProductCard";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <h2 className="message">Loading products...</h2>;
  }

  if (error) {
    return <h2 className="message">Error: {error}</h2>;
  }

  return (
    <div className="app">
      <header className="navbar">
        <h2>ShopEasy</h2>
        <p>Discover Amazing Products</p>
      </header>

      <main className="container">
        <h1>Our Products</h1>

        <div className="product-grid">
          {products.slice(0, 10).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;

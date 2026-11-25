
function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="product-info">
        <h3>{product.title}</h3>

        <p className="price">
          ${product.price}
        </p>

        <button className="buy-btn">
          View Product
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

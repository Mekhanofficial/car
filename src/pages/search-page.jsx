import { useLocation } from "react-router-dom";
import products from "./Products";

const SearchResultsPage = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("q") || "";

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product">
              <img src={product.img} alt={product.name} />
              <h2>{product.name}</h2>
              <p>${product.salePrice}</p>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;

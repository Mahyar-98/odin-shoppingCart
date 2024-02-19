import '../styles/Shop.css'
import { useEffect, useState } from "react";
import Product from "./Product";
import LoadingPage from "./LoadingPage";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const productList = products.map((product) => (
    <Product key={product.id} info={product} />
  ));

  return <>{loading ? <LoadingPage /> : (<>
  <h2 className="shop-heading">Our Products</h2>
  <div className='shop-items'>{productList}</div></>)}</>;
};

export default Shop;

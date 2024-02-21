import "../styles/AppLayout.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaGithub, FaShoppingCart } from "react-icons/fa";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import Thanks from "./Thanks";

const AppLayout = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch the data for the products from a fake store API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        const initialProducts = json.map((item) => ({
          ...item,
          price: item.price,
          cart: 0,
        }));
        setProducts(initialProducts);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  // Manages all the changes to the cart value of each product
  const handleAddToCart = (productId, cartValue) => {
    if (/^\d*$/.test(cartValue)) {
      setProducts((prevProducts) => {
        return prevProducts.map((product) => {
          return product.id === productId
            ? { ...product, cart: cartValue }
            : product;
        });
      });
    }
  };

  // Resets the cart value of all products to zero after clicking on checkout
  const handleCheckout = () => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        return { ...product, cart: 0 };
      });
    });
  };

  // The total number of items in the cart to be shown next to the cart icon on the header
  const cartNum = products.reduce((acc, product) => acc + product.cart, 0);

  // Takes the name parameter from the url and choose the related content accordingly
  const { name } = useParams();
  let content;
  switch (name) {
    case "shop":
      content = (
        <Shop
          products={products}
          loading={loading}
          handleAddToCart={handleAddToCart}
          handleCheckout={handleCheckout}
        />
      );
      break;
    case "cart":
      content = (
        <Cart
          products={products}
          handleAddToCart={handleAddToCart}
          handleCheckout={handleCheckout}
        />
      );
      break;
    case "thanks":
      content = <Thanks />;
      break;
    default:
      content = <Home />;
  }

  return (
    <div className="layout">
      <header>
        <Link to="/home">
          <h1>FakeShop</h1>
        </Link>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li className="cart-icon">
            <Link to="/cart">
              <FaShoppingCart />
            </Link>
            {cartNum === 0 ? null : <span className="cart-num">{cartNum}</span>}
          </li>
        </ul>
      </header>
      <main> {content} </main>
      <footer>
        <p>
          Check out my GitHub:{" "}
          <a
            href="https://github.com/Mahyar-98"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </p>
      </footer>
    </div>
  );
};

export default AppLayout;

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
  const [navOpen, setNavOpen] = useState(false);

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
        <div>
          <Link to="/home">
            <h1>FakeShop</h1>
          </Link>
          <button
            id="nav-toggle"
            aria-label="Toggle navigation"
            onClick={() => setNavOpen((prevState) => !prevState)}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
          <nav className="nav">
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
                {cartNum === 0 ? null : (
                  <span className="cart-num">{cartNum}</span>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className={`side-nav ${navOpen ? "show" : ""}`}>
        <nav>
          <h2>FakeShop</h2>
          <ul>
            <li>
              <Link to="/home">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                </svg>
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link to="/shop">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                </svg>
                <p>Shop</p>
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                </svg>
                <p>Cart</p>
                {cartNum === 0 ? null : (
                  <span className="side-cart-num">{cartNum}</span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {navOpen && (
        <div className="overlay" onClick={() => setNavOpen(false)}></div>
      )}
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

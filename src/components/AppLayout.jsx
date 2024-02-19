import "../styles/AppLayout.css";
import { Link, useParams } from "react-router-dom";
import { FaGithub, FaShoppingCart } from "react-icons/fa";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import Thanks from "./Thanks";
import { useState } from "react";

const AppLayout = () => {
  const [products, setProducts] = useState([]);

  const handleProductsChange = (newProducts) => {
    setProducts(newProducts)
  }

  const { name } = useParams();
  let content;
  switch (name) {
    case "shop":
      content = <Shop products={products} handleProductsChange={handleProductsChange}/>;
      break;
    case "cart":
      content = <Cart products={products}/>;
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
          <li>
            <Link to="/cart">
              <FaShoppingCart />
            </Link>
          </li>
        </ul>
      </header>
      <main> {content} </main>
      <footer>
        <p>
          Check out my GitHub:{" "}
          <a href="https://github.com/Mahyar-98">
            <FaGithub />
          </a>
        </p>
      </footer>
    </div>
  );
};

export default AppLayout;

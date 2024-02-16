import "../styles/AppLayout.css";
import { Link, useParams } from "react-router-dom";
import { FaGithub, FaShoppingCart } from "react-icons/fa";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import Thanks from "./Thanks";

const AppLayout = () => {
  const { name } = useParams();
  let content;
  switch (name) {
    case "home":
      content = <Home />;
      break;
    case "shop":
      content = <Shop />;
      break;
    case "cart":
      content = <Cart />;
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
        <h1>Fake Shopping Website</h1>
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

import '../styles/AppLayout.css'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const AppLayout = ({ content }) => {
  return (
    <div className="layout">
      <header>
        <h1>Fake Shopping Website</h1>
        <ul>
          <Link to="home">Home</Link>
          <Link to="shop">Shop</Link>
          <Link to="cart">Cart</Link>
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

AppLayout.propTypes = {
    content: PropTypes.node.isRequired
}

export default AppLayout;

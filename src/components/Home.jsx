import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h2>Welcome to your favorite FakeShop!</h2>
        <p>
          Explore our curated selection of premium products, from fashion to
          tech, all in one place.
        </p>
        <button>Shop Now</button>
      </div>
      <div className="home-content">
        <div className="home-col">
          <h3>Discover Quality Products</h3>
          <p>
            From stylish apparel to innovative gadgets, we offer a diverse range
            of items handpicked for their quality and uniqueness.
          </p>
        </div>
        <div className="home-col">
          <h3>Shop with confidence</h3>
          <p>
            We understand the importance of trust when shopping online.
            That&apos;s why we prioritize your security and satisfaction.{" "}
          </p>
        </div>
        <div className="home-col">
          <h3>Start Exploring</h3>
          <p>
            Ready to elevate your shopping experience? Dive into our virtual
            aisles and discover the perfect products to complement your
            lifestyle. Happy shopping!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

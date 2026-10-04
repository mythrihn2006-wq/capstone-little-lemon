import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">Chicago</p>

          <h1>Little Lemon</h1>

          <h2>Mediterranean restaurant</h2>

          <p className="hero-description">
            We are a family-owned Mediterranean restaurant focused on
            traditional recipes served with a modern twist.
          </p>

          <Link className="primary-button" to="/booking">
            Reserve a Table
          </Link>
        </div>

        <div className="hero-image-wrapper">
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80"
            alt="Fresh Mediterranean food served at Little Lemon"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
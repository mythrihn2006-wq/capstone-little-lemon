function About() {
  return (
    <section id="about" className="about section">
      <div className="container about-grid">
        <div>
          <p className="section-label">Our story</p>

          <h2>Little Lemon</h2>
          <h3>Chicago</h3>

          <p>
            Little Lemon is a family-owned Mediterranean restaurant inspired
            by traditional recipes and a passion for bringing people together
            around great food.
          </p>

          <p>
            Our menu combines familiar Mediterranean flavors with a modern
            approach while preserving the warmth and hospitality of a
            neighborhood restaurant.
          </p>
        </div>

        <div className="about-images">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80"
            alt="Interior of the Little Lemon restaurant"
          />

          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80"
            alt="Little Lemon restaurant dining experience"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
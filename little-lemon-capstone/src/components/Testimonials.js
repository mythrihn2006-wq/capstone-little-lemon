const reviews = [
  {
    id: 1,
    name: "Sophia",
    rating: "★★★★★",
    text: "Fantastic food and a warm atmosphere. The Greek salad was excellent.",
  },
  {
    id: 2,
    name: "Daniel",
    rating: "★★★★★",
    text: "The service was quick and friendly. I will definitely come back.",
  },
  {
    id: 3,
    name: "Emma",
    rating: "★★★★★",
    text: "Fresh ingredients, beautiful presentation and an excellent experience.",
  },
  {
    id: 4,
    name: "Michael",
    rating: "★★★★☆",
    text: "A great Mediterranean restaurant with an inviting and modern atmosphere.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <p className="section-label">Testimonials</p>
        <h2>What our customers say</h2>

        <div className="testimonial-grid">
          {reviews.map((review) => (
            <article className="testimonial-card" key={review.id}>
              <span className="rating" aria-label={`${review.rating} rating`}>
                {review.rating}
              </span>

              <div className="customer">
                <div className="customer-avatar">
                  {review.name.charAt(0)}
                </div>

                <strong>{review.name}</strong>
              </div>

              <p>{review.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
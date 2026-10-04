const meals = [
  {
    id: 1,
    title: "Greek Salad",
    price: "$12.99",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
    description:
      "Fresh lettuce, peppers, olives and feta cheese finished with our house dressing.",
  },
  {
    id: 2,
    title: "Bruschetta",
    price: "$8.99",
    image:
      "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=900&q=80",
    description:
      "Grilled bread topped with garlic, tomatoes, olive oil and fresh herbs.",
  },
  {
    id: 3,
    title: "Lemon Dessert",
    price: "$6.50",
    image:
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=900&q=80",
    description:
      "Our signature lemon dessert prepared daily using our traditional family recipe.",
  },
];

function Specials() {
  return (
    <section id="menu" className="specials section">
      <div className="container">
        <div className="section-heading-row">
          <div>
            <p className="section-label">Our menu</p>
            <h2>This week's specials</h2>
          </div>

          <a className="secondary-button" href="#menu">
            Online Menu
          </a>
        </div>

        <div className="specials-grid">
          {meals.map((meal) => (
            <article className="meal-card" key={meal.id}>
              <img src={meal.image} alt={meal.title} />

              <div className="meal-content">
                <div className="meal-heading">
                  <h3>{meal.title}</h3>
                  <span>{meal.price}</span>
                </div>

                <p>{meal.description}</p>

                <a href="#menu" className="order-link">
                  Order a delivery →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specials;
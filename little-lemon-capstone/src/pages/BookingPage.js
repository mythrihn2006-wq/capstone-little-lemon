import BookingForm from "../components/BookingForm";

function BookingPage() {
  return (
    <section className="booking-page">
      <div className="booking-layout container">
        <div className="booking-intro">
          <p className="section-label">Reservations</p>

          <h1>Reserve a Table</h1>

          <h2>Little Lemon Chicago</h2>

          <p>
            Choose your preferred date, time and number of guests. We look
            forward to welcoming you to Little Lemon.
          </p>

          <div className="booking-info-card">
            <span>🍋</span>

            <div>
              <strong>Opening hours</strong>
              <p>Monday – Sunday</p>
              <p>5:00 PM – 10:00 PM</p>
            </div>
          </div>
        </div>

        <div className="booking-card">
          <h2>Table Reservation</h2>
          <BookingForm />
        </div>
      </div>
    </section>
  );
}

export default BookingPage;
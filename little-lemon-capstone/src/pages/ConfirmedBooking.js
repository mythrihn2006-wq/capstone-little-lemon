import { Link, useLocation } from "react-router-dom";

function ConfirmedBooking() {
  const location = useLocation();
  const booking = location.state;

  return (
    <section className="confirmation-page">
      <div className="confirmation-card">
        <div className="confirmation-icon">✓</div>

        <p className="section-label">Reservation confirmed</p>

        <h1>Your table is booked!</h1>

        <p>
          Thank you for choosing Little Lemon. We look forward to welcoming
          you.
        </p>

        {booking && (
          <div className="confirmation-details">
            <div>
              <span>Date</span>
              <strong>{booking.date}</strong>
            </div>

            <div>
              <span>Time</span>
              <strong>{booking.time}</strong>
            </div>

            <div>
              <span>Guests</span>
              <strong>{booking.guests}</strong>
            </div>

            <div>
              <span>Occasion</span>
              <strong>{booking.occasion}</strong>
            </div>
          </div>
        )}

        <Link className="primary-button" to="/">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default ConfirmedBooking;
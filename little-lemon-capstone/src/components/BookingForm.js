import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingSlot from "./BookingSlot";
import {
  initializeTimes,
  updateTimes,
  submitAPI,
} from "../utils/bookingApi";

function BookingForm() {
  const navigate = useNavigate();

  const [availableTimes, setAvailableTimes] = useState(initializeTimes());
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 2,
    occasion: "Birthday",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setAvailableTimes(updateTimes(formData.date));

    setFormData((current) => ({
      ...current,
      time: "",
    }));
  }, [formData.date]);

  const today = new Date().toISOString().split("T")[0];

  const validate = () => {
    const newErrors = {};

    if (!formData.date) {
      newErrors.date = "Please select a reservation date.";
    }

    if (!formData.time) {
      newErrors.time = "Please select an available time.";
    }

    if (
      !formData.guests ||
      Number(formData.guests) < 1 ||
      Number(formData.guests) > 10
    ) {
      newErrors.guests = "Guests must be between 1 and 10.";
    }

    if (!formData.occasion) {
      newErrors.occasion = "Please select an occasion.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setSubmitting(true);

    const success = await submitAPI(formData);

    setSubmitting(false);

    if (success) {
      navigate("/confirmed", {
        state: formData,
      });
    }
  };

  const isFormValid =
    formData.date &&
    formData.time &&
    Number(formData.guests) >= 1 &&
    Number(formData.guests) <= 10 &&
    formData.occasion;

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
      aria-label="Table reservation form"
      noValidate
    >
      <div className="form-group">
        <label htmlFor="res-date">Choose date</label>

        <input
          id="res-date"
          name="date"
          type="date"
          min={today}
          value={formData.date}
          onChange={handleChange}
          aria-invalid={Boolean(errors.date)}
          aria-describedby={errors.date ? "date-error" : undefined}
          required
        />

        {errors.date && (
          <span id="date-error" className="error-message">
            {errors.date}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="res-time">Choose time</label>

        <select
          id="res-time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          aria-invalid={Boolean(errors.time)}
          aria-describedby={errors.time ? "time-error" : undefined}
          required
        >
          <option value="">Select a time</option>

          {availableTimes.map((time) => (
            <BookingSlot key={time} time={time} />
          ))}
        </select>

        {errors.time && (
          <span id="time-error" className="error-message">
            {errors.time}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of guests</label>

        <input
          id="guests"
          name="guests"
          type="number"
          min="1"
          max="10"
          value={formData.guests}
          onChange={handleChange}
          aria-invalid={Boolean(errors.guests)}
          aria-describedby={errors.guests ? "guests-error" : undefined}
          required
        />

        {errors.guests && (
          <span id="guests-error" className="error-message">
            {errors.guests}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>

        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
          required
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Engagement">Engagement</option>
          <option value="Business">Business Dinner</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button
        className="primary-button booking-submit"
        type="submit"
        disabled={!isFormValid || submitting}
        aria-label="Make your reservation"
      >
        {submitting ? "Booking..." : "Make Your Reservation"}
      </button>
    </form>
  );
}

export default BookingForm;
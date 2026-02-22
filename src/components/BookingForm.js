import React, { useState } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ date: selectedDate });
  };

  const isFormValid = date && time && guests > 0 && occasion;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    const formData = { date, time, guests, occasion };
    submitForm(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", gap: "20px", maxWidth: "300px" }}
      aria-label="Booking Form"
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
        aria-required="true"
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        aria-required="true"
      >
        <option value="">Select a time</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        value={guests}
        min="1"
        max="10"
        onChange={(e) => setGuests(e.target.value)}
        required
        aria-required="true"
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
        aria-required="true"
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button
        type="submit"
        disabled={!isFormValid}
        aria-label="Submit booking form"
      >
        Book Now
      </button>
    </form>
  );
}

export default BookingForm;
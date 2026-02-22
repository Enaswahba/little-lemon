/* General improvements */
button {
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 6px;
  border: none;
  background-color: #495E57;
  color: white;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #333;
}

input, select {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box;
}

input:focus, select:focus {
  outline: 2px solid #495E57;
}

/* BookingForm */
.booking-form {
  max-width: 400px;
  margin: 0 auto;
  display: grid;
  gap: 15px;
}

.booking-form label {
  font-weight: 500;
}

.booking-form .form-row {
  display: flex;
  flex-direction: column;
}

/* Specials section */
.specials-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

/* CustomersSay / Testimonials */
.testimonials {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.testimonials .testimonial-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  background-color: #f9f9f9;
}

/* ConfirmedBooking */
.confirmed-booking {
  text-align: center;
  padding: 40px 20px;
}

.confirmed-booking h2 {
  color: #495E57;
  margin-bottom: 15px;
}

.confirmed-booking p {
  font-size: 18px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  header, footer {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }

  nav ul {
    flex-direction: column;
    gap: 10px;
  }
}
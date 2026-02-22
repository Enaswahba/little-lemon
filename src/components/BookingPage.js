import React from "react";
import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, dispatchTimes, submitForm }) {
  return (
    <main style={styles.container}>
      <h1 style={styles.heading}>Reserve a Table</h1>
      <BookingForm 
        availableTimes={availableTimes} 
        dispatchTimes={dispatchTimes} 
        submitForm={submitForm} 
      />
    </main>
  );
}

const styles = {
  container: { padding: "50px 20px", textAlign: "center" },
  heading: { fontSize: "32px", marginBottom: "30px", color: "#333" },
};

export default BookingPage;
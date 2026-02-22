import React from "react";

const testimonials = [
  { id: 1, name: "Alice", rating: 5, comment: "Amazing food and atmosphere!" },
  { id: 2, name: "Bob", rating: 4, comment: "Great service and delicious dishes." },
  { id: 3, name: "Charlie", rating: 5, comment: "A must-visit restaurant in Chicago!" },
];

function CustomersSay() {
  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>What Our Customers Say</h2>
      <div style={styles.cards}>
        {testimonials.map((t) => (
          <div key={t.id} style={styles.card}>
            <p style={styles.comment}>"{t.comment}"</p>
            <p style={styles.name}>- {t.name}</p>
            <p style={styles.rating}>{"★".repeat(t.rating)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  container: { padding: "50px 20px", backgroundColor: "#f2f2f2" },
  heading: { textAlign: "center", fontSize: "28px", marginBottom: "40px", color: "#333" },
  cards: { display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" },
  card: { backgroundColor: "#fff", padding: "20px", borderRadius: "10px", width: "250px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)", textAlign: "center" },
  comment: { fontSize: "14px", marginBottom: "10px", color: "#555" },
  name: { fontSize: "16px", fontWeight: "bold", color: "#222" },
  rating: { fontSize: "16px", color: "#f5a623" },
};

export default CustomersSay;
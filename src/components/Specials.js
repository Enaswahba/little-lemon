import React from "react";

const specialsData = [
  { id: 1, name: "Grilled Salmon", description: "Fresh salmon grilled to perfection with herbs and lemon.", price: "$25" },
  { id: 2, name: "Pasta Primavera", description: "Pasta with seasonal vegetables and creamy sauce.", price: "$18" },
  { id: 3, name: "Margherita Pizza", description: "Classic pizza with fresh mozzarella and basil.", price: "$15" },
];

function Specials() {
  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Our Specials</h2>
      <div style={styles.cards}>
        {specialsData.map((special) => (
          <div key={special.id} style={styles.card}>
            <h3 style={styles.name}>{special.name}</h3>
            <p style={styles.description}>{special.description}</p>
            <p style={styles.price}>{special.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  container: { padding: "50px 20px", backgroundColor: "#fffbe6" },
  heading: { textAlign: "center", fontSize: "28px", marginBottom: "40px", color: "#333" },
  cards: { display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" },
  card: { backgroundColor: "#fff", padding: "20px", borderRadius: "10px", width: "250px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)", textAlign: "center" },
  name: { fontSize: "20px", marginBottom: "10px", color: "#222" },
  description: { fontSize: "14px", marginBottom: "15px", color: "#555" },
  price: { fontSize: "16px", fontWeight: "bold", color: "#000" },
};

export default Specials;
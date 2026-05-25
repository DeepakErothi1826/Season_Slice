// import React from "react";


function App() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>🚧 Website Under Development</h1>
        <p style={styles.text}>
          Season Slice is currently under maintenance.
        </p>
        <p style={styles.subText}>
          Please check back soon.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
    color: "#fff",
    margin: 0,
    overflow: "hidden",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 999999,
    fontFamily: "Arial, sans-serif",
  },
  card: {
    textAlign: "center",
    padding: "30px",
  },
  heading: {
    fontSize: "3rem",
    marginBottom: "15px",
  },
  text: {
    fontSize: "1.3rem",
    marginBottom: "10px",
    color: "#cbd5e1",
  },
  subText: {
    fontSize: "1rem",
    color: "#94a3b8",
  },
};

export default App;
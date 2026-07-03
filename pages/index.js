export default function Home() {
  return (
    <div style={styles.container}>
      
      <h1 style={styles.title}>📊 Market Dashboard Pro</h1>

      <div style={styles.grid}>

        <div style={styles.card}>
          <h3>Bitcoin</h3>
          <h1>$0</h1>
          <p>Live Crypto</p>
        </div>

        <div style={styles.card}>
          <h3>Ethereum</h3>
          <h1>$0</h1>
          <p>Live Crypto</p>
        </div>

        <div style={styles.card}>
          <h3>BBCA</h3>
          <h1>Rp 0</h1>
          <p>Saham Indonesia</p>
        </div>

        <div style={styles.card}>
          <h3>AAPL</h3>
          <h1>$0</h1>
          <p>Saham US</p>
        </div>

      </div>

    </div>
  );
}

const styles = {
  container: {
    background: "#0b1220",
    color: "white",
    minHeight: "100vh",
    padding: "30px",
    fontFamily: "Arial"
  },

  title: {
    fontSize: "28px",
    marginBottom: "20px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px"
  },

  card: {
    background: "#111827",
    padding: "20px",
    borderRadius: "12px"
  }
};

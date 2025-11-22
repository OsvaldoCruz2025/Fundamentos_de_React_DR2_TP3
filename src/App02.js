export default function App() {
  return (
    <div style={styles.container}>
      <ColorBox color="#0e366c" />
    </div>
  );
}

function ColorBox({ color }) {
  return (
    <div
      style={{
        ...styles.box,
        backgroundColor: color,
      }}
    >
      <h2 style={styles.texto}>Cor atual: {color}</h2>
      <p style={styles.texto}>Esta é uma caixa colorida usando props!</p>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    fontFamily: "Arial",
  },

  box: {
    width: "300px",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    textAlign: "center",
    transition: "0.3s",
  },

  texto: {
    color: "white",
    fontWeight: "bold",
    textShadow: "0 1px 2px rgba(0,0,0,0.5)",
  },
};

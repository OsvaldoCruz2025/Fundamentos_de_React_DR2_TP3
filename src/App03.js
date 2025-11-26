export default function App() {
  return (
    <div style={styles.container}>
      <CompEstilizado
        estilo={{
          backgroundColor: "#4c6ef5",
          color: "white",
          padding: "20px",
          borderRadius: "20px",
          width: "300px",
          height: "150px",
          textAlign: "center",
          boxShadow: "0 10px 12px rgba(0,0,0,0.2)",
        }}
      />
    </div>
  );
}

function CompEstilizado({ estilo }) {
  return (
    <div style={{ ...estilo }}>
      <h2>Componente Estilizado</h2>
    </div>
  );
}

// Estilo apenas para centralizar o componente na tela
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#263238",
  },
};

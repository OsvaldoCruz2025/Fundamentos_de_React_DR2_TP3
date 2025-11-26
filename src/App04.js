export default function App() {
  return (
    <div style={styles.container}>
      <Mensagem
        dados={{
          titulo: "Tudo certo!",
          mensagem: "A operação foi concluída com sucesso.",
          tipo: "Sucesso",
        }}
      />

      <Mensagem
        dados={{
          titulo: "Atenção!",
          mensagem: "Há algo que você deve verificar.",
          tipo: "Alerta",
        }}
      />

      <Mensagem
        dados={{
          titulo: "Erro!",
          mensagem: "Ocorreu uma falha inesperada.",
          tipo: "Erro",
        }}
      />
    </div>
  );
}

function Mensagem({ dados }) {
  const estiloBase = {
    width: "350px",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
    color: "white",
    fontFamily: "Arial",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  // Estilos cores
  const estilosPorTipo = {
    Sucesso: { backgroundColor: "#2ecc71" },
    Alerta: { backgroundColor: "#f1c40f", color: "#333" },
    Erro: { backgroundColor: "#e74c3c" },
  };

  return (
    <div style={{ ...estiloBase, ...estilosPorTipo[dados.tipo] }}>
      <h2>{dados.titulo}</h2>
      <p>{dados.mensagem}</p>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    backgroundColor: "#f2f2f2",
  },
};

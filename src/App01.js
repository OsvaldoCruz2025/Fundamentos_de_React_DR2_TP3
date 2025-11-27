import "./styles.css";

export default function App() {
  return (
    <div style={styles.container}>
      <ProfileCard />
    </div>
  );
}
function ProfileCard() {
  const dados = {
    nome: "Osvaldo",
    sobrenome: "Cruz",
    foto: "/img/foto_perfil.png",
    contatos: ["(11) 99999-1111", "(11) 98888-2222"],
    emails: ["osvaldo.cruz@al.infnet.edu.br"],
    endereco: "Rua das Flores, 123 - São Paulo/SP",
  };

  return (
    <div style={styles.card}>
      <img src={dados.foto} alt="Foto de perfil" style={styles.foto} />

      <h2 style={styles.nome}>
        {dados.nome} {dados.sobrenome}
      </h2>

      <div style={styles.section}>
        <h3 style={styles.titulo}> Contatos</h3>
        {dados.contatos.map((c, i) => (
          <p key={i} style={styles.texto}>
            {c}
          </p>
        ))}
      </div>

      <div style={styles.section}>
        <h3 style={styles.titulo}> Emails</h3>
        {dados.emails.map((e, i) => (
          <p key={i} style={styles.texto}>
            {e}
          </p>
        ))}
      </div>

      <div style={styles.section}>
        <h3 style={styles.titulo}> Endereço</h3>
        <p style={styles.texto}>{dados.endereco}</p>
      </div>
    </div>
  );
}

//  inline
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
    backgroundColor: "#f2f2f2",
    height: "100vh",
  },
  card: {
    width: "320px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    textAlign: "center",
    fontFamily: "Arial",
    cursor: "pointer",
  },
  foto: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
  },
  nome: {
    fontSize: "24px",
    marginBottom: "15px",
    color: "#333",
  },
  section: {
    marginTop: "15px",
    textAlign: "left",
  },
  titulo: {
    marginBottom: "5px",
    color: "#444",
    fontSize: "16px",
  },
  texto: {
    margin: 0,
    color: "#555",
    fontSize: "14px",
  },
};

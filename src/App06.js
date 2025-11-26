export default function App() {
  const aluno = {
    nome: "Maria Eduarda Silva",
    matricula: "2025A123",
    responsavel: "João da Silva",
    disciplinas: [
      {
        nome: "Matemática",
        docente: "Prof. Carlos",
        notas: [
          { prova: "Prova 1", nota: 8.5 },
          { prova: "Prova 2", nota: 9.0 },
        ],
      },
      {
        nome: "Português",
        docente: "Profa. Ana",
        notas: [
          { prova: "Redação", nota: 7.5 },
          { prova: "Prova 2", nota: 8.0 },
        ],
      },
      {
        nome: "História",
        docente: "Prof. Roberto",
        notas: [{ prova: "Prova Única", nota: 9.2 }],
      },
    ],

    nome: "Maria Eduarda Silva",
    matricula: "2025A123",
    responsavel: "João da Silva",
    disciplinas: [
      {
        nome: "Matemática",
        docente: "Prof. Carlos",
        notas: [
          { prova: "Prova 1", nota: 8.5 },
          { prova: "Prova 2", nota: 9.0 },
        ],
      },
      {
        nome: "Português",
        docente: "Profa. Ana",
        notas: [
          { prova: "Redação", nota: 7.5 },
          { prova: "Prova 2", nota: 8.0 },
        ],
      },
      {
        nome: "História",
        docente: "Prof. Roberto",
        notas: [{ prova: "Prova Única", nota: 9.2 }],
      },
    ],
  };

  return (
    <div style={styles.app}>
      <BoletimAluno aluno={aluno} />
    </div>
  );
}

/*  COMPONENTE PRINCIPAL  */

function BoletimAluno({ aluno }) {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <p style={styles.headerLabel}>Boletim</p>
        <h1 style={styles.headerTitle}>Aluno</h1>
      </div>

      {/* Componente de informações pessoais */}
      <InfoAluno
        nome={aluno.nome}
        matricula={aluno.matricula}
        responsavel={aluno.responsavel}
      />

      <ListaDisciplinas disciplinas={aluno.disciplinas} />
    </div>
  );
}

/*  INFO ALUNO  */

function InfoAluno({ nome, matricula, responsavel }) {
  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>Informações do Aluno</h2>

      <p style={styles.label}>
        Nome:
        <span style={styles.value}> {nome}</span>
      </p>

      <p style={styles.label}>
        Matrícula:
        <span style={styles.value}> {matricula}</span>
      </p>

      <p style={styles.label}>
        Responsável:
        <span style={styles.value}> {responsavel}</span>
      </p>
    </section>
  );
}

/*  LISTA DE DISCIPLINAS  */

function ListaDisciplinas({ disciplinas }) {
  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>Disciplinas</h2>

      <div style={styles.disciplinasGrid}>
        {disciplinas.map((disciplina, index) => (
          <div key={index} style={styles.disciplinaCard}>
            <div style={styles.disciplinaHeader}>
              <h3 style={styles.disciplinaNome}>{disciplina.nome}</h3>
              <p style={styles.disciplinaDocente}>
                Docente: {disciplina.docente}
              </p>
            </div>

            <ListaNotas notas={disciplina.notas} />
          </div>
        ))}
      </div>
    </section>
  );
}

/*  LISTA DE NOTAS  */

function ListaNotas({ notas }) {
  return (
    <div>
      <h4 style={styles.notasTitulo}>Notas</h4>
      {notas.map((item, index) => (
        <div key={index} style={styles.notaLinha}>
          <span style={styles.notaProva}>{item.prova}</span>
          <span style={styles.notaValor}>{item.nota.toFixed(1)}</span>
        </div>
      ))}
    </div>
  );
}

/*  ESTILOS INLINE  */

const primary = "#2563eb";
const bgSoft = "#f3f4f6";
const textPrimary = "#111827";
const textMuted = "#6b7280";

const styles = {
  app: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #dbeafe, #f9fafb)",
    fontFamily: "'Segoe UI', sans-serif",
    padding: "20px",
  },
  card: {
    width: "760px",
    maxWidth: "100%",
    backgroundColor: "#ffffff",
    borderRadius: "18px",
    padding: "24px 28px 28px",
    boxShadow:
      "0 18px 25px -8px rgba(15,23,42,0.18), 0 8px 10px -6px rgba(15,23,42,0.08)",
    border: "1px solid #e5e7eb",
  },
  header: {
    marginBottom: "18px",
  },
  headerLabel: {
    fontSize: "12px",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: textMuted,
    margin: 0,
  },
  headerTitle: {
    fontSize: "26px",
    fontWeight: 700,
    margin: "4px 0 0",
    color: textPrimary,
  },
  section: {
    padding: "16px 0",
    borderTop: "1px solid #e5e7eb",
  },
  sectionTitle: {
    fontSize: "18px",
    fontWeight: 600,
    margin: "0 0 10px",
    color: textPrimary,
  },
  label: {
    margin: "4px 0",
    fontSize: "14px",
    color: textPrimary,
  },
  value: {
    color: textMuted,
    fontWeight: 400,
  },
  disciplinasGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
  },
  disciplinaCard: {
    backgroundColor: bgSoft,
    borderRadius: "12px",
    padding: "10px 12px 12px",
    border: "1px solid #e5e7eb",
  },
  disciplinaHeader: {
    marginBottom: "6px",
  },
  disciplinaNome: {
    margin: 0,
    fontSize: "15px",
    fontWeight: 600,
    color: textPrimary,
  },
  disciplinaDocente: {
    margin: 0,
    fontSize: "13px",
    color: textMuted,
  },
  notasTitulo: {
    margin: "4px 0 4px",
    fontSize: "13px",
    fontWeight: 600,
    color: textMuted,
  },
  notaLinha: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "4px 6px",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    marginBottom: "4px",
  },
  notaProva: {
    fontSize: "13px",
    color: textPrimary,
  },
  notaValor: {
    fontSize: "13px",
    fontWeight: 600,
    color: primary,
  },
};

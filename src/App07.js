export default function App() {
  const biblioteca = {
    proprietario: "Osvaldo Cruz",
    totalLivros: 3,
    livros: [
      {
        titulo: "Clean Code",
        autor: "Robert C. Martin",
        genero: "Programação",
        paginas: 464,
        resumo:
          "Práticas e princípios para escrever código limpo e de fácil manutenção.",
        avaliacao: 4.8,
      },
      {
        titulo: "O Poder do Hábito",
        autor: "Charles Duhigg",
        genero: "Desenvolvimento Pessoal",
        paginas: 408,
        resumo:
          "Um estudo sobre como os hábitos funcionam e como podem ser transformados.",
        avaliacao: 4.6,
      },
      {
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        genero: "Romance",
        paginas: 288,
        resumo:
          "Clássico da literatura brasileira, narrado por Bento Santiago, levantando dúvidas sobre ciúmes e traição.",
        avaliacao: 4.2,
      },
    ],
  };

  return (
    <div style={styles.app}>
      <BibliotecaPessoal biblioteca={biblioteca} />
    </div>
  );
}

/* ============ COMPONENTE PRINCIPAL ============ */

function BibliotecaPessoal({ biblioteca }) {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <p style={styles.headerLabel}>Biblioteca</p>
        <h1 style={styles.headerTitle}>Pessoal</h1>
      </div>

      <InfoBiblioteca
        proprietario={biblioteca.proprietario}
        totalLivros={biblioteca.totalLivros}
      />

      <ListaLivros livros={biblioteca.livros} />
    </div>
  );
}

/* ============ INFO BIBLIOTECA ============ */

function InfoBiblioteca({ proprietario, totalLivros }) {
  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>Informações da Biblioteca</h2>

      <p style={styles.label}>
        Proprietário:
        <span style={styles.value}> {proprietario}</span>
      </p>

      <p style={styles.label}>
        Total de livros:
        <span style={styles.value}> {totalLivros}</span>
      </p>
    </section>
  );
}

/* ============ LISTA DE LIVROS ============ */

function ListaLivros({ livros }) {
  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>Livros</h2>

      <div style={styles.livrosGrid}>
        {livros.map((livro, index) => (
          <CardLivro key={index} livro={livro} />
        ))}
      </div>
    </section>
  );
}

/* ============ CARD DE LIVRO ============ */

function CardLivro({ livro }) {
  return (
    <div style={styles.livroCard}>
      <h3 style={styles.livroTitulo}>{livro.titulo}</h3>
      <p style={styles.livroAutor}>{livro.autor}</p>

      <p style={styles.livroInfo}>
        <strong>Gênero:</strong> {livro.genero}
      </p>
      <p style={styles.livroInfo}>
        <strong>Páginas:</strong> {livro.paginas}
      </p>

      <p style={styles.resumo}>{livro.resumo}</p>

      <div style={styles.avaliacaoBox}>
        <span style={styles.avaliacaoLabel}>Avaliação</span>
        <span style={styles.avaliacaoValor}>
          {livro.avaliacao.toFixed(1)} ⭐
        </span>
      </div>
    </div>
  );
}

/* ============ ESTILOS INLINE ============ */

const primary = "#7c3aed"; // roxo
const bgSoft = "#f3f4f6";
const textPrimary = "#111827";
const textMuted = "#6b7280";

const styles = {
  app: {
    minHeight: "100vh",
    margin: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #ede9fe, #f9fafb)",
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    padding: "24px",
  },
  card: {
    width: "820px",
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
  livrosGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "14px",
  },
  livroCard: {
    backgroundColor: bgSoft,
    borderRadius: "12px",
    padding: "10px 12px 12px",
    border: "1px solid #e5e7eb",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  livroTitulo: {
    margin: 0,
    fontSize: "16px",
    fontWeight: 600,
    color: textPrimary,
  },
  livroAutor: {
    margin: 0,
    fontSize: "13px",
    color: textMuted,
  },
  livroInfo: {
    margin: "2px 0",
    fontSize: "13px",
    color: textPrimary,
  },
  resumo: {
    marginTop: "6px",
    fontSize: "13px",
    color: textMuted,
  },
  avaliacaoBox: {
    marginTop: "8px",
    alignSelf: "flex-end",
    padding: "4px 10px",
    borderRadius: "999px",
    backgroundColor: "rgba(124,58,237,0.08)",
    border: "1px solid rgba(124,58,237,0.35)",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
  },
  avaliacaoLabel: {
    fontSize: "12px",
    color: textMuted,
  },
  avaliacaoValor: {
    fontSize: "13px",
    fontWeight: 600,
    color: primary,
  },
};

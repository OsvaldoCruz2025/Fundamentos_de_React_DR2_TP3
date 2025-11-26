// App.js
export default function App() {
  // Dados de exemplo da Tarefa 07
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
          "Clássico da literatura brasileira, narrado por Bento Santiago, cheio de dúvidas e ciúmes.",
        avaliacao: 4.2,
      },
    ],
  };

  // Aqui você escolhe qual livro quer exibir os detalhes
  const livroSelecionado = biblioteca.livros[0];

  return (
    <div style={stylesApp.container}>
      <DetalhesLivro livro={livroSelecionado} biblioteca={biblioteca} />
    </div>
  );
}

/* =========== COMPONENTE TAREFA 11 =========== */

function DetalhesLivro({ livro, biblioteca }) {
  // Quantidade total de livros
  const totalLivros = biblioteca.livros.length;

  // Média de páginas da biblioteca
  const totalPaginas = biblioteca.livros.reduce(
    (acc, item) => acc + item.paginas,
    0
  );
  const mediaPaginasBiblioteca = totalPaginas / totalLivros;

  // Média de avaliação da biblioteca
  const totalAvaliacao = biblioteca.livros.reduce(
    (acc, item) => acc + item.avaliacao,
    0
  );
  const mediaAvaliacaoBiblioteca = totalAvaliacao / totalLivros;

  // Comparações simples (maior/menor/igual à média)
  const textoComparacaoPaginas =
    livro.paginas > mediaPaginasBiblioteca
      ? "Este livro tem mais páginas que a média."
      : livro.paginas < mediaPaginasBiblioteca
      ? "Este livro tem menos páginas que a média."
      : "Este livro tem exatamente a média de páginas da biblioteca.";

  const textoComparacaoAvaliacao =
    livro.avaliacao > mediaAvaliacaoBiblioteca
      ? "A nota deste livro está acima da média da biblioteca."
      : livro.avaliacao < mediaAvaliacaoBiblioteca
      ? "A nota deste livro está abaixo da média da biblioteca."
      : "A nota deste livro é igual à média da biblioteca.";

  return (
    <div style={stylesDetalhes.card}>
      <h2 style={stylesDetalhes.titulo}>Detalhes do Livro</h2>

      {/* Informações completas */}
      <p style={stylesDetalhes.linha}>
        <strong>Título:</strong> {livro.titulo}
      </p>
      <p style={stylesDetalhes.linha}>
        <strong>Autor:</strong> {livro.autor}
      </p>
      <p style={stylesDetalhes.linha}>
        <strong>Gênero:</strong> {livro.genero}
      </p>
      <p style={stylesDetalhes.linha}>
        <strong>Páginas:</strong> {livro.paginas}
      </p>
      <p style={stylesDetalhes.linha}>
        <strong>Avaliação:</strong> {livro.avaliacao}
      </p>
      <p style={stylesDetalhes.linha}>
        <strong>Resumo:</strong> {livro.resumo}
      </p>

      <hr style={stylesDetalhes.divisor} />

      {/* Estatísticas da biblioteca (para comparação) */}
      <p style={stylesDetalhes.linha}>
        <strong>Média de páginas da biblioteca:</strong>{" "}
        {mediaPaginasBiblioteca.toFixed(1)}
      </p>
      <p style={stylesDetalhes.linha}>
        <strong>Média de avaliação da biblioteca:</strong>{" "}
        {mediaAvaliacaoBiblioteca.toFixed(1)}
      </p>

      <p style={stylesDetalhes.comparacao}>{textoComparacaoPaginas}</p>
      <p style={stylesDetalhes.comparacao}>{textoComparacaoAvaliacao}</p>
    </div>
  );
}

/* =========== ESTILOS INLINE SIMPLES =========== */

const stylesApp = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
};

const stylesDetalhes = {
  card: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    width: "480px",
    boxShadow: "0 8px 16px rgba(0,0,0,0.08)",
  },
  titulo: {
    margin: "0 0 16px",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#111827",
  },
  linha: {
    margin: "4px 0",
    fontSize: "14px",
    color: "#374151",
  },
  divisor: {
    margin: "14px 0",
    border: "none",
    borderBottom: "1px solid #e5e7eb",
  },
  comparacao: {
    margin: "4px 0",
    fontSize: "14px",
    color: "#111827",
    fontStyle: "italic",
  },
};

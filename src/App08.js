export default function App() {
  const biblioteca = {
    proprietario: "Osvaldo Cruz",
    totalLivros: 3,
    livros: [
      { titulo: "Clean Code", genero: "Programação", paginas: 464 },
      { titulo: "Dom Casmurro", genero: "Romance", paginas: 288 },
      { titulo: "O Poder do Hábito", genero: "Desenvolvimento", paginas: 408 },
    ],
  };

  return (
    <div style={{ padding: 20 }}>
      <ResumoBiblioteca
        proprietario={biblioteca.proprietario}
        totalLivros={biblioteca.totalLivros}
        livros={biblioteca.livros}
      />
    </div>
  );
}

function ResumoBiblioteca({ proprietario, totalLivros, livros }) {
  // média de páginas
  const totalPaginas = livros.reduce((soma, livro) => soma + livro.paginas, 0);
  const mediaPaginas = totalPaginas / livros.length;

  // gênero mais frequente
  const contador = {};
  livros.forEach((livro) => {
    contador[livro.genero] = (contador[livro.genero] || 0) + 1;
  });

  const generoMaisFrequente = Object.keys(contador).reduce((a, b) =>
    contador[a] > contador[b] ? a : b
  );

  return (
    <div style={{ border: "1px solid #ccc", padding: 20, width: 300 }}>
      <h2>Resumo da Biblioteca</h2>

      <p>
        <strong>Proprietário:</strong> {proprietario}
      </p>

      <p>
        <strong>Total de livros:</strong> {totalLivros}
      </p>

      <p>
        <strong>Média de páginas:</strong> {mediaPaginas.toFixed(1)}
      </p>

      <p>
        <strong>Gênero mais frequente:</strong> {generoMaisFrequente}
      </p>
    </div>
  );
}

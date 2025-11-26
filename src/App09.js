export default function App() {
  const livros = [
    {
      titulo: "Clean Code",
      autor: "Robert C. Martin",
      genero: "Programação",
      paginas: 464,
      avaliacao: 4.8,
    },
    {
      titulo: "O Poder do Hábito",
      autor: "Charles Duhigg",
      genero: "Desenvolvimento Pessoal",
      paginas: 408,
      avaliacao: 4.6,
    },
    {
      titulo: "Dom Casmurro",
      autor: "Machado de Assis",
      genero: "Romance",
      paginas: 288,
      avaliacao: 4.2,
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <ListaLivrosAvaliados livros={livros} />
    </div>
  );
}

function ListaLivrosAvaliados({ livros }) {
  // Função para decidir a cor da avaliação
  function corAvaliacao(avaliacao) {
    if (avaliacao >= 4.5) return "green";
    if (avaliacao >= 4.0) return "orange";
    return "red";
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: 20, width: 400 }}>
      <h2>Lista de Livros</h2>

      {livros.map((livro, index) => (
        <div
          key={index}
          style={{
            padding: 10,
            marginBottom: 10,
            border: "1px solid #ddd",
            borderRadius: 6,
          }}
        >
          <p>
            <strong>Título:</strong> {livro.titulo}
          </p>
          <p>
            <strong>Autor:</strong> {livro.autor}
          </p>
          <p>
            <strong>Gênero:</strong> {livro.genero}
          </p>

          {/* Indicador visual */}
          <div
            style={{
              marginTop: 8,
              padding: "4px 8px",
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
              width: 90,
              borderRadius: 4,
              backgroundColor: corAvaliacao(livro.avaliacao),
            }}
          >
            {livro.avaliacao.toFixed(1)}
          </div>
        </div>
      ))}
    </div>
  );
}

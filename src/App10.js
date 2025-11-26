import React, { useState } from "react";

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
      resumo: "Clássico da literatura brasileira narrado por Bento Santiago.",
      avaliacao: 4.2,
    },
  ],
};

export default function App() {
  const [generoFiltro, setGeneroFiltro] = useState("");
  const [avaliacaoMinima, setAvaliacaoMinima] = useState("");
  const [paginasMinimas, setPaginasMinimas] = useState("");

  const livrosFiltrados = biblioteca.livros.filter((livro) => {
    const passaGenero = generoFiltro === "" || livro.genero === generoFiltro;

    const passaAvaliacao =
      avaliacaoMinima === "" || livro.avaliacao >= Number(avaliacaoMinima);

    const passaPaginas =
      paginasMinimas === "" || livro.paginas >= Number(paginasMinimas);

    return passaGenero && passaAvaliacao && passaPaginas;
  });

  return (
    <div style={styles.app}>
      <h1 style={styles.tituloPrincipal}>Biblioteca Pessoal</h1>

      <ResumoBiblioteca
        proprietario={biblioteca.proprietario}
        totalLivros={biblioteca.totalLivros}
        livros={biblioteca.livros}
      />

      {/* TAREFA 10 – Filtros conectados com lista de livros (Tarefa 9) */}
      <FiltroLivros
        genero={generoFiltro}
        avaliacaoMinima={avaliacaoMinima}
        paginasMinimas={paginasMinimas}
        onGeneroChange={(e) => setGeneroFiltro(e.target.value)}
        onAvaliacaoMinimaChange={(e) => setAvaliacaoMinima(e.target.value)}
        onPaginasMinimasChange={(e) => setPaginasMinimas(e.target.value)}
      />

      <ListaLivros livros={livrosFiltrados} />
    </div>
  );
}

/* ---------- TAREFA 8: ResumoBiblioteca ---------- */

function ResumoBiblioteca({ proprietario, totalLivros, livros }) {
  if (!livros || livros.length === 0) {
    return (
      <div style={stylesResumo.card}>
        <h2 style={stylesResumo.titulo}>Resumo da Biblioteca</h2>
        <p style={stylesResumo.item}>Nenhum livro cadastrado.</p>
      </div>
    );
  }

  // média de páginas
  const somaPaginas = livros.reduce((acc, livro) => acc + livro.paginas, 0);
  const mediaPaginas = somaPaginas / livros.length;

  // gênero mais frequente
  const contadorGeneros = {};
  livros.forEach((livro) => {
    contadorGeneros[livro.genero] = (contadorGeneros[livro.genero] || 0) + 1;
  });

  const generoMaisFrequente = Object.entries(contadorGeneros).sort(
    (a, b) => b[1] - a[1]
  )[0][0];

  return (
    <div style={stylesResumo.card}>
      <h2 style={stylesResumo.titulo}>Resumo da Biblioteca</h2>

      <p style={stylesResumo.item}>
        <strong>Proprietário:</strong> {proprietario}
      </p>

      <p style={stylesResumo.item}>
        <strong>Total de livros:</strong> {totalLivros}
      </p>

      <p style={stylesResumo.item}>
        <strong>Média de páginas por livro:</strong> {mediaPaginas.toFixed(1)}{" "}
        páginas
      </p>

      <p style={stylesResumo.item}>
        <strong>Gênero mais frequente:</strong> {generoMaisFrequente}
      </p>
    </div>
  );
}

/* ---------- TAREFA 9: ListaLivros + indicador visual ---------- */

function ListaLivros({ livros }) {
  return (
    <div style={stylesLista.card}>
      <h2 style={stylesLista.titulo}>Lista de Livros</h2>

      {livros.length === 0 ? (
        <p style={stylesLista.info}>Nenhum livro encontrado com esse filtro.</p>
      ) : (
        <ul style={stylesLista.lista}>
          {livros.map((livro, index) => (
            <li key={index} style={stylesLista.item}>
              <div style={stylesLista.itemInfo}>
                <p style={stylesLista.tituloLivro}>{livro.titulo}</p>
                <p style={stylesLista.texto}>
                  <strong>Autor:</strong> {livro.autor}
                </p>
                <p style={stylesLista.texto}>
                  <strong>Gênero:</strong> {livro.genero}
                </p>
              </div>

              <div style={stylesLista.indicadorContainer}>
                <span style={stylesLista.indicadorLabel}>
                  {livro.avaliacao.toFixed(1)}
                </span>
                <span
                  style={{
                    ...stylesLista.indicadorCor,
                    backgroundColor: corPorAvaliacao(livro.avaliacao),
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function corPorAvaliacao(nota) {
  if (nota >= 4.5) return "#16a34a";
  if (nota >= 3) return "#eab308";
  return "#ef4444";
}

/* ---------- TAREFA 10: FiltroLivros ---------- */

function FiltroLivros({
  genero,
  avaliacaoMinima,
  paginasMinimas,
  onGeneroChange,
  onAvaliacaoMinimaChange,
  onPaginasMinimasChange,
}) {
  return (
    <div style={stylesFiltro.card}>
      <h2 style={stylesFiltro.titulo}>Filtros de Livros</h2>

      <div style={stylesFiltro.linha}>
        <label style={stylesFiltro.label}>Gênero:</label>
        <select
          value={genero}
          onChange={onGeneroChange}
          style={stylesFiltro.input}
        >
          <option value="">Todos</option>
          <option value="Programação">Programação</option>
          <option value="Desenvolvimento Pessoal">
            Desenvolvimento Pessoal
          </option>
          <option value="Romance">Romance</option>
        </select>
      </div>

      <div style={stylesFiltro.linha}>
        <label style={stylesFiltro.label}>Avaliação mínima:</label>
        <input
          type="number"
          step="0.1"
          value={avaliacaoMinima}
          onChange={onAvaliacaoMinimaChange}
          style={stylesFiltro.input}
          placeholder="ex: 4.0"
        />
      </div>

      <div style={stylesFiltro.linha}>
        <label style={stylesFiltro.label}>Mín. páginas:</label>
        <input
          type="number"
          value={paginasMinimas}
          onChange={onPaginasMinimasChange}
          style={stylesFiltro.input}
          placeholder="ex: 300"
        />
      </div>
    </div>
  );
}

/* ---------- ESTILOS INLINE ---------- */

const styles = {
  app: {
    minHeight: "100vh",
    padding: "24px",
    backgroundColor: "#f3f4f6",
    fontFamily: "Arial, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
  },
  tituloPrincipal: {
    fontSize: "24px",
    marginBottom: "8px",
  },
};

const stylesResumo = {
  card: {
    backgroundColor: "#ffffff",
    padding: "18px",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    width: "320px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
  },
  titulo: {
    margin: "0 0 12px",
    fontSize: "18px",
    fontWeight: 600,
  },
  item: {
    fontSize: "14px",
    margin: "4px 0",
  },
};

const stylesLista = {
  card: {
    backgroundColor: "#ffffff",
    padding: "18px",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    width: "500px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
  },
  titulo: {
    margin: "0 0 12px",
    fontSize: "18px",
    fontWeight: 600,
  },
  lista: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #e5e7eb",
    padding: "8px 0",
  },
  itemInfo: {
    flex: 1,
  },
  tituloLivro: {
    margin: 0,
    fontWeight: 600,
  },
  texto: {
    margin: "2px 0",
    fontSize: "13px",
  },
  indicadorContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
    width: "60px",
  },
  indicadorLabel: {
    fontSize: "13px",
    fontWeight: 600,
  },
  indicadorCor: {
    width: "18px",
    height: "18px",
    borderRadius: "50%",
  },
  info: {
    fontSize: "14px",
  },
};

const stylesFiltro = {
  card: {
    backgroundColor: "#ffffff",
    padding: "18px",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    width: "500px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
  },
  titulo: {
    margin: "0 0 12px",
    fontSize: "18px",
    fontWeight: 600,
  },
  linha: {
    display: "flex",
    alignItems: "center",
    marginBottom: "8px",
    gap: "8px",
  },
  label: {
    width: "130px",
    fontSize: "14px",
  },
  input: {
    flex: 1,
    padding: "4px 6px",
    borderRadius: "6px",
    border: "1px solid #d1d5db",
    fontSize: "14px",
  },
};

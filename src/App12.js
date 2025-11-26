import React, { useState } from "react";

export default function App() {
  // Dados base da Tarefa 07
  const biblioteca = {
    proprietario: "Osvaldo Cruz",
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
      {
        titulo: "Clean Architecture",
        autor: "Robert C. Martin",
        genero: "Programação",
        paginas: 432,
        resumo:
          "Conceitos de arquitetura de software para sistemas robustos e de longa duração.",
        avaliacao: 4.5,
      },
    ],
  };

  const totalLivrosBiblioteca = biblioteca.livros.length;

  // ==== ESTATÍSTICAS GERAIS (Tarefa 08) ====
  const totalPaginasBiblioteca = biblioteca.livros.reduce(
    (acc, livro) => acc + livro.paginas,
    0
  );
  const mediaPaginasBiblioteca = totalPaginasBiblioteca / totalLivrosBiblioteca;

  const mediaAvaliacaoBiblioteca =
    biblioteca.livros.reduce((acc, livro) => acc + livro.avaliacao, 0) /
    totalLivrosBiblioteca;

  // ==== ESTADO – FILTROS (Tarefa 10) ====
  const [filtros, setFiltros] = useState({
    genero: "Todos",
    avaliacaoMin: 0,
    paginasMin: 0,
  });

  // ==== ESTADO – LIVRO SELECIONADO (visão detalhada – Tarefa 11/12) ====
  const [livroSelecionado, setLivroSelecionado] = useState(null);

  // ==== APLICAÇÃO DOS FILTROS (Tarefa 10) ====
  const livrosFiltrados = biblioteca.livros.filter((livro) => {
    const passaGenero =
      filtros.genero === "Todos" || livro.genero === filtros.genero;
    const passaAvaliacao = livro.avaliacao >= filtros.avaliacaoMin;
    const passaPaginas = livro.paginas >= filtros.paginasMin;

    return passaGenero && passaAvaliacao && passaPaginas;
  });

  // ==== ESTATÍSTICAS USADAS NO RESUMO (Tarefa 08) – com base nos filtrados ====
  const totalLivrosFiltrados = livrosFiltrados.length || 1;

  const totalPaginasFiltrados = livrosFiltrados.reduce(
    (acc, livro) => acc + livro.paginas,
    0
  );

  const mediaPaginasFiltrados = totalPaginasFiltrados / totalLivrosFiltrados;

  const contadorGeneros = {};
  livrosFiltrados.forEach((livro) => {
    contadorGeneros[livro.genero] = (contadorGeneros[livro.genero] || 0) + 1;
  });
  const generoMaisFrequente =
    Object.keys(contadorGeneros).length > 0
      ? Object.entries(contadorGeneros).sort((a, b) => b[1] - a[1])[0][0]
      : "—";

  // ==== HANDLERS ====
  function handleFiltroChange(chave, valor) {
    setFiltros((prev) => ({
      ...prev,
      [chave]: valor,
    }));
  }

  function handleVerDetalhes(livro) {
    setLivroSelecionado(livro);
  }

  function handleVoltar() {
    setLivroSelecionado(null);
  }

  return (
    <div style={styles.app}>
      <div style={styles.layout}>
        <header style={styles.header}>
          <h1 style={styles.titulo}>Biblioteca Pessoal</h1>
          <p style={styles.subtitulo}>
            Sistema integrado – Tarefas 07 a 12 (visão geral e detalhada)
          </p>
        </header>

        <main style={styles.main}>
          {/* COLUNA ESQUERDA – Resumo + Filtros */}
          <div style={styles.colunaEsquerda}>
            <ResumoBiblioteca
              proprietario={biblioteca.proprietario}
              totalLivros={totalLivrosBiblioteca}
              mediaPaginas={mediaPaginasFiltrados}
              generoMaisFrequente={generoMaisFrequente}
            />

            <FiltrosLivros filtros={filtros} onChange={handleFiltroChange} />
          </div>

          {/* COLUNA DIREITA – Lista ou Detalhes, com "navegação" simples */}
          <div style={styles.colunaDireita}>
            {livroSelecionado ? (
              <DetalhesLivro
                livro={livroSelecionado}
                mediaPaginasBiblioteca={mediaPaginasBiblioteca}
                mediaAvaliacaoBiblioteca={mediaAvaliacaoBiblioteca}
                onVoltar={handleVoltar}
              />
            ) : (
              <ListaLivros
                livros={livrosFiltrados}
                onVerDetalhes={handleVerDetalhes}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

/* ========== TAREFA 8 – RESUMO BIBLIOTECA ========== */
function ResumoBiblioteca({
  proprietario,
  totalLivros,
  mediaPaginas,
  generoMaisFrequente,
}) {
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
        <strong>Média de páginas (livros filtrados):</strong>{" "}
        {mediaPaginas.toFixed(1)} páginas
      </p>
      <p style={stylesResumo.item}>
        <strong>Gênero mais frequente:</strong> {generoMaisFrequente}
      </p>
    </div>
  );
}

/* ========== TAREFA 10 – FILTROS ========== */
function FiltrosLivros({ filtros, onChange }) {
  return (
    <div style={stylesFiltros.card}>
      <h2 style={stylesFiltros.titulo}>Filtros de Livros</h2>

      <div style={stylesFiltros.campo}>
        <label style={stylesFiltros.label}>Gênero:</label>
        <select
          style={stylesFiltros.input}
          value={filtros.genero}
          onChange={(e) => onChange("genero", e.target.value)}
        >
          <option value="Todos">Todos</option>
          <option value="Programação">Programação</option>
          <option value="Desenvolvimento Pessoal">
            Desenvolvimento Pessoal
          </option>
          <option value="Romance">Romance</option>
        </select>
      </div>

      <div style={stylesFiltros.campo}>
        <label style={stylesFiltros.label}>Avaliação mínima:</label>
        <input
          style={stylesFiltros.input}
          type="number"
          step="0.1"
          min="0"
          max="5"
          value={filtros.avaliacaoMin}
          onChange={(e) => onChange("avaliacaoMin", Number(e.target.value))}
        />
      </div>

      <div style={stylesFiltros.campo}>
        <label style={stylesFiltros.label}>Mín. páginas:</label>
        <input
          style={stylesFiltros.input}
          type="number"
          min="0"
          value={filtros.paginasMin}
          onChange={(e) => onChange("paginasMin", Number(e.target.value))}
        />
      </div>
    </div>
  );
}

/* ========== TAREFA 9 – LISTA DE LIVROS ========== */
function ListaLivros({ livros, onVerDetalhes }) {
  return (
    <div style={stylesLista.card}>
      <h2 style={stylesLista.titulo}>Lista de Livros</h2>

      {livros.length === 0 ? (
        <p style={stylesLista.vazio}>Nenhum livro encontrado com os filtros.</p>
      ) : (
        livros.map((livro) => (
          <div key={livro.titulo} style={stylesLista.item}>
            <div>
              <p style={stylesLista.tituloLivro}>{livro.titulo}</p>
              <p style={stylesLista.texto}>
                {livro.autor} • {livro.genero}
              </p>
            </div>

            <div style={stylesLista.direita}>
              <IndicadorAvaliacao avaliacao={livro.avaliacao} />
              <button
                style={stylesLista.botao}
                onClick={() => onVerDetalhes(livro)}
              >
                Ver detalhes
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

// Indicador visual de avaliação (T9)
function IndicadorAvaliacao({ avaliacao }) {
  let cor = "#fbbf24"; // amarelo padrão
  if (avaliacao >= 4.6) cor = "#22c55e"; // verde
  else if (avaliacao < 4.0) cor = "#f97316"; // laranja

  return (
    <div style={{ ...stylesIndicador.base, backgroundColor: cor }}>
      <span style={stylesIndicador.texto}>{avaliacao.toFixed(1)} </span>
    </div>
  );
}

/* ========== TAREFA 11 – DETALHES DO LIVRO ========== */
function DetalhesLivro({
  livro,
  mediaPaginasBiblioteca,
  mediaAvaliacaoBiblioteca,
  onVoltar,
}) {
  const maisPaginas = livro.paginas > mediaPaginasBiblioteca;
  const melhorNota = livro.avaliacao > mediaAvaliacaoBiblioteca;

  return (
    <div style={stylesDetalhes.card}>
      <div style={stylesDetalhes.header}>
        <h2 style={stylesDetalhes.titulo}>Detalhes do Livro</h2>
        <button style={stylesDetalhes.botaoVoltar} onClick={onVoltar}>
          ← Voltar
        </button>
      </div>

      {/* Informações completas */}
      <div style={stylesDetalhes.bloco}>
        <h3 style={stylesDetalhes.subtitulo}>Informações completas</h3>
        <p style={stylesDetalhes.texto}>
          <strong>Título:</strong> {livro.titulo}
        </p>
        <p style={stylesDetalhes.texto}>
          <strong>Autor:</strong> {livro.autor}
        </p>
        <p style={stylesDetalhes.texto}>
          <strong>Gênero:</strong> {livro.genero}
        </p>
        <p style={stylesDetalhes.texto}>
          <strong>Páginas:</strong> {livro.paginas}
        </p>
        <p style={stylesDetalhes.texto}>
          <strong>Avaliação:</strong> {livro.avaliacao.toFixed(1)}
        </p>
        <p style={stylesDetalhes.texto}>
          <strong>Resumo:</strong> {livro.resumo}
        </p>
      </div>

      {/* Estatísticas individuais + comparação com médias (T11/T8) */}
      <hr style={stylesDetalhes.divisor} />

      <div style={stylesDetalhes.bloco}>
        <h3 style={stylesDetalhes.subtitulo}>Comparação com a biblioteca</h3>

        <p style={stylesDetalhes.texto}>
          <strong>Média de páginas da biblioteca:</strong>{" "}
          {mediaPaginasBiblioteca.toFixed(1)}
        </p>
        <p style={stylesDetalhes.texto}>
          <strong>Média de avaliação da biblioteca:</strong>{" "}
          {mediaAvaliacaoBiblioteca.toFixed(1)} ★
        </p>

        <p style={stylesDetalhes.texto}>
          {maisPaginas
            ? "Este livro tem mais páginas que a média da biblioteca."
            : "Este livro tem menos páginas ou igual à média da biblioteca."}
        </p>

        <p style={stylesDetalhes.texto}>
          {melhorNota
            ? "A nota deste livro está acima da média da biblioteca."
            : "A nota deste livro está na média ou abaixo da média da biblioteca."}
        </p>
      </div>
    </div>
  );
}

/* ========== ESTILOS INLINE ========== */

const styles = {
  app: {
    minHeight: "100vh",
    backgroundColor: "#e5e7eb",
    margin: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    padding: "20px",
  },
  layout: {
    width: "1000px",
    maxWidth: "100%",
    backgroundColor: "#f9fafb",
    borderRadius: "18px",
    padding: "20px 24px 24px",
    boxShadow:
      "0 18px 25px -8px rgba(15,23,42,0.18), 0 8px 10px -6px rgba(15,23,42,0.08)",
  },
  header: {
    marginBottom: "16px",
  },
  titulo: {
    margin: 0,
    fontSize: "24px",
    fontWeight: 700,
    color: "#111827",
  },
  subtitulo: {
    margin: "4px 0 0",
    fontSize: "13px",
    color: "#6b7280",
  },
  main: {
    display: "flex",
    gap: "18px",
    alignItems: "flex-start",
  },
  colunaEsquerda: {
    width: "32%",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  colunaDireita: {
    width: "68%",
  },
};

const stylesResumo = {
  card: {
    backgroundColor: "#ffffff",
    padding: "14px 16px",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    boxShadow: "0 4px 8px rgba(0,0,0,0.03)",
  },
  titulo: {
    margin: "0 0 8px",
    fontSize: "16px",
    fontWeight: 600,
    color: "#111827",
  },
  item: {
    fontSize: "13px",
    color: "#374151",
    margin: "4px 0",
  },
};

const stylesFiltros = {
  card: {
    backgroundColor: "#ffffff",
    padding: "14px 16px 16px",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    boxShadow: "0 4px 8px rgba(0,0,0,0.03)",
  },
  titulo: {
    margin: "0 0 10px",
    fontSize: "16px",
    fontWeight: 600,
    color: "#111827",
  },
  campo: {
    marginBottom: "8px",
  },
  label: {
    display: "block",
    fontSize: "12px",
    color: "#4b5563",
    marginBottom: "2px",
  },
  input: {
    width: "100%",
    padding: "6px 8px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontSize: "13px",
  },
};

const stylesLista = {
  card: {
    backgroundColor: "#ffffff",
    padding: "14px 18px 16px",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    boxShadow: "0 4px 8px rgba(0,0,0,0.03)",
  },
  titulo: {
    margin: "0 0 10px",
    fontSize: "18px",
    fontWeight: 600,
    color: "#111827",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 0",
    borderBottom: "1px solid #e5e7eb",
  },
  tituloLivro: {
    margin: 0,
    fontSize: "14px",
    fontWeight: 600,
    color: "#111827",
  },
  texto: {
    margin: 0,
    fontSize: "12px",
    color: "#6b7280",
  },
  direita: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  botao: {
    border: "none",
    borderRadius: "999px",
    padding: "6px 10px",
    fontSize: "12px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    cursor: "pointer",
  },
  vazio: {
    fontSize: "13px",
    color: "#6b7280",
  },
};

const stylesIndicador = {
  base: {
    padding: "4px 8px",
    borderRadius: "999px",
    minWidth: "54px",
    textAlign: "center",
  },
  texto: {
    fontSize: "12px",
    fontWeight: 600,
    color: "#111827",
  },
};

const stylesDetalhes = {
  card: {
    backgroundColor: "#ffffff",
    padding: "16px 18px 18px",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    boxShadow: "0 4px 10px rgba(0,0,0,0.04)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
  },
  titulo: {
    margin: 0,
    fontSize: "18px",
    fontWeight: 600,
    color: "#111827",
  },
  botaoVoltar: {
    border: "none",
    backgroundColor: "transparent",
    color: "#2563eb",
    fontSize: "13px",
    cursor: "pointer",
  },
  bloco: {
    marginTop: "8px",
  },
  subtitulo: {
    margin: "0 0 6px",
    fontSize: "14px",
    fontWeight: 600,
    color: "#111827",
  },
  texto: {
    margin: "2px 0",
    fontSize: "13px",
    color: "#374151",
  },
  divisor: {
    margin: "12px 0",
    border: "none",
    borderTop: "1px solid #e5e7eb",
  },
};

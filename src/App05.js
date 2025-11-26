export default function App() {
  const produto = {
    nome: "Notebook Simples",
    descricao: "Notebook para uso diário, com 8GB de RAM e SSD 256GB.",
    preco: 2999.9,
    vendedor: {
      nome: "Loja Exemplo",
      telefone: "(11) 91111-1111",
      nota: 4.5,
    },
    avaliacoes: [
      { usuario: "Ana", avaliacao: "Gostei muito do produto.", nota: 5 },
      { usuario: "Carlos", avaliacao: "Bom custo-benefício.", nota: 4 },
    ],
  };

  return (
    <div style={styles.app}>
      <ProdutoCompleto produto={produto} />
    </div>
  );
}

/* COMPONENTE PRINCIPAL  */

function ProdutoCompleto({ produto }) {
  return (
    <div style={styles.caixa}>
      <h1 style={styles.titulo}>Produto</h1>

      <InfoProduto
        nome={produto.nome}
        descricao={produto.descricao}
        preco={produto.preco}
      />

      <InfoVendedor
        nome={produto.vendedor.nome}
        telefone={produto.vendedor.telefone}
        nota={produto.vendedor.nota}
        avaliacoes={produto.avaliacoes}
      />
    </div>
  );
}

/*  INFO PRODUTO */

function InfoProduto({ nome, descricao, preco }) {
  return (
    <div style={styles.bloco}>
      <h2 style={styles.subtitulo}>Informações do Produto</h2>
      <p>
        <strong>Nome:</strong> {nome}
      </p>
      <p>
        <strong>Descrição:</strong> {descricao}
      </p>
      <p>
        <strong>Preço:</strong>{" "}
        {preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </p>
    </div>
  );
}

/*  INFO VENDEDOR  */

function InfoVendedor({ nome, telefone, nota, avaliacoes }) {
  return (
    <div style={styles.bloco}>
      <h2 style={styles.subtitulo}>Vendedor</h2>
      <p>
        <strong>Nome:</strong> {nome}
      </p>
      <p>
        <strong>Telefone:</strong> {telefone}
      </p>
      <p>
        <strong>Nota:</strong> {nota}
      </p>

      <ListaAvaliacoes avaliacoes={avaliacoes} />
    </div>
  );
}

/* LISTA DE AVALIAÇÕES  */

function ListaAvaliacoes({ avaliacoes }) {
  return (
    <div style={styles.bloco}>
      <h3 style={styles.subtitulo}>Avaliações</h3>
      {avaliacoes.map((item, i) => (
        <div key={i} style={styles.avaliacao}>
          <p>
            <strong>Usuário:</strong> {item.usuario}
          </p>
          <p>
            <strong>Comentário:</strong> {item.avaliacao}
          </p>
          <p>
            <strong>Nota:</strong> {item.nota}
          </p>
        </div>
      ))}
    </div>
  );
}

/*  ESTILOS INLINE SIMPLES */

const styles = {
  app: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    fontFamily: "Arial, sans-serif",
  },
  caixa: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    width: "500px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  titulo: {
    textAlign: "center",
    marginBottom: "16px",
  },
  bloco: {
    marginBottom: "16px",
  },
  subtitulo: {
    marginBottom: "8px",
  },
  avaliacao: {
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "8px",
    marginBottom: "8px",
  },
};

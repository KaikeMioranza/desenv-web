import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Article from "./components/Article";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Fotter";

function App() {
  const post = {
    titulo: "Descobrindo algo que não deve-se usar",
    autor: "Kaike Mioranza",
    data: {
      datetime: "2026-02-24",
      exibicao: "24 de fevereiro de 2026",
    },
    conteudo: [
      "Você nunca deve usar um Ransomware no seu computador! motivo?",
      "Abrir um arquivo de ransomware é um dos erros mais fatais que você pode cometer.",
      "O ransomware sequestra seus dados e cobra dinheiro.",
    ],
  };

  return (
    <>
      <Header />
      <Navigation />
      <div className="container">
        <main>
          <Article
            titulo={post.titulo}
            autor={post.autor}
            data={post.data}
            conteudo={post.conteudo}
          />
        </main>
        <Sidebar />
      </div>
      <Footer />
    </>
  );
}

export default App;
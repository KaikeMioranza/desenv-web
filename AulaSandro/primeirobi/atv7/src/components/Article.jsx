function Article({ titulo, autor, data, conteudo }) {
  return (
    <article>
      <div>
        <h2>{titulo}</h2>
        <p>Autor: {autor}</p>
        <p>
          Data publicação: <time dateTime={data.datetime}>{data.exibicao}</time>
        </p>
        {conteudo.map((paragrafo, index) => (
          <p key={index}>{paragrafo}</p>
        ))}
        <figure>
          <img src="ransomware.jpg" alt="Ransomware" />
          <figcaption>Fig 1 - Imagem ilustrativa</figcaption>
        </figure>
      </div>
    </article>
  );
}

export default Article;
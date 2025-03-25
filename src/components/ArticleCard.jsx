import React from 'react'

const ArticleCard = ({article}) => {

  return (
    <article className="mod-caja-nota lugares w-100-mobile">
      <section className="cont-figure figure content-pic">
        <a href={`/noticia/${article.title}`} className="figure">
        <picture className="content-pic picture">
          <img className="content-img" src={article.image} alt={article.title} />
        </picture>
        </a>
      </section>


      <div className="mod-caja-nota__descrip">
        <h2 className="com-title-acu">
          <b>{article.title}</b>
        </h2>
        <h4 className="com-date">{article.date}</h4>
      </div>
    </article>
  )
}

export default ArticleCard

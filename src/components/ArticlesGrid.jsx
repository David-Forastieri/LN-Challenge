import React from 'react'
import { useArticleContext } from "../context/ArticleContext"
import ArticleCard from "./ArticleCard"

const ArticlesGrid = () => {

  const { articles } = useArticleContext()

  return (
    <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </section>
  )
}

export default ArticlesGrid

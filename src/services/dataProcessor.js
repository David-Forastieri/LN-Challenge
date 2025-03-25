// src/services/dataProcessor.js
export const processArticles = async (rawArticles) => {
  let {articles} = rawArticles

  // Agrupar, totalizar 
  const tagMap = articles.reduce((accumulator, article) => {
    article.taxonomy.tags.forEach((tag) => {
      accumulator[tag.slug] = accumulator[tag.slug] || { ...tag, count: 0 }
      accumulator[tag.slug].count += 1
    })
    return accumulator
  }, {})


  // Ordenar tags por cantidad de articulos
  const sortedTags = Object.values(tagMap).sort(
    (a, b) => b.count - a.count
  )

  // Filtrar articulos con subtype 7
  const filteredArticles = articles.filter(
    (article) => article.subtype === '7'
  )

  // Procesar imagenes y fechas
  const processedArticles = filteredArticles.map((article) => ({
    id: article._id,
    image: article.promo_items.basic.url,
    title: article.headlines.basic,
    date: formatDate(article.display_date),
  }))

  return {
    articles: processedArticles,
    tags: sortedTags.slice(0, 10), // Toma los primeros 10 tags
  }
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

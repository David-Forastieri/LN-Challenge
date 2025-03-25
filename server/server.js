import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../src/App.jsx'
import { getArticles } from '../src/services/api.js'
import { processArticles } from '../src/services/dataProcessor.js'
import { ArticleProvider } from '../src/context/ArticleContext.js'

const app = express()
app.use(express.static('dist/public'))

app.get('/', async (req, res) => {
  try {
    const rawArticles = await getArticles()
    const { articles, tags } = await processArticles(rawArticles)

    // Renderizar React a HTML estático
    const appHtml = renderToString(
      <ArticleProvider initialArticles={articles} initialTags={tags}>
        <App />
      </ArticleProvider>
    )

    const serializedData = `
    <script>
      window.__INITIAL_DATA__ = {
        articles: ${JSON.stringify(articles)},
        tags: ${JSON.stringify(tags)}
      };
    </script>
  `

    // Inyecta HTML en la plantilla
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Challenge LN</title>
          <link rel="stylesheet" href="https://especiales.lanacion.com.ar/arc-css/css/site.css">
        </head>
        <body>
          <div id="root">${appHtml}</div>
          ${serializedData}
          <script src="/bundle.js"></script>
        </body>
      </html>
    `

    res.send(html)
  } catch (error) {
    console.error('Error detallado:', error)
    res.status(500).send('Error en el servidor aqui')
  }
})

app.listen(3000, () => console.log('Servidor SSR en http://localhost:3000'))

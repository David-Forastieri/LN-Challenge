import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import { ArticleProvider } from './context/ArticleContext.js'

const initialData = window.__INITIAL_DATA__ || { articles: [], tags: [] }

const root = document.getElementById('root')
hydrateRoot(root, 
  <ArticleProvider initialArticles={initialData.articles} initialTags={initialData.tags}>
    <App />
  </ArticleProvider>)

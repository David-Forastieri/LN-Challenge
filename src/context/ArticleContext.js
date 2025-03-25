import React, { createContext, useContext, useState } from 'react';

const ArticleContext = createContext()

export const ArticleProvider = ({ children, initialArticles = [], initialTags = [] }) => {
  const [articles, setArticles] = useState(initialArticles)
  const [tags, setTags] = useState(initialTags)

  return (
    <ArticleContext.Provider value={{ articles, tags }}>
      {children}
    </ArticleContext.Provider>
  )
}

export const useArticleContext = () => useContext(ArticleContext)

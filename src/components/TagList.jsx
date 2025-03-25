import React, { useEffect } from 'react'
import { useArticleContext } from "../context/ArticleContext"

const TagList = () => {

  const { tags } = useArticleContext()

  useEffect(() => {

  }, [tags])

  if (!tags || !Array.isArray(tags) ||tags.length === 0) {
    return <div>No tags available.</div>
  }

  return (
    <div className="com-secondary-tag hlp-marginBottom-20">
        {tags.map((tag) => (
            <a className="com-link" key={tag.slug} href={`/tema/${tag.slug}`}>{tag.text}</a>
        ))}
    </div>
  )
}

export default TagList

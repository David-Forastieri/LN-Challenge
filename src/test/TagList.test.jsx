import React from 'react'
import { render, screen } from '@testing-library/react'
import TagList from '../components/TagList'
import { ArticleProvider } from '../context/ArticleContext'

test('muestra las etiquetas proporcionadas en el contexto', () => {
  const mockTags = [
    { slug: 'tag1', text: 'Tag 1' },
    { slug: 'tag2', text: 'Tag 2' },
  ]

  render(
    <ArticleProvider initialTags={mockTags}>
      <TagList />
    </ArticleProvider>
  )

  mockTags.forEach((tag) => {
    const tagElement = screen.getByText(tag.text)
    expect(tagElement).toBeInTheDocument()
  })
})

test('muestra un mensaje si no hay etiquetas disponibles', () => {
  render(
    <ArticleProvider initialTags={[]}>
      <TagList />
    </ArticleProvider>
  )

  const noTagsMessage = screen.getByText(/No tags available/i)
  expect(noTagsMessage).toBeInTheDocument()
})


//Para cada etiqueta en mockTags, se busca el texto (tag.text) en el DOM usando screen.getByText().
//Se busca el mensaje "No tags available" en el DOM usando screen.getByText().
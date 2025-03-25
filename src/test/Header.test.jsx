import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../components/Header'
import { ArticleProvider } from '../context/ArticleContext'

test('renderiza el título correctamente', () => {
  const mockTags = ['tag1', 'tag2']

  render(
    <ArticleProvider initialTags={mockTags}>
      <Header />
    </ArticleProvider>
  )

  // Verifica que el título se renderice correctamente
  const titleElement = screen.getByText(/Acumulado Grilla/i)
  expect(titleElement).toBeInTheDocument()
})

import { getArticles } from '../services/api'
import fetchMock from 'jest-fetch-mock'

fetchMock.enableMocks();

describe('getArticles', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  it('debería devolver un array de artículos', async () => {
    const mockResponse = [
      {
        _id: "ZNJ67CCHJNAEBE6IUETWOXMNFM",
        display_date: "2019-12-06T17:50:17.735Z",
        headlines: { basic: "Arroz con Leche" },
        promo_items: {
          basic: {
            resized_urls: [],
            subtitle: "Gentileza: Malcriado-Entre fuegos y vinos",
            title: "Arroz con Leche",
            url: "https://example.com/image.jpg",
          },
        },
        subtype: "7",
        taxonomy: {
          tags: [{}, {}, {}],
        },
        website_url: "/recetas/postres/arroz-con-leche-nid29102019-6/",
      },
    ]

    fetchMock.mockResponseOnce(JSON.stringify(mockResponse))

    const articles = await getArticles()

    // Verificar que la respuesta sea un array
    expect(Array.isArray(articles)).toBe(true)

    // Verificar que cada artículo tenga las propiedades esperadas
    articles.forEach((article) => {
      expect(article).toHaveProperty('_id')
      expect(article).toHaveProperty('display_date')
      expect(article).toHaveProperty('headlines')
      expect(article).toHaveProperty('promo_items')
      expect(article).toHaveProperty('subtype')
      expect(article).toHaveProperty('taxonomy')
      expect(article).toHaveProperty('website_url')
    })
  })
})

export const getArticles = async () => {
  try {
    const response = await fetch('https://jrt2bb3b2nlkw5ozvfcld62wbe0pnifh.lambda-url.us-east-1.on.aws')
    if (!response.ok) throw new Error('Error en getArticles')
    const data = await response.json()
    return data
  } catch (error) {
    console.log('Error fetching data:', error)
    throw error
  }
}

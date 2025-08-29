export const fetchClima = async (url) => {
  try {
    const response = await fetch(url)
    return await response.json()
  } catch (error) {
    throw error
  }
}
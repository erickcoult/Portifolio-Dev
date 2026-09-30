import axios from 'axios'

type HygraphResponse<T> = {
  data?: T
  errors?: {
    message: string
  }[]
}

export const fetchHygraphQuery = async <T>(
  query: string,
  _revalidate?: number,
): Promise<T> => {
  const url = process.env.HYGRAPH_URL

  if (!url) {
    throw new Error('HYGRAPH_URL is not defined')
  }

  try {
    const response = await axios.post<HygraphResponse<T>>(
      url,
      {
        query,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    )

    if (response.data.errors?.length) {
      throw new Error(
        `Hygraph GraphQL error: ${response.data.errors
          .map((error) => error.message)
          .join(', ')}`,
      )
    }

    if (!response.data.data) {
      throw new Error('Hygraph returned no data')
    }

    return response.data.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Hygraph request error:', error.message)
      console.error('Status:', error.response?.status)
      console.error('Response:', error.response?.data)
    }

    throw error
  }
}

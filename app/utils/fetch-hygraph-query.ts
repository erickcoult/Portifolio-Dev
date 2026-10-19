type HygraphResponse<T> = {
  data?: T
  errors?: {
    message: string
  }[]
}

export const fetchHygraphQuery = async <T>(
  query: string,
  revalidate = 60,
): Promise<T> => {
  const url = process.env.HYGRAPH_URL

  if (!url) {
    throw new Error('HYGRAPH_URL is not defined')
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ query }),
    next: { revalidate },
  })

  if (!response.ok) {
    const body = await response.text()
    console.error('Hygraph request error:', response.status, body)
    throw new Error(`Hygraph request failed with status ${response.status}`)
  }

  const json = (await response.json()) as HygraphResponse<T>

  if (json.errors?.length) {
    throw new Error(
      `Hygraph GraphQL error: ${json.errors
        .map((error) => error.message)
        .join(', ')}`,
    )
  }

  if (!json.data) {
    throw new Error('Hygraph returned no data')
  }

  return json.data
}

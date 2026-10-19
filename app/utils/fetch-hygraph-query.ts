type HygraphResponse<T> = {
  data?: T
  errors?: {
    message: string
  }[]
}

/**
 * Runs a GraphQL query against Hygraph.
 *
 * `revalidate` (in seconds) tells Next.js how long it may reuse the result:
 * - 0  → fetch fresh data on every request (Hygraph edits show up immediately)
 * - 60 → reuse for up to 60s, then refresh in the background (default)
 *
 * It uses the native `fetch` on purpose: Next.js only applies `revalidate`
 * to `fetch`. With axios the value was ignored and the data stayed frozen
 * at whatever Hygraph returned during the last deploy.
 */
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

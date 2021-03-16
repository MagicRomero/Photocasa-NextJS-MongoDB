import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/client'
import Head from 'next/head'

const SecretPage = (): JSX.Element => {
  const [session, loading] = useSession()
  const [content, setContent] = useState(null)

  useEffect(() => {
    fetchData()
  }, [session])

  const fetchData = async () => {
    const response = await fetch('/api/secret')

    const json = await response.json()

    setContent(json)
  }

  return (
    <>
      <Head>
        <title>Secret page</title>
      </Head>
      <section>
        {loading && <p>James perkings sucks</p>}
        {!session ? (
          <h1>SIGN IN OSTIA</h1>
        ) : (
          <article>
            YA ESTAS EN LA PUTA SECRET PAGE
            <pre>
              <code>{JSON.stringify(session, null, 4)}</code>
            </pre>
          </article>
        )}
      </section>
    </>
  )
}

export default SecretPage

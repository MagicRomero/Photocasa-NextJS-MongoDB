import Head from 'next/head'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'

export const Home = (): JSX.Element => {
  const [session, loading] = useSession()

  const authHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    switch (event.currentTarget.name) {
      case 'sign-in':
        signIn()
        break

      case 'sign-out':
        signOut()
        break
    }
  }
  return (
    <div className="container">
      <Head>
        <title>Photocasa - Find your dream home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {!session ? (
          <>
            <h2>Not signed in </h2>
            <button name="sign-in" onClick={authHandler}>
              Sign in
            </button>
          </>
        ) : (
          <>
            <h2>Sign in as {session.user.name}</h2>
            <img src={session.user.image} alt="user-image" />
            <Link href="/secret">SECRET PAGE</Link>
            <button name="sign-out" onClick={authHandler}>
              Sign out
            </button>
          </>
        )}
      </main>
    </div>
  )
}

export default Home

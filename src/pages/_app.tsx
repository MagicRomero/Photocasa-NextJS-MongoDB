import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'
import { Provider as AuthProvider } from 'next-auth/client'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <AuthProvider session={pageProps.session}>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}

export default MyApp

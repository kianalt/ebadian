// import { useRouter } from 'next/router'
// import 'styles/globals.css'
// import 'styles/custom.css'

// import 'bootstrap'
import 'fonts/vazir.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />

        <link rel="icon" type="image/png" href="/logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

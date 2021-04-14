import "../styles/index.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title key="title">Brando Vidal</title>
        <meta key="description" name="description" content="Contactame!" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z7LNPCFK06"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; const dataLayer =
            window.dataLayer || []; function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date()); gtag('config', 'G-Z7LNPCFK06');`
          }}
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

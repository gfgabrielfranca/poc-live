import App, { AppProps, AppContext } from 'next/app'
import "../../styles/global.css"

export type Theme = {
  logo: string
  livePlaceholder: string
  banner: string
  primaryColor: string
  backgroundColor: string
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  const response = await fetch(`https://theme-beta.vercel.app/${process.env.CLIENT_ID}`);
  const theme: Theme = await response.json();

  const pageProps = { ...appProps.pageProps, theme };

  return { pageProps }
}

export default MyApp
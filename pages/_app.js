import App from 'next/app'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const pageProps = {
    ...appProps.pageProps,
    host: appContext.ctx.req.headers.host
  };

  return { pageProps }
}

export default MyApp
import '../styles/globals.css';
import Header from 'components/header/index';
import { ThemeProvider } from '@emotion/react';
import GlobalStyles from 'components/global-styles/GlobalStyles';
import theme from '../theme';

import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import withRedux from 'next-redux-wrapper';
import { Provider, useSelector } from 'react-redux';
import store from '../redux/store';

function MyApp({ Component, pageProps }) {
  const { isDark } = useSelector(({ nav }) => nav);

  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header isDark={isDark} />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  );
}

// export default MyApp;
const makStore = () => store;
export default withRedux(makStore)(MyApp);

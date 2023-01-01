import '../styles/globals.css'
import Layout from '../components/Layout';
import { ThemeProvider } from '@mui/material';
import { theme } from '../components/theme';
import { Provider } from 'react-redux';
import { store } from '../store';
export default function App({ Component, pageProps }) {
  return <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </Provider>
}

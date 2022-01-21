import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { Reader } from 'components/Reader/Reader';

import publications from './publications.json';
const theme = {};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Reader items={publications} />
    </ThemeProvider>
  );
}

export default App;

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { Reader } from 'components/Reader/Reader';
import { Example1 } from 'components/Example1';
import publications from './publications.json';
const theme = {};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Example1 />
      <Reader items={publications} />
    </ThemeProvider>
  );
}

export default App;

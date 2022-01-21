import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { Reader } from 'components/pages/Reader';
import { Layout } from 'components/Layout';

import publications from './publications.json';
const theme = {};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Reader items={publications} />} />
          <Route path="create" element={<div>CREATE</div>} />
        </Route>
      </Routes>
      {/* <Reader items={publications} /> */}
    </ThemeProvider>
  );
}

export default App;

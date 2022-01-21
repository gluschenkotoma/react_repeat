import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { Reader } from 'components/pages/Reader';
import { Layout } from 'components/Layout';
import { CreatePublication } from 'components/pages/CreatePublication';

const theme = {};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Reader />} />
          <Route path="create" element={<CreatePublication />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

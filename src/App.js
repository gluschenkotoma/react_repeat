import { Layout } from 'components/Layout';
import { Routes, Route } from 'react-router-dom';
import { ListPage } from 'pages';

function App() {
  return (
    // МАРШРУТЫ ПОД НАВИГАЦИЮ
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="preview" element={<div>Preview Page</div>}></Route>
        <Route path="list" element={<ListPage />}></Route>
        <Route path="create" element={<div>Create Page</div>}></Route>
      </Route>
    </Routes>
  );
}

export default App;

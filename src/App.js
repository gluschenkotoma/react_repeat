import { Layout } from 'components/Layout';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ListPage } from 'pages';
import { ItemPage } from 'pages';

function App() {
  return (
    // МАРШРУТЫ ПОД НАВИГАЦИЮ
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="preview" element={<div>Preview Page</div>} />
        <Route path="list" element={<ListPage />} />
        <Route path="list/:itemId" element={<ItemPage />} />
        <Route path="create" element={<div>Create Page</div>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;

// если нужно сделать отображение <ItemPage/>на той же странице ListPage а
// не на отдельной странице, то нужно поместить Route в Route
//  <Route path="list" element={<ListPage />}>
//        Route path="list/:itemId" element={<ItemPage/>} />
// </Route >
// + <Outlet/> в ListPage для ренда
// вложеная страница делается через Outlet,
// и ставится в том месте где в родительской странице её рендерить

// Что бы после ввода в поискстроке абракадабры редиректнуло на /
// <Route path="*" element={<Navigate to="/" />} />

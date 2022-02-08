import { lazy } from 'react'; // динамический импорт
import { Routes, Route, Navigate } from 'react-router-dom';
// import { ListPage, ItemPage, AddItemPage, PreviewPage } from 'pages'; //статический импорт
import { Layout } from 'components/Layout';

// для именованых экспортов

const loader = componentName => {
  return lazy(() =>
    import(`../pages/${componentName}`).then(module => ({
      default: module[componentName],
    }))
  );
};
const PreviewPage = loader('PreviewPage');
const ListPage = loader('ListPage');
const ItemPage = loader('ItemPage');
const AddItemPage = loader('AddItemPage');

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="preview" element={<PreviewPage />} />
        <Route path="list" element={<ListPage />} />
        <Route path="list/:itemId" element={<ItemPage />} />
        <Route path="create" element={<AddItemPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

// lazy (()=>import('../pages/SuperPage)) - возвращает промис в котором есть свойство дефолт

// РАЗДЕЛЕНИЕ НА ЧАНКИ

//для дефолтных
// const ListPage = lazy(()=>import('../pages/ListPage'))

// для именованых экспортов, возврат обьекта со свойством default
// const ListPage = lazy(() =>import('../pages/ListPage').then(module => ({ default: module.ListPage })));

// Suspense - обертка всех <Routes>
// <Suspense fallback=''><Routes>....</Suspense> ||
//<Suspense fallback=''><Outlet /> </Suspense>

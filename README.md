# Getting Started with Create React App

````
 Рендерится только тогда если в
  <Route path="/" element={<Layout />}
  влоожены

  <Route path="preview" element={<div>Preview Page</div>}></Route> <Route path="list" element={<div>List Page</div>}></Route>
  <Route path="create" element={<div>Create Page</div>}></Route>
и
<Nav>
 <Link to="/preview">PREVIEW</Link>
 <Link to="/list">LIST</Link>
 <Link to="/create">CREATE</Link>
 </Nav>```
````

# <Outlet /> -

```
это маршруты с App в <Layout />
 <Route path="/" element={<Layout />}>
        <Route path="preview" element={<div>Preview Page</div>}></Route>
        <Route path="list" element={<div>List Page</div>}></Route>
        <Route path="create" element={<div>Create Page</div>}></Route>
      </Route>
```

# pages

````компоненты для
<Route path="list" element={<COMPONENTFROMPAGE/>}></Route>```
````

# pages-index.js риэкспорт

```
- index.js-export * from './ListPage';
- App->import { ListPage } from 'pages';
- компонент -export const ListPage = () => {
  return <main>HEreListpage</main>;};

```

import { Loader } from 'components/Loader';

import { Link } from 'react-router-dom';
import { useFetchItems } from 'hooks';

export const ListPage = () => {
  const { items, loading, error } = useFetchItems(); //вызов кастомного хука useFetchItems
  return (
    <main>
      <h1>Here lie ListPage</h1>
      {loading && <Loader />}
      {!error && (
        <ol>
          {items.map(item => (
            <li key={item.id}>
              <Link to={`/list/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ol>
      )}
    </main>
  );
};

// при монтировании забрать все публикации- getPublications()

//  getPublications положить в items:
// .then(item => setItems(items)) ||.then(setItems);

// 1 вариант фетча с then
//  useEffect(() => {
//   setLoading(true);
//   getPublications()
//     .then(setItems)
//     .finally(() => setLoading(false));
// }, []);

// 2 c try, catch
//  useEffect(() => {
//    async function fetchItems() {
//      setLoading(true);
//      try {
//        const items = await getPublications();
//        setItems(items);
//      } catch (error) {
//        console.log(error.message);
//      } finally {
//        setLoading(false);
//      }
//    }
//    fetchItems();
//  }, []);

// Обернуть в Link, что бы было в виде ссылки и вело по ID +маршрут с динамическим параметром
//  <Link to={`/list/${item.id}`}>{item.title}</Link>;

// !error && - если нет ерора то рендерь <ol...

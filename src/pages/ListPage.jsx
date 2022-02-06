import { Loader } from 'components/Loader';
import { useState, useEffect } from 'react';
import { getPublications } from 'services/publicationsApi';

// КАСТОМНЙ ХУК useFetchItems
const useFetchItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchItems() {
      setLoading(true);
      try {
        const items = await getPublications();
        setItems(items);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchItems();
  }, []);
  return { items, loading }; //возвращает из себя
};

export const ListPage = () => {
  const { items, loading } = useFetchItems(); //вызов кастомного хука useFetchItems
  return (
    <main>
      <h1>Here lie ListPage</h1>
      {loading && <Loader />}
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
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

import { useState, useEffect } from 'react';
import { getPublications } from 'services/publicationsApi';
export const ListPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // getPublications().then(item => setItems(items)); кратко ниже
    getPublications().then(setItems);
  }, []);

  return (
    <main>
      <h1>Here lie ListPage</h1>
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

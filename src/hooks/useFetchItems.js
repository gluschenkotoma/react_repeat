// КАСТОМНЙ ХУК useFetchItems

import { useState, useEffect } from 'react';
import { getPublications } from 'services/publicationsApi';

export const useFetchItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchItems() {
      setLoading(true);
      try {
        const items = await getPublications();
        setItems(items);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchItems();
  }, []);
  return { items, loading, error }; //возвращает из себя
};

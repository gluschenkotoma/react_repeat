import { useEffect, useState } from 'react';
import { Controls } from 'components/Reader/Controls';
import { Progress } from 'components/Reader/Progress';
import { Publication } from 'components/Reader/Publication';
import { getPublications, deletePublication } from 'services/publicationsApi';

export const Reader = () => {
  // state = {
  //     index: 0,
  //     items: [],
  //     isLoading: false,
  //   };
  const [index, setIndex] = useState(0);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //  changeIndex = value => {
  //     this.setState(state => ({ index: state.index + value }));
  //   };
  const changeIndex = value => {
    setIndex(prevIndex => prevIndex + value);
  };

  // deleteItem = async () => {
  //     const { index, items } = this.state;
  //     const currentItem = items[index];
  //     try {
  //       await deletePublication(currentItem.id);
  //       this.setState(state => ({
  //         items: state.items.filter(item => item.id !== currentItem.id),
  //       }));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const deleteItem = async () => {
    const currentItem = items[index];
    try {
      await deletePublication(currentItem.id);
      setItems(items => items.filter(item => item.id !== currentItem.id));
    } catch (error) {
      console.log(error);
    }
  };

  //   async componentDidMount() {
  //     try {
  //       this.setState({ isLoading: true });
  //       const items = await getPublications();
  //       this.setState({ isLoading: false, items });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  useEffect(() => {
    async function fetchPublications() {
      try {
        setIsLoading(true);
        const items = await getPublications();
        setIsLoading(false);
        setItems(items);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPublications();
  }, []);

  const totalItems = items.length;
  const currentItem = items[index];
  const showPlaceholder = !isLoading && totalItems === 0;
  const showReaderUI = !isLoading && totalItems > 0;

  return (
    <div>
      {isLoading && <div>Загрузка...</div>}
      {showPlaceholder && <div>Еще нет публикаций!</div>}
      {showReaderUI && (
        <>
          <button type="button" onClick={deleteItem}>
            Delete publication
          </button>
          <Controls
            current={index + 1}
            total={totalItems}
            onChange={changeIndex}
          />
          <Progress current={index + 1} total={totalItems} />
          {currentItem && <Publication item={currentItem} />}
        </>
      )}
    </div>
  );
};

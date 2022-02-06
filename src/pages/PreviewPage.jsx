import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom'; //
import { Controls } from 'components/Controls';
import { Progress } from 'components/Progress';
import { Publication } from 'components/Publication';
import { useFetchItems } from 'hooks';

export const PreviewPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { items, loading } = useFetchItems(); //забрать весь список на бекенде
  const currentItemPos = Number(searchParams.get('item')); //текущая позиция

  // console.log(currentItemPos);

  const changeIndex = value => {
    setSearchParams({ item: currentItemPos + value }); //изменить url, текущее +1
  };

  // проверка есть ли в нашем урле серчпараметры
  useEffect(() => {
    if (!currentItemPos) {
      setSearchParams({ item: 1 });
    }
  }, [currentItemPos, setSearchParams]);

  const totalItems = items.length;
  const currentItem = items[currentItemPos - 1];
  const showPlaceholder = !loading && totalItems === 0;
  const showReaderUI = !loading && totalItems > 0;

  return (
    <div>
      {loading && <div>Загрузка...</div>}
      {showPlaceholder && <div>Еще нет публикаций!</div>}
      {showReaderUI && (
        <>
          <Controls
            current={currentItemPos}
            total={totalItems}
            onChange={changeIndex}
          />
          <Progress current={currentItemPos} total={totalItems} />
          {currentItem && <Publication item={currentItem} />}
        </>
      )}
    </div>
  );
};

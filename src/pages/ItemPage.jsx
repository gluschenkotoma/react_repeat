import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getPublicationById } from 'services/publicationsApi';
import { Publication } from 'components/Publication';

export const ItemPage = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  return (
    <main>
      <h1>itemId</h1>
      {item && <Publication item={item} />}
    </main>
  );
};

// useParams - получить id (динамический параметр :itemId) из url
// useParams - возвращает обьект динамического параметра
// const p = useParams();
//   console.log(p); //{itemId: '9'}

// получить идентификатор
// const { itemId } = useParams();
//   return <main>{itemId}</main>;

//       {item && <Publication/>} -Publication будет рендерится только тогда когда есть item

// {item && <Publication item={item} />}
// item={item}->
// export const Publication = ({ item }) => {
//   return (
//     <article>
//       <h2>{item.title}</h2>
//       <p>{item.text}</p>
//     </article>
//   );
// };

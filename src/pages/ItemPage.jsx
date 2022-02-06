import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getPublicationById } from 'services/publicationsApi';
import { Publication } from 'components/Publication';
import { FaArrowLeft } from 'react-icons/fa';
import toast from 'react-hot-toast';

export const ItemPage = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    async function fetchItem() {
      try {
        const item = await getPublicationById(itemId);
        setItem(item);
      } catch (error) {
        console.log(error.message);
        toast.error('Publication not found');
      }
    }
    fetchItem();
  }, [itemId]);

  return (
    <main>
      <Link to="/list">
        <FaArrowLeft /> To publications
      </Link>
      <button type="button">Delete Publication</button>
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

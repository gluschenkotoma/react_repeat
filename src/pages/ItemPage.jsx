import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  getPublicationById,
  deletePublication,
} from 'services/publicationsApi';
import { Publication } from 'components/Publication';
import { FaArrowLeft } from 'react-icons/fa';
import { Loader } from 'components/Loader';
import toast from 'react-hot-toast';

export const ItemPage = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false); //для лоудера кнопки
  // метод удаления публикации при клике на button
  const deleteItem = async () => {
    try {
      setIsDeleting(true);
      await deletePublication(itemId);
      toast.success('Публикация успешно удалена!');
      navigate('/list'); //перенаправить на List
    } catch (error) {
      console.log(error);
    } finally {
      setIsDeleting(false);
    }
  };

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

      {item && (
        <>
          <br />
          <button type="button" onClick={deleteItem} dasabled={isDeleting}>
            Delete Publication{isDeleting && <Loader size="sm" />}
          </button>
          <br />
          <hr />
          <Publication item={item} />
        </>
      )}
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

// useNavigate - хук перенаправления

// dasabled={isDeleting} - дисейблим кнопку что бы пользователь не мог на нее нажать

// {isDeleting && <Loader />} - если удаление, значит спиннер

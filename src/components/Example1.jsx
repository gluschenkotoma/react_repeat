import { useState, useEffect } from 'react';

export const Example1 = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (query === '') {
      return;
    }
    //   тут лежит обычно fetch c loadings
    console.log(`Запрос страница: "${page}", поиск: "${query}"`);
  }, [page, query]);

  // кнопка отправить запрос-загрузить
  const onSubmit = e => {
    e.preventDefault();
    // console.log(e.currentTarget.elements.query.value); //value of input
    setQuery(e.currentTarget.elements.query.value); //засетить квери
    setPage(1); //збросить в 1, что бы новый запрос начинался с 1 страницы
  };

  // кнопка загрузить еще
  const onClick = () => {
    setPage(page => page + 1);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="query"></input>
        <button type="submit">Загрузить</button>
        <button type="button" onClick={onClick}>
          Загрузить еще
        </button>
      </form>
    </div>
  );
};

// export class Example1 extends Component {
//   state = {
//     page: 1,
//   };

//   onClick = () => {
//     this.setState(({ page }) => ({ page: page + 1 }));
//   };

//   componentDidUpdate(_, prevState) {
//     if (prevState.page !== this.state.page) {
//       console.log('Виполнить фетч');
//     }
//   }

//   render() {
//     return (
//       <>
//         <button onClick={this.onClick}>Load More</button>
//       </>
//     );
//   }
// }

import { Link, useSearchParams, useLocation } from 'react-router-dom';

export const PageA = () => {
  const location = useLocation();
  const [searchParams, setsearchParams] = useSearchParams();
  console.log(location);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.currentTarget.elements.query.value);
    setsearchParams({ query: e.currentTarget.elements.query.value }); //http://localhost:3000/page-a?query=ddddd
  };

  return (
    <div>
      <Link to="/page-b" state={{ from: location }}>
        To page B
      </Link>
      <hr />
      <form onSubmit={handleSubmit} autoComplete="off">
        <input type="text" name="query" />
        <button type="submit">Set Query</button>
      </form>
    </div>
  );
};

// записать значение query в url по сабмиту
// const [searchParams, setsearchParams] = useSearchParams();
//setsearchParams({ query: e.currentTarget.elements.query.value }); //http://localhost:3000/page-a?query=ddddd

// const location = useLocation();
// <Link to="/page-b">To page B</Link>
// console.log(location);
//{pathname: '/page-a', search: '?query=ddddd', hash: '', state: null, key: 'in03roif'}
// hash: ""
// key: "in03roif"
// pathname: "/page-a"
// search: "?query=ddddd"
// state: null
// [[Prototype]]: Object

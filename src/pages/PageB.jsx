import { useLocation, Link } from 'react-router-dom';

export const PageB = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      here pageB
      <hr />
      <Link to={location?.state?.from ?? '/page-a'}>Go back</Link>
    </div>
  );
};

// location?.state?.from - если в location есть state и свойство from то
//  переход  на from
// в противном случаэ '/page-a'

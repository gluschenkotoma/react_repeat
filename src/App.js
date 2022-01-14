import { Button } from 'components/Button/Button';
import { ProductReviewForm } from 'components/ProductReviewForm/ProductReviewForm';
import { Product } from 'components/Product/Product';
function App() {
  return (
    <>
      <Button type="submit" label="Save data" onClick={e => console.log(e)} />
      <Button label="Do stuff" onClick={() => alert('haha')} />
      <ProductReviewForm />
      <Product />
    </>
  );
}

export default App;

import { GlobalStyle } from 'components/GlobalStyles';
import { Filter } from 'components/Filter/Filter';

// import styled from 'styled-components';

// const Button = styled.button`
//   margin-bottom: 20px;
//   cursor: pointer;

//   &:hover {
//     color: orange;
//     color: ${props => props.qwerty};
//   }
//   :not(:last-child) {
//     margin-right: 20px;
//   }
// `;

function App() {
  return (
    <>
      <GlobalStyle />
      <Filter
        searchable
        isOpen
        options={[
          { value: 'xs', label: 'exstra small' },
          { value: 's', label: 'small' },
          { value: 'm', label: 'medium' },
          { value: 'l', label: 'large' },
          { value: 'xl', label: 'exstra large' },
          { value: 'xxl', label: 'exstra exstra large' },
          { value: 'xxxl', label: 'exstra exstra exstra large' },
        ]}
      />

      {/* <Button type="submit" onClick={() => console.log('click')} qwerty="qwerty">1</Button>
      <Button type="button">2</Button>
      <Button>3</Button> */}
    </>
  );
}

export default App;

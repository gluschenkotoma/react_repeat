import styled from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';

const Wrapper = styled.div`
  padding: 40px;
`;

export const Layout = () => {
  return (
    <Wrapper>
      Layout
      <GlobalStyle />
    </Wrapper>
  );
};

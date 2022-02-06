import styled from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';

import { Outlet, NavLink } from 'react-router-dom';
const Nav = styled.nav`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;
const Link = styled(NavLink)`
  &.active {
    color: tomato;
  }
`;

const Wrapper = styled.div`
  padding: 40px;
`;
// НАВИГАЦИЯ
export const Layout = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Nav>
        <Link to="/preview">PREVIEW</Link>
        <Link to="/list">LIST</Link>
        <Link to="/create">CREATE</Link>
      </Nav>
      {/* для рендэра маршруов с App*/}
      <Outlet />
    </Wrapper>
  );
};

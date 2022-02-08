import styled from 'styled-components';
import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './GlobalStyle';

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
  padding: 12px;
`;

export const Layout = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Nav>
        {/* разметка линков */}
        <Link to="/preview">Preview</Link>
        <Link to="/list">List</Link>
        <Link to="/create">Create</Link>
        <Link to="/page-a">PageA</Link>
        <Link to="/page-b">PageB</Link>
      </Nav>
      {/* рэндер роутов */}
      <Suspense fallback="">
        <Outlet />
      </Suspense>

      <Toaster />
    </Wrapper>
  );
};

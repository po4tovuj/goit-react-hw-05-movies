import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Container, Header, Logo, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <NavLink to={'/'} end>
          <Logo>Home</Logo>
        </NavLink>
        <nav>
          <Link to="/movies">Movies</Link>
          {/* ТУТ БУДЕ ПОШУК ФІЛЬМВ */}
          {/* <Link to="/about">About</Link>
          <Link to="/products">Products</Link> */}
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

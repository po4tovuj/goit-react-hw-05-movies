import { NavLink, useLocation } from 'react-router-dom';
import { NothingFound } from './NotFound.styled';

export const NotFound = ({ children }) => {
  const location = useLocation();
  console.log('location: ', location);

  const message = location.state?.message || '';
  const from = location.state?.from || null;
  return (
    <NothingFound>
      <p>{message ?? children}</p>
      <NavLink to={from ?? '/'}>
        <p> {from ? 'Go back' : 'Go to Home page'}</p>
      </NavLink>
    </NothingFound>
  );
};

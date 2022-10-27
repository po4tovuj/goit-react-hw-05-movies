import styled from '@emotion/styled';
import { NavLinkStyled } from 'CommonStyledComponents/index.styled';

export const ListItem = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
export const LinkStyled = styled(NavLinkStyled)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  color: currentColor;
  text-decoration: none;
`;
export const Image = styled.img`
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  min-height: 329px;
  height: -webkit-fill-available;
  max-height: 300px;
`;
export const MovieTittle = styled.p`
  margin: 0;
  padding: 12px;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

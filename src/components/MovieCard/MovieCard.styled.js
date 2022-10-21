import styled from '@emotion/styled';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { Link } from 'react-router-dom';
export const CardWrapper = styled.div`
  display: grid;
  height: 100%;
  gap: 16px;
`;
export const CardHeader = styled.div`
  grid-row: 1;
  grid-column: 1/3;
  display: flex;
  align-items: center;
`;
export const Icon = styled(MdOutlineArrowBackIosNew)`
  width: 30px;
  height: 30px;
  fill: royalblue;
`;
export const Title = styled.h1``;
export const Side = styled.aside`
  grid-column: 1;
  grid-row: 2;
`;
export const Votes = styled.p`
  display: flex;
  justify-content: space-between;
`;
export const MainDetails = styled.section`
  grid-column: 2;
  grid-row: 2;
`;
export const GenresList = styled.ul`
  padding: 0;
  list-style-type: none;
  display: flex;
  grid-gap: 16px;
	align-items: center;
  &::before{
    content:attr(aria-label);
    // font-size:120%;
    font-weight:bold;
		// margin-left: -15px
`;
export const GenreItem = styled.li`
  border-radius: 30px;
  padding: 4px 16px;
  font-size: 14px;
  background-color: silver;
`;
export const LinksWrapper = styled.section`
  display: flex;
  grid-gap: 16px;
  margin-bottom: 16px;
`;
export const LinkStyled = styled(Link)`
  color: currentColor;
  text-decoration: none;
  display: block;
  padding: 4px 16px;
  border-radius: 10px;
  font-weight: 500;
  background-color: gold;

  &:hover {
    color: currentColor;
    background-color: #f5c518;
  }
`;

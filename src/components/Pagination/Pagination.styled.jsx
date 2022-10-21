import styled from '@emotion/styled';

export const PagesList = styled.ul`
  list-style: none;
  display: flex;
  grid-gap: 8px;
  max-height: 30px;
`;
export const Page = styled.li(
  p => `
  padding: 4px 10px;
  font-size: 15px;
  border-radius: 4px;
  color: white;
  line-height: 20px;
  background-color: ${!p.active ? '#15a4fa' : '#4d5f87'};
	cursor: ${p.active ? 'default' : 'pointer'};
  &:hover {
    background-color: #149ae8;
    color: #2f364a;
  }
`
);
export const PageElipsed = styled(Page)`
  background-color: #4d5f87;
  pointer-events: none;
`;
export const Button = styled.button`
  padding: 4px 10px;
	font-size: 15px;
	border-radius: 4px;
	color: white;
	font-weight: 500;
  background-color: #15a4fa;
	color: white
  cursor: pointer;
	border: none;
	&:hover:not(:disabled) {
		background-color: #149ae8;
    color: #2f364a;
	}
	&:disabled {
		color: rgba(100%, 100%, 100%, 0.6);
	}
`;

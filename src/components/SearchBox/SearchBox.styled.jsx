import styled from '@emotion/styled';
import { HiSearch } from 'react-icons/hi';

export const Wrapper = styled.form`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
  font-size: 15px;
  line-height: 20px;
  // width: 100%;
`;

export const Input = styled.input`
  padding: 4px 32px 4px 8px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.8);
  font: inherit;
`;

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  fill: rgba(0, 0, 0, 0.6);
  right: 6px;
`;

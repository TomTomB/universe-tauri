import type { FC } from 'react';
import styled from 'styled-components';

const StyledShell = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: ${(props) => props.theme.colors.black};
  border: 1px solid ${(props) => props.theme.colors.grey.frame};
  border-top: 2px solid ${(props) => props.theme.colors.gold[5]};
`;

export const Shell: FC = ({ children }) => {
  return <StyledShell> {children} </StyledShell>;
};

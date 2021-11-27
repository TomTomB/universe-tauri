import type { FC } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { invoke } from '@tauri-apps/api/tauri';

const StyledShell = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: ${(props) => props.theme.colors.black};
  border: 1px solid ${(props) => props.theme.colors.grey.frame};
  border-top: 2px solid ${(props) => props.theme.colors.gold[5]};
  overflow: overlay;
`;

export const Shell: FC = ({ children }) => {
  useEffect(() => {
    invoke('close_splashscreen');
  }, []);

  return (
    <StyledShell className="no-distract">
      <Header />
      {children}
    </StyledShell>
  );
};

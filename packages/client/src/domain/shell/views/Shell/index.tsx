import type { FC } from 'react';
import { useEffect } from 'react';
import { TitleBar } from '../../components';
import { invoke } from '@tauri-apps/api/tauri';
import * as C from './styles';

export const Shell: FC = ({ children }) => {
  useEffect(() => {
    invoke('close_splashscreen');
  }, []);

  return (
    <C.StyledShell className="no-distract">
      <TitleBar />
      {children}
    </C.StyledShell>
  );
};

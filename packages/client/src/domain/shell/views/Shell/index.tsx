import type { FC } from 'react';
import { useEffect } from 'react';
import { TitleBar } from '../../components';
import { invoke } from '@tauri-apps/api/tauri';
import * as C from './styles';
import { LCUCredentials } from '@universe/client/types';

export const Shell: FC = ({ children }) => {
  useEffect(() => {
    invoke('close_splashscreen');

    const interval = setInterval(() => {
      invoke<LCUCredentials | {}>('get_league_credentials').then(
        (credentials) => {
          console.log(credentials);
        },
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <C.StyledShell className="no-distract">
      <TitleBar />
      {children}
    </C.StyledShell>
  );
};

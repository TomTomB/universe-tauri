import type { FC } from 'react';
import { useEffect } from 'react';
import { TitleBar } from '../../components';
import { invoke } from '@tauri-apps/api/tauri';
import * as C from './shell.styles';
import type { LCUCredentials } from '@universe/client/types';

export const Shell: FC = ({ children }) => {
  useEffect(() => {
    invoke('close_splashscreen');

    const interval = setInterval(() => {
      invoke<LCUCredentials | Record<string, never>>(
        'get_league_credentials',
      ).then((credentials) => {
        console.log(credentials);
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <C.StyledShell>
      <TitleBar />
      {children}
    </C.StyledShell>
  );
};

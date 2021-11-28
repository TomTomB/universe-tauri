import type { FC } from 'react';
import { SplashScreen } from '../../components';
import * as C from './login.styles';

export const Login: FC = () => {
  return (
    <C.Container>
      <SplashScreen />
      <div>
        <br />
        <br />
        <h1>Login</h1>
      </div>
    </C.Container>
  );
};

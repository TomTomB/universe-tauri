import {
  PlayButton,
  PlayButtonState,
  PrimaryMagicButton,
} from '@universe/client/uikit/forms/components';
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
        <br />
        <br />

        <div style={{ padding: '0 10px' }}>
          <PrimaryMagicButton playSounds> Login </PrimaryMagicButton>

          <br />
          <br />
          <PlayButton
            buttonState={PlayButtonState.PLAY}
            prevButtonState={PlayButtonState.HIDDEN}
            type="button"
          >
            Play
          </PlayButton>
        </div>
      </div>
    </C.Container>
  );
};

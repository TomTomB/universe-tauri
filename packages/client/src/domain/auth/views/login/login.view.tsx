import {
  FlatSelect,
  FramedSelect,
  PrimaryMagicButton,
  Range,
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

          <Range id="id" name="ranger" />

          <FlatSelect
            id="id2"
            items={{
              items: [
                { label: 'Opt', value: 'opt' },
                { label: 'Opt', value: 'op2' },
              ],
              grouped: [],
            }}
            label="Label"
            name="name"
          />
        </div>
      </div>
    </C.Container>
  );
};

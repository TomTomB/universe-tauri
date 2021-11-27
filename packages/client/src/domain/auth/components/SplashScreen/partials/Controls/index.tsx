import type {
  SplashScreenAudioMachine,
  SplashScreenVideoMachine,
} from '@universe/client/uikit/core/machines';
import type { FC } from 'react';
import type { State } from 'xstate';
import * as C from './styles';

interface SplashScreenControlsProps {
  hasIntroVideo?: boolean;
  music: {
    current: State<
      SplashScreenAudioMachine.MachineContext,
      SplashScreenAudioMachine.MachineEvent
    >;
    send: (event: SplashScreenAudioMachine.MachineEvent) => void;
  };
  video: {
    current: State<
      SplashScreenVideoMachine.MachineContext,
      SplashScreenVideoMachine.MachineEvent
    >;
    send: (event: SplashScreenVideoMachine.MachineEvent) => void;
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Controls: FC<SplashScreenControlsProps> = ({ music, video }) => {
  // const playLoginAnimations = useSelector(selectPlayLoginAnimations);
  // const playLoginMusic = useSelector(selectPlayLoginMusic);
  // const dispatch = useAppDispatch();

  return (
    <C.SplashScreenControlsContainer>
      <C.Controls>
        <C.UniverseLogo>Universe</C.UniverseLogo>
        <C.LineVerticalFade />
        {/* <C.ReplayButton
          onClick={() => {
            music.send({ type: 'REPLAY' });
            video.send({ type: 'REPLAY' });
          }}
          disabled={
            music.current.matches('disabled') &&
            video.current.matches('disabled')
          }
        /> */}

        <C.SplashCheckboxContainer>
          {/* <Checkbox
          id="disableLoginAnimations"
          label="Disable Login Animations"
          name="disableLoginAnimations"
          value={!playLoginAnimations}
          onChange={() => {
            dispatch(togglePlayLoginAnimations());
          }}
        />
        <Checkbox
          id="disableLoginMusic"
          label="Disable Login Music"
          name="disableLoginMusic"
          value={!playLoginMusic}
          onChange={() => {
            dispatch(togglePlayLoginMusic());
          }} 
        /> */}
        </C.SplashCheckboxContainer>
      </C.Controls>
    </C.SplashScreenControlsContainer>
  );
};

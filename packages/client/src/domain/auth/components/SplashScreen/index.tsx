import {
  SplashScreenAudioMachine,
  SplashScreenVideoMachine,
} from '@universe/client/uikit/core/machines';
import { useMachine } from '@xstate/react';
import type { FC } from 'react';
import { Controls, Video } from './partials';
import * as C from './styles';

interface SplashScreenContainerProps {
  className?: string;
}

export const SplashScreen: FC<SplashScreenContainerProps> = ({ className }) => {
  // const playLoginAnimations = useSelector(selectPlayLoginAnimations);
  // const playLoginMusic = useSelector(selectPlayLoginMusic);

  const [currentMusic, sendMusic] = useMachine(
    SplashScreenAudioMachine.machine.withContext({
      hasIntroAudio: false,
      isAudioEnabled: true,
      introAudio: null,
      loopAudio: null,
    }),
  );

  const [currentVideo, sendVideo] = useMachine(
    SplashScreenVideoMachine.machine.withContext({
      hasIntroVideo: false,
      isVideoEnabled: true,
      introVideo: null,
      loopVideo: null,
    }),
  );

  // useEffect(() => {
  //   sendMusic({ type: 'SET_ENABLED', enabled: playLoginMusic });
  // }, [playLoginMusic, sendMusic]);

  // useEffect(() => {
  //   sendVideo({ type: 'SET_ENABLED', enabled: playLoginAnimations });
  // }, [playLoginAnimations, sendVideo]);

  return (
    <C.StyledSplashScreenContainer className={className}>
      <Video
        music={{
          loop: '/music/music-splash-starguardian2017-alt.ogg',
          current: currentMusic,
          send: sendMusic,
        }}
        picture="/images/image-splash-starguardian2017.jpg"
        video={{
          loop: '/videos/video-splash-starguardian2017.webm',
          current: currentVideo,
          send: sendVideo,
        }}
      />
      <Controls
        hasIntroVideo
        music={{ current: currentMusic, send: sendMusic }}
        video={{ current: currentVideo, send: sendVideo }}
      />
    </C.StyledSplashScreenContainer>
  );
};

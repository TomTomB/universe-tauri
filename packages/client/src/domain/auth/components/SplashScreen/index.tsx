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
    SplashScreenAudioMachine.machine,
    {
      context: {
        hasIntroAudio: false,
        isAudioEnabled: false,
        introAudio: null,
        loopAudio: null,
      },
    },
  );

  const [currentVideo, sendVideo] = useMachine(
    SplashScreenVideoMachine.machine,
    {
      context: {
        hasIntroVideo: false,
        isVideoEnabled: true,
        introVideo: null,
        loopVideo: null,
      },
    },
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
          loop: '/music/music-splash-season2018_post.ogg',
          current: currentMusic,
          send: sendMusic,
        }}
        picture="/images/image-splash-season2018.jpg"
        video={{
          loop: '/videos/video-splash-season2018.webm',
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

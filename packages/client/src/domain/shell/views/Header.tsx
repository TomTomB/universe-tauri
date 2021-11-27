import styled from 'styled-components';
import { appWindow } from '@tauri-apps/api/window';
import TitleBarButton, {
  TitleBarButtonBase,
} from './TitleBarButton/TitleBarButton';

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 32px;
  display: grid;
  justify-content: end;
  z-index: 10000;
`;

const TitleBarControls = styled.div`
  align-self: center;
  position: relative;
  top: -1px;

  ${TitleBarButtonBase} {
    :not(:last-of-type) {
      margin-right: 15px;
    }

    :last-of-type {
      margin-right: 10px;
    }
  }
`;

export const Header = () => {
  const minimizeWindow = () => {
    appWindow.minimize();
  };

  const closeWindow = () => {
    appWindow.close();
  };

  return (
    <StyledHeader data-tauri-drag-region>
      <TitleBarControls>
        <TitleBarButton
          label="Minimize"
          type="minimize"
          onClick={minimizeWindow}
        />
        <TitleBarButton
          label="Settings"
          type="settings"
          onClick={() => {
            console.log('Settings');
          }}
        />
        <TitleBarButton label="Close" type="close" onClick={closeWindow} />
      </TitleBarControls>
    </StyledHeader>
  );
};

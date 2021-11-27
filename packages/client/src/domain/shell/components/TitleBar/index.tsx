import { appWindow } from '@tauri-apps/api/window';
import { TitleBarButton } from './partials';
import * as C from './styles';

export const TitleBar = () => {
  const minimizeWindow = () => {
    appWindow.minimize();
  };

  const closeWindow = () => {
    appWindow.close();
  };

  return (
    <C.StyledHeader data-tauri-drag-region>
      <C.TitleBarControls>
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
      </C.TitleBarControls>
    </C.StyledHeader>
  );
};

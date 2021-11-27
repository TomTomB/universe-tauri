import controlClose from './assets/control-close.png';
import controlHelp from './assets/control-help.png';
import controlHide from './assets/control-hide.png';
import controlSettings from './assets/control-settings.png';
import styled from 'styled-components';
import type { FC } from 'react';

export const TitleBarButtonBase = styled.button`
  height: 18px;
  width: 18px;
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  background-color: ${(props) => props.theme.colors.grey[1]};

  :hover,
  :focus-visible {
    background-color: ${(props) => props.theme.colors.gold[1]};
  }
  :active {
    background-color: ${(props) => props.theme.colors.grey[2]};
  }
`;

const TitleBarButtonClose = styled(TitleBarButtonBase)`
  -webkit-mask-image: url(${controlClose});
`;

const TitleBarButtonHide = styled(TitleBarButtonBase)`
  -webkit-mask-image: url(${controlHide});
`;

const TitleBarButtonHelp = styled(TitleBarButtonBase)`
  -webkit-mask-image: url(${controlHelp});
`;

const TitleBarButtonSettings = styled(TitleBarButtonBase)`
  -webkit-mask-image: url(${controlSettings});
`;

interface TitleBarButtonProps {
  label: string;
  type: 'close' | 'minimize' | 'help' | 'settings';
  onClick: () => void;
}

const TitleBarButton: FC<TitleBarButtonProps> = ({ label, type, onClick }) => {
  switch (type) {
    case 'close':
      return (
        <TitleBarButtonClose
          type="button"
          aria-label={label}
          onClick={onClick}
        />
      );
    case 'minimize':
      return (
        <TitleBarButtonHide
          type="button"
          aria-label={label}
          onClick={onClick}
        />
      );
    case 'settings':
      return (
        <TitleBarButtonSettings
          type="button"
          aria-label={label}
          onClick={onClick}
        />
      );
    case 'help':
      return (
        <TitleBarButtonHelp
          type="button"
          aria-label={label}
          onClick={onClick}
        />
      );
    default:
      return <></>;
  }
};

export default TitleBarButton;

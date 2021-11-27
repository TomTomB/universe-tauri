import styled from 'styled-components';
import { TitleBarButtonBase } from './partials/TitleBarButton/styles';

export const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 32px;
  display: grid;
  justify-content: end;
  z-index: 10000;
`;

export const TitleBarControls = styled.div`
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

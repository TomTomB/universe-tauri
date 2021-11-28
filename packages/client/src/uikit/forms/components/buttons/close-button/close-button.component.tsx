import * as E from './close-button.styles';
import type { FC } from 'react';
import type { ButtonProps } from '../button.types';

export interface CloseButtonProps extends ButtonProps {
  btnStyle?: E.CloseButtonStyle;
  label?: string;
}

export const CloseButton: FC<CloseButtonProps> = ({
  btnStyle,
  type,
  className,
  disabled,
  label,
  onClick,
}) => {
  return (
    <E.StyledCloseButton
      aria-label={label}
      btnStyle={btnStyle}
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      <E.Contents>
        <E.CloseIcon btnStyle={btnStyle} />
      </E.Contents>
    </E.StyledCloseButton>
  );
};

import dropdownCheck from '../../../assets/images/dropdown-check.png';
import styled, { css } from 'styled-components';

export interface StyledFlatSelectOptionProps {
  selected?: boolean;
}

export const StyledFlatSelectOption = styled.div<StyledFlatSelectOptionProps>`
  font-family: LoL Display;
  font-kerning: normal;
  -webkit-font-feature-settings: 'kern' 1;
  -webkit-font-smoothing: antialiased;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.0375em;

  height: 40px;
  line-height: 40px;

  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  color: #cdbe91;
  cursor: pointer;
  position: relative;
  border-bottom: thin solid #1e2328;
  padding: 0 30px 0 10px;
  outline: 0;

  &:hover,
  &:focus {
    color: #f0e6d2;
    background-color: #1e2328;
  }

  &:active {
    color: #463714;
    background-color: rgba(30, 35, 40, 0.5);
  }

  ${({ selected }) =>
    selected &&
    css`
      color: #f0e6d2;
      background-color: #1e2328;
      &::after {
        background: url(${dropdownCheck}) center no-repeat;
        width: 14px;
        height: 11px;
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translate(0, -50%);
        content: '';
      }
    `}

  &[data-disabled] {
    color: #888;
    cursor: default;
    pointer-events: none;

    &:hover {
      color: #888;
      background-color: rgba(30, 35, 40, 0);
    }
  }
`;

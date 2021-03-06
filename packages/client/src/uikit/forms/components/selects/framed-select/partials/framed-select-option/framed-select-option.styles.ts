import dropdownCheck from '../../../assets/images/dropdown-check.png';
import dropdownSelectDot from '../../../assets/images/dropdown-select-dot.png';
import styled, { css } from 'styled-components';

export interface StyledFramedSelectOptionProps {
  selected?: boolean;
  sortingActive?: boolean;
}

export const StyledFramedSelectOption = styled.div<StyledFramedSelectOptionProps>`
  align-items: center;
  border-top: 1px solid #1f2123;
  color: #cdbe91;
  cursor: pointer;
  display: block;
  min-height: 30px;
  line-height: 30px;
  margin: 0;
  overflow: hidden;
  padding: 2px 9px 2px 7px;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  outline: none;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.gold[1]};
    background-color: ${(props) => props.theme.colors.grey[4]};
  }

  &:active {
    color: ${(props) => props.theme.colors.gold[6]};
    background-color: ${(props) => props.theme.colors.grey.frame50};
  }

  ${({ selected }) =>
    selected &&
    css`
      padding-right: 31px;
      &::after {
        background: url(${dropdownCheck}) center no-repeat;
        width: 14px;
        height: 11px;
        position: absolute;
        right: 13px;
        top: 50%;
        transform: translate(0, -50%);
        content: '';
      }
    `}

  ${({ sortingActive }) =>
    sortingActive &&
    css`
      border: 1px solid transparent;
      border-image: linear-gradient(
        to bottom,
        #ddcea1 0%,
        #cab568 50%,
        #73561e 100%
      );
      border-image-slice: 1;
      color: ${(props) => props.theme.colors.gold[1]};
      padding-left: 15px;
      background: url(${dropdownSelectDot}) no-repeat 7px 10px;
      background-color: #010a13;
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

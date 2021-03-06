import styled from 'styled-components';

export const StyledButtonGroup = styled.div`
  --border-color: #614a1f;

  position: relative;
  background-color: #010a13;
  padding: 0 4px;
  display: inline-flex;

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 10px;
  }

  &::before {
    left: 0;
    bottom: 0;
    border-right: 2px solid var(--border-color);
    border-top: 2px solid transparent;
    height: 10px;
  }

  &::after {
    right: 0;
    bottom: 0;
    border-left: 2px solid var(--border-color);
    border-top: 2px solid transparent;
    height: 10px;
  }

  button + button {
    margin-left: 0.125rem;
  }
`;

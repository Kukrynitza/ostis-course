import styled from 'styled-components';
import { Spinner } from 'ostis-ui-lib';

export const Wrap = styled.div<{ show?: boolean }>`
  position: absolute;
  height: calc(100vh - 80px - 36px);

  display: flex;
  justify-content: center;
  align-items: center;

  display: ${(props) => (props.show ? 'block' : 'none')};
`;

export const StyledSpinner = styled(Spinner)`
  position: absolute;
  left: 50%;
  top: 50%;

  transform: translate3d(-50%, -50%, 0);
`;

export const Frame = styled.iframe`
  width: 100%;
  height: 100%;

  margin: -7px;

  border: 0;
`;

export const Popup = styled.div<{ isClear?: boolean }>`
  width: ${(props) => (props.isClear ? '383px' : '344px')};
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #323232;
  b {
    font-weight: 500;
  }
`;

export const ExportBar = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 10;
  display: flex;
  gap: 4px;
`;

export const ExportButton = styled.button`
  padding: 4px 8px;
  font-size: 14px;
  font-weight: 400;
  color: var(--color-silver);
  border: none;
  border-radius: 4px;
  background: transparent;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;

  &:hover {
    background: var(--color-decomposition-hover);
    color: var(--color-navy-blue);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      background: transparent;
      color: var(--color-silver);
    }
  }
`;

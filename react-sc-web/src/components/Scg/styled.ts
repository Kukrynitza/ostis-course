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
  top: 8px;
  right: 8px;
  z-index: 10;
  display: flex;
  gap: 4px;
  margin-bottom: 30px;
`;

export const ExportButton = styled.button`
  padding: 4px 10px;
  font-size: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

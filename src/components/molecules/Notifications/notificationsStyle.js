import styled, { css } from 'styled-components';
import { BottomToTop } from '../../../styles/atoms/animations';
import { actions } from '../../../styles/atoms/colors';

export const NotificationsStyle = styled.div`
  position: fixed;
  top: 50px;
  right: 0;
  margin: auto;
  z-index: 2;
`;

const NotificationSuccess = css`
  border-left: 10px solid ${actions.success};
`;

const NotificationError = css`
  border-left: 10px solid ${actions.error};
`;

export const NotificationStyle = styled.div`
  position: relative;
  box-sizing: border-box;
  margin: 20px;
  width: 300px;
  height: 100px;
  background-color: #fcfcfc;
  border-radius: 5px;
  padding: 15px 10px;
  animation: ${BottomToTop} 1s alternate;

  ${(props) => props.type === 'success' && NotificationSuccess}
  ${(props) => props.type === 'error' && NotificationError}
  ${(props) => props.type === 'error-customized' && NotificationError}

  & .notification-title {
    font-weight: 900;
  }

  & .notification-message {
    margin-top: 5px;
    font-size: 14px;
  }

  & .close-notification {
    position: absolute;
    right: 10px;
    top: 5px;
    cursor: pointer;
  }
`;

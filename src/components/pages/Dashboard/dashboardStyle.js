import styled, { css } from 'styled-components';
import { actions } from '../../../styles/atoms/colors';
import { displays } from '../../../styles/atoms/variables';

export const DashboardStyle = styled.div`
  & .markets {
    ${displays.flexWrap}
  }
`;

const MarketActive = css`
  color: ${actions.success};
`;

export const Market = styled.a`
  ${displays.flexColumn}
  width: 200px;
  height: 200px;
  border: 1px solid;
  border-radius: 15px;
  margin-right: 20px;
  padding: 10px;
  overflow: hidden;
  cursor: pointer;

  ${(props) => props.active && MarketActive}

  & img {
    width: 180px;
    height: 180px;
  }

  :hover {
    text-decoration: none;
    & img {
      transition: 0.5s;
      transform: scale(1.02);
    }
  }
`;

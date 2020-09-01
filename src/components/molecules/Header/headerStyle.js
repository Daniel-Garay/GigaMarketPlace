import styled from 'styled-components';
import { colors } from '../../../styles/atoms/colors';
import { displays } from '../../../styles/atoms/variables';

const HeaderStyle = styled.header`
  ${displays.flexBetween}
  height: 60px;
  width: 100%;
  border-bottom: 1px solid gray;
  position: fixed;
  background-color: ${colors.first};
  color: white;
  z-index: 2;

  & div {
    padding: 0 20px;
    ${displays.flexBetween}

    & svg {
      font-size: 30px;
      cursor: pointer;
    }
  }
`;

export default HeaderStyle;

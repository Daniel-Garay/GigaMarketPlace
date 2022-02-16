import styled, { css } from 'styled-components';
import { colors, grayscale } from '../../../styles/atoms/colors';
import { displays } from '../../../styles/atoms/variables';

const PrimaryButton = css`
  background-color: ${colors.second};
  color: ${grayscale.white};

  & :hover {
    filter: brightness(1.2);
  }
`;

const SecondaryButton = css`
  background-color: #fff;
  border: 1px solid ${colors.seventh};
  color: ${grayscale.white};

  &:hover {
    filter: brightness(1.1);
  }
`;

const BlackButton = css`
  background-color: black;
  color: white;

  &:hover {
    background-color: gray;
  }
`;

const DisabledButton = css`
  color: ${grayscale.gray};
  border-color: ${grayscale.gray};

  &:hover {
    filter: brightness(1);
  }
`;

const OnlyIcon = css`
  background-color: white;
`;

const ButtonStyle = styled.button`
  height: 40px;
  border-radius: 20px;
  border: 0;
  padding: ${(props) => (props.onlyIcon ? '10px' : '10px 30px')};
  margin: 0px 10px;
  cursor: pointer;
  transition-duration: 0.5s;
  text-transform: uppercase;
  font-size: ${(props) => (props.small ? '12px' : '18px')};
  ${displays.flexCenter}

  ${(props) => props.typeStyle === 'primary' && PrimaryButton}
  ${(props) => props.typeStyle === 'secondary' && SecondaryButton}
  ${(props) => props.typeStyle === 'black' && BlackButton}

  &:hover {
    transition-duration: 0.5s;
  }

  :disabled {
    ${DisabledButton}
  }

  ${(props) => props.onlyIcon && OnlyIcon}

  & svg {
    font-size: ${(props) => (props.onlyIcon ? '20px' : '15px')};
    margin: 0 5px;
  }
`;

export default ButtonStyle;

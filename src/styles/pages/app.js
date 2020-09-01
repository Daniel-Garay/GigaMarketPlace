import styled from 'styled-components';
import device from '../atoms/devices';

export const ContentApp = styled.div`
  margin: 0 auto;
  padding-top: ${(props) => (props.minimalist ? '80px' : '0')};

  ${device.mobile`
    padding: 20px;
  `}
`;

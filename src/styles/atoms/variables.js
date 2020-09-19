import { css } from 'styled-components';

export const displays = {
  flexBase: css`
    display: flex;
    justify-content: center;
  `,
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  flexColumn: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  flexEnd: css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `,

  flexWrap: css`
    display: flex;
    flex-wrap: wrap;
  `,
};

export const sizes = {
  mobile: '900px',
};

export const fontSizes = {
  mainSize: '16px',
  secondSize: '18px',
  thirdSize: '20px',
  fourthSize: '22px',
  fivethSize: '24px',
  sixthSize: '13px',
  seventhSize: '10px',
  eigthSize: '50px',
};

export const typography = {
  fontFamilyMain: css`
    font-family: 'Barlow condensed', sans-serif;
  `,
  fontFamilySecond: css`
    font-family: 'Spartan', sans-serif;
  `,
};

export const scaleWeight = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};

/// FUNCTIONS
export const setStyledText = ({
  color,
  fontSize,
  fontFamily = typography.fontFamilyMain,
  weight = scaleWeight.regular,
}) => {
  return css`
    color: ${color};
    ${fontFamily};
    font-size: ${fontSize};
    font-weight: ${weight};
  `;
};

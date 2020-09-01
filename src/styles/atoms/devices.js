import { sizes } from './variables';

const device = {
  mobile: (styles) => {
    return `@media (max-width: ${sizes.mobile}) {
          ${styles}
        }`;
  },
};

export default device;

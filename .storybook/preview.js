import { RecoilRoot } from 'recoil';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import "tailwindcss/tailwind.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const GlobalStyleReset = createGlobalStyle`
  ${reset}

  a {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export const decorators = [
  (Story) => {
    return <RecoilRoot>
      <GlobalStyleReset />
      <Story />
    </RecoilRoot>
  }
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  a11y: {
    element: "#root",
    manual: false
  },
};
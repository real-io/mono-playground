import type { Preview } from "@storybook/react";
import { globalDecorators } from "./decorators";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

console.log({ INITIAL_VIEWPORTS });

const myViewports = {
  ...INITIAL_VIEWPORTS,
  // Adding a custom viewport
  custom: {
    name: "MyCustomViewport",
    styles: {
      height: "100px",
      width: "100px",
    },
    type: "mobile",
  },
};
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: myViewports,
    },
    docs: {
      toc: {
        contentsSelector: '.sbdocs-content',
        headingSelector: 'h1, h2, h3',
        title: 'Table of Contents',
        disable: false,
        unsafeTocbotOptions: {
          orderedList: false,
        },
      },
    },
  },
};

export const decorators = globalDecorators;

export default preview;

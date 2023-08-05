import type { Preview } from "@storybook/react";
import "../src/styles/main.scss";
import "./storybook.css";
import DocumentationTemplate from "./DocumentationTemplate.mdx";


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export default preview;

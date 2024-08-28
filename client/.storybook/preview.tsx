import { withRouter } from "storybook-addon-remix-react-router";
import "../src/index.css";

export default {
  decorators: [withRouter],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

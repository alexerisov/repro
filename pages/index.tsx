import { HomePage, pageStarted } from "@src/pages/home";
import { createGIP } from "@src/pages/shared";

HomePage.getInitialProps = createGIP({
  pageEvent: pageStarted,
  async customize({ scope, context }) {
    console.debug({ context });
    return {
      /* Props */
    };
  }
});

export default HomePage;

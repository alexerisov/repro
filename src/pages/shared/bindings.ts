import { createGIPFactory } from "~shared/lib/nextjs-effector";

import { appStarted } from "./model";

export const createGIP = createGIPFactory({
  sharedEvents: [appStarted]
  // createServerScope: context => {
  //   console.debug("gip context", context.req);
  //   return fork({
  //     values: [[$cookies, context.req.headers.cookie ?? ""]]
  //   });
  // }
});

// sample({
//   source: appStarted,
//   filter: isServerPageContext,
//   fn: context => context.req.headers.cookie,
//   target: $cookies
// });

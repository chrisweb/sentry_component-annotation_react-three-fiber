// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://be6f8e1dd6e7e0e9890ecbddf20752ed@o4506763688542208.ingest.us.sentry.io/4506763723341824",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});

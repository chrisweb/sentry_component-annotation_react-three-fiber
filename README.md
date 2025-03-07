# Sentry component annotation

Sentry has a new "component annotation" feature that can be enabled 

## development

install the dependencies:


start the development server:


Finally visit http://127.0.0.1:3000/sentry-example-page

## stack history

installation commands used to create this project

install next.js (15.2.1) using create-next-app:

npx create-next-app@latest .

questions answered like this:

√ Would you like to use TypeScript? ... Yes
√ Would you like to use ESLint? ... Yes
√ Would you like to use Tailwind CSS? ... No
√ Would you like your code inside a `src/` directory? ... No
√ Would you like to use App Router? (recommended) ... Yes
√ Would you like to use Turbopack for `next dev`? ... No
√ Would you like to customize the import alias (`@/*` by default)? ... Yes
√ What import alias would you like configured? ... @/*

install [@sentry/nextjs](https://www.npmjs.com/package/@sentry/nextjs) (9.5.0) using the [@sentry/wizard](https://www.npmjs.com/package/@sentry/wizard):

npx @sentry/wizard

questions answered like this:

┌   Sentry Next.js Wizard 
◇  Are you using Sentry SaaS or self-hosted Sentry? │ Sentry SaaS (sentry.io)
◇  Do you already have a Sentry account? │ Yes
◇  Installed @sentry/nextjs with NPM.
◇  Do you want to route Sentry requests in the browser through your Next.js server to avoid ad blockers? │ Yes
◇  Do you want to enable React component annotations to make breadcrumbs and session replays more readable? │ Yes
◇  Do you want to enable Tracing to track the performance of your application? │ No
◇  Do you want to enable Sentry Session Replay to get a video-like reproduction of errors during a user session? │ No
◆  Created fresh sentry.server.config.ts.
◆  Created fresh sentry.client.config.ts.
◆  Created fresh sentry.edge.config.ts.
◆  Added new instrumentation.ts file.
◆  Added Sentry configuration to next.config.ts. (you probably want to clean this up a bit!)
◆  Created app\global-error.tsx.
◇  Do you want to create an example page ("/sentry-example-page") to test your Sentry setup? │ Yes
◆  Created app\sentry-example-page\page.tsx.
◆  Created app\api\sentry-example-api\route.ts.
◆  Created .env.sentry-build-plugin with auth token for you to test source map uploading locally.
◆  Added .env.sentry-build-plugin to .gitignore.
◇  Are you using a CI/CD tool to build and deploy your application? │ No
└  

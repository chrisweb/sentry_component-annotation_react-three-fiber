# Sentry component annotation

Sentry has a new "component annotation" feature, in Next.js you enable it in the [next.config](next.config.ts) file by adding the following lines to the sentry configuration:

```js
  // Automatically annotate React components to show their full name in breadcrumbs and session replay
  reactComponentAnnotation: {
    enabled: true,
  },
```

The packages used:

* next **15.2.1**
* @sentry/nextjs **9.5.0**
* @sentry/bundler-plugin-core **3.2.1**
* @sentry/babel-plugin-component-annotate **3.2.1**
* @react-three/fiber **9.0.4**

Now [build and then start](#development) the project and you will see the following error in the browser console:

```shell
Uncaught TypeError: Cannot read properties of undefined (reading 'sentry')
```

## The problem

Previously the only way to not get the error was to disable the **reactComponentAnnotation** feature

Now we got a new configuration option to ignore react-three-fiber like this:

```js
  // Automatically annotate React components to show their full name in breadcrumbs and session replay
  reactComponentAnnotation: {
    enabled: true,
    ignoredComponents: ['@react-three/fiber'],
  },
```

The first example showed that the package / module name seems to be wrong, so maybe exclude our custom React component which is called Demo, but this is also didn't work, so I tried even more options:

```js
  // Automatically annotate React components to show their full name in breadcrumbs and session replay
  reactComponentAnnotation: {
    enabled: true,
    ignoredComponents: ['@react-three/fiber', 'Demo', 'Canvas', 'ambientLight', 'spotLight', 'pointLight', 'Box'],
  },
```

The problem is: **the above ignoredComponents doesn't work (the same error is still in the console)**

So the question is: **what does Sentry mean by "component"?**

## development

clone this project in your IDE

then install the dependencies:

```
npm i
```

create a new build:

```shell
npm run build
```

then start the server:

```shell
npm run start
```

finally visit: `http://127.0.0.1:3000`

## stack history

installation commands used to create this project

install next.js (15.2.1) using create-next-app:

```shell
npx create-next-app@latest .
```

questions answered like this:

```shell
√ Would you like to use TypeScript? ... Yes
√ Would you like to use ESLint? ... Yes
√ Would you like to use Tailwind CSS? ... No
√ Would you like your code inside a `src/` directory? ... No
√ Would you like to use App Router? (recommended) ... Yes
√ Would you like to use Turbopack for `next dev`? ... No
√ Would you like to customize the import alias (`@/*` by default)? ... Yes
√ What import alias would you like configured? ... @/*
```

install [@sentry/nextjs](https://www.npmjs.com/package/@sentry/nextjs) (9.5.0) using the [@sentry/wizard](https://www.npmjs.com/package/@sentry/wizard):

```shell
npx @sentry/wizard
```

questions answered like this:

```shell
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
```

install @react-three/fiber:

```shell
npm i @react-three/fiber --save-exact
```

react-three-fiber types:

```shell
npm i @types/three --save-exact --save-dev
```

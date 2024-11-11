import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    excludeSpecPattern: [
      "**/1-getting-started/*.js",
      "**/2-advanced-examples/*.js",
    ],
    baseUrl: "http://localhost:3000",
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});

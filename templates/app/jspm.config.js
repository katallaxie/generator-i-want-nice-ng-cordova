System.config({
  baseURL: "./",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    <% if (isAngular) { %>
    "stage": 0,
    <% } %>
    <% if (isAngular2) { %>
      "stage": 1,
    <% } %>
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "boot" : "./app/app"
  }
});

const defaults = require("E:/APPS/packages/hotbars/src/client/_public/bundles/defaults.runtime.js");
const helpers = require("E:/APPS/packages/hotbars-web/src/helpers");
const allHelpers = { ...defaults, ...helpers };

Object.keys(allHelpers)
  .forEach((name) => {
    if (typeof allHelpers[name] === "function") {
      Handlebars.registerHelper(name, allHelpers[name]);
    } else {
      Handlebars.registerHelper(allHelpers[name]);
    }
  });
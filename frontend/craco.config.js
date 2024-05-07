const million = require("million/compiler");

module.exports = {
  scripts: {
    start: "craco start --config config/craco-config-with-custom-name.js",
  },
  webpack: {
    plugins: { add: [million.webpack({ auto: true })] },
  },
};

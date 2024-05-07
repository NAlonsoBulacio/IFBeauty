const million = require("million/compiler");

module.exports = {
  scripts: {
    start: "craco start --config config/craco-config-with-custom-name.js",
  },
  webpack: {
    plugins: {
      add: [
        million.webpack({
          auto: {
            threshold: 0.05,
            skip: ["useBadHook", /badVariable/g],
          },
        }),
      ],
    },
  },
};

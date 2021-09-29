const isTest = process.env.NODE_ENV === "test";

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        targets: {
          esmodules: true,
        },
      },
    ],
    "@babel/preset-react",
  ],
  plugins: isTest
    ? [
        [
          "@babel/plugin-transform-runtime",
          {
            regenerator: true,
            corejs: 3, // or 2; if polyfills needed
          },
        ],
      ]
    : [],
};

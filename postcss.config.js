module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
    // Ensures the default variables are available
    "postcss-custom-properties-fallback": {
      importFrom: require.resolve("react-spring-bottom-sheet/defaults.json"),
    },
  },
};

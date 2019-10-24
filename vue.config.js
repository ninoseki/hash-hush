module.exports = {
  outputDir: "dist",
  assetsDir: "static",
  devServer: {
    proxy: {
      "/check": {
        target: "http://localhost:5000/"
      }
    }
  }
};

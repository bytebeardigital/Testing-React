module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "src/assets/styles/_mixins.scss";
          @import "src/assets/styles/_helpers.scss";
          @import "src/assets/styles/_typography.scss";
          @import "src/assets/styles/variables.scss";
        `
      }
    }
  }
};

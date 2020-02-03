/* eslint-disable */
const withSass = require('@zeit/next-sass');
module.exports = withSass({
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  }
});

// export file for static html app if we choose to use it

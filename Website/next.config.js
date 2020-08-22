/* eslint-disable */
const withSass = require('@zeit/next-sass');
module.exports = withSass({
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/prijzen': { page: '/prijzen' },
      '/over-ons': { page: '/over-ons' },
      '/contact': { page: '/contact' }
    };
  }
});

// export file for static html app if we choose to use it

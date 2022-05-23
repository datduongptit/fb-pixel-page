const path = require('path');
const withCSS = require('@zeit/next-css');
const withPurgeCss = require('next-purgecss');
const withSass = require('@zeit/next-sass');

const miniCss = withCSS(
  withPurgeCss({
    purgeCssEnabled: ({ dev, isServer }) => !dev && !isServer, // Only enable PurgeCSS for client-side production builds
  })
);

const cssModules = withSass({
  cssModules: false,
});

module.exports = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  cssModules,
  miniCss,
  env: {},
  trailingSlash: true,
  productionBrowserSourceMaps: true,
  image: {
    formats: ['image/png'],
  },
};

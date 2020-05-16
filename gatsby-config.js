const path = require(`path`);
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Mukta`,
            variants: [`200`, `400`, `600`]
          },
          {
            family: `Rubik`,
            variants: [`200`, `400`, `600`, `800`]
          }
        ]
      }
    }
  ]
};

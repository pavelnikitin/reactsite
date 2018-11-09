module.exports = {
  siteMetadata: {
    title: `Portfolin Nikitin Pavel`,
  },
  plugins: [`gatsby-plugin-react-helmet`,
             `gatsby-plugin-sass`,
             {
              resolve: `gatsby-plugin-google-analytics`,
              options: {
                trackingId: "UA-118926120-1",
                // Puts tracking script in the head instead of the body
                head: false,
                // Setting this parameter is optional
                anonymize: false,
                // Setting this parameter is also optional
                respectDNT: false,
                // Avoids sending pageview hits from custom paths
                exclude: ["/404"],
                sampleRate: 5,
                siteSpeedSampleRate: 10,
                cookieDomain: "www.24verstka.ru",
              }
            },
            {
              resolve: `gatsby-plugin-yandex-metrika`,
              options: {
                trackingId: '46873149',
                webvisor: true,
                trackHash: true,
              },
            }
            ],
}

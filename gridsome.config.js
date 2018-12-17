// This is where project configuration and installed plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// gridsome.config.js

module.exports = {
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ]
    }
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'BlogPost',
        remark: {
          plugins: [
            // ...local plugins
          ]
        }
      }
    }
  ]
}
/* Need to use nodejs compatible import/export here because this file is required by
 * gatsby-config.js.
 *
 * Restart gatsby develop to pick up changes in this file.
 */

const deepOrange = require('@material-ui/core/colors/deepOrange').default;
const grey = require('@material-ui/core/colors/grey').default;
const indigo = require('@material-ui/core/colors/indigo').default;

const PALETTE_PRIMARY_MAIN = deepOrange[600];

const MD_BREAKPOINT = 720;

const theme = {
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl', 'none'],
    values: {
      xs: 0,
      sm: 600,
      md: MD_BREAKPOINT,
      lg: 960,
      xl: 1280,
      none: 'none',
    },
  },

  palette: {
    grey,

    deepOrange,

    primary: {
      light: deepOrange[400],
      main: PALETTE_PRIMARY_MAIN,
      dark: deepOrange[900],
    },

    secondary: {
      light: indigo[400],
      main: indigo[600],
      dark: indigo[900],
    },

    // TODO: Names are confusing. secondary is basically a lighter primary, but then primary
    // light is extremely light. "Light" is supposed to mean "this contrasts on a dark background".
    text: {
      // Black on white
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      // White on Black
      primaryLight: 'rgba(255, 255, 255, 0.87)',
      secondaryLight: 'rgba(247, 247, 247, 0.87)',
    },
  },

  typography: {
    bold: {
      // We have a real Soehne font for this weight
      fontWeight: 600,
    },
  },

  preMadeStyles: {
    gatsbyRemarkImages: {
      // I've also disabled margin-left:auto because there are some situations where we
      // need images to be against the left edge. Docs are a good example of this.
      //
      // This can't be moved into the content block in this theming object because the
      // Gatsby remark images plugin will add inline styles into the element which override
      // anything we try to set.
      wrapperStyle: 'margin-left:unset; margin-right:unset',
    },

    // These styles are set on the root element of HTML nodes which have compiled Markdown injected
    // into then with dangerouslySetInnerHTML. There is no good way to use JSS with markdown
    // so styling the root element is all we can do.
    content: {
      maxWidth: '70rem',

      '& .gatsby-resp-image-wrapper': {
        // I was having a problem with screenshots which have a white background. Because the
        // background of the blog posts is also white, there was no way to see where the image
        // ended and the blog post began. It all just blurred together. This shadow defins
        // the edge of the image.
        boxShadow: '0 0 5px -2px rgba(0,0,0,0.75)',
      },

      // A box-shadow is added to images by default. To remove it, wrap the markdown image in
      // a div with the no-box-shadow class. The empty lines are required.
      //
      // <div class="no-box-shadow">
      //
      // ![list of components resources and APIs which are dependencies of a system](./system-cards.png)
      //
      // </div>
      '& .no-box-shadow .gatsby-resp-image-wrapper': {
        boxShadow: 'none',
      },

      '& h1, & h2, & h3, & h4': {
        marginTop: '2rem',
        marginBottom: '1.1rem',
      },

      '& p': {
        marginBottom: '1.1rem',
        lineHeight: 1.6,
      },

      '& ul': {
        paddingLeft: '1em',
      },

      '& ol': {
        paddingLeft: '1em',
      },

      '& li': {
        marginBottom: '1.1rem',
        lineHeight: 1.6,
      },

      '& a, & a:visited': {
        color: PALETTE_PRIMARY_MAIN,
      },

      '& dl': {
        // The whole page will scroll horizontally without this.
        overflowX: 'scroll',
      },

      '& dt': {
        fontWeight: 600,
      },

      '& dd': {
        lineHeight: '2rem',
      },

      '& table': {
        borderCollapse: 'collapse',
        marginBottom: '1em',
        display: 'block',
        maxWidth: 'fit-content',
        overflowX: 'auto',
      },

      '& th, & td': {
        border: '1px solid #999',
        padding: '0.5rem',
        textAlign: 'left',
      },

      '& twitter-tweet': {
        marginLeft: 'auto',
        marginRight: 'auto',
      },

      [`@media (min-width: ${MD_BREAKPOINT}px)`]: {
        '& ul': {
          paddingLeft: '3em',
        },

        '& ol': {
          paddingLeft: '3em',
        },

        '& h2': {
          marginTop: '4rem',
        },

        '& h3': {
          marginTop: '2rem',
        },

        '& blockquote': {
          background: grey[100],
          borderLeft: '10px solid #ccc',
          margin: '1.5em 10px',
          padding: '0.5em 10px',
        },
      },
    },
  },
};

module.exports = theme;

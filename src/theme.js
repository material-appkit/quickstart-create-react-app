import { createMuiTheme } from '@material-ui/core/styles';

const TOP_BAR_HEIGHT = 64;
const NAVBAR_HEIGHT = 56;
const TOOLBAR_HEIGHT = 48;
const SIDEBAR_WIDTH = 260;

const baseTheme = createMuiTheme();

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          width: '100%',
          height: '100%',
        },
        body: {
          height: '100%',
          width: '100%',

          '& > #root': {
            height: '100%',
          },

          "-webkitOverflowScrolling": 'touch',
        },

        // Google Places Autocomplete
        // https://developers.google.com/maps/documentation/javascript/places-autocomplete#style-autocomplete
        '.pac-container': {
          zIndex: baseTheme.zIndex.modal + 1,
        },
      },
    },

    MuiFormControl: {
      marginNormal: {
        marginTop: baseTheme.spacing(1),
      },
    },
  },


  //----------------------------------------------------------------------------
  // Material-UI Theme
  //----------------------------------------------------------------------------
  palette: {
    background: {
      default: '#fff',
    },
    primary: {
      main: '#3C3B6E',
    },
    secondary: {
      main: '#B22234',
    },
  },

  typography: {
    button: {
      textTransform: 'none',
    },

    h1: {
      fontSize: baseTheme.typography.pxToRem(48),
    },

    h2: {
      fontSize: baseTheme.typography.pxToRem(24),
      fontWeight: 400,
    },

    h3: {
      fontSize: baseTheme.typography.pxToRem(20),
      fontWeight: 400,
    },

    h4: {
      fontSize: baseTheme.typography.pxToRem(18),
    },

    h5: {
      fontSize: baseTheme.typography.pxToRem(16),
      fontWeight: 500,
    },

    h6: {
      fontSize: baseTheme.typography.pxToRem(14),
    },
  },


  //----------------------------------------------------------------------------
  // Material-AppKit Theme
  //----------------------------------------------------------------------------
  sizes: {
    navigationController: {
      navbarHeight: NAVBAR_HEIGHT,
      toolbarHeight: TOOLBAR_HEIGHT,
    },
  },

  propertyList: {
    root: {
      padding: 0,
    },

    listItem: {
      listItemRoot: {
        display: 'flex',
        fontSize: baseTheme.typography.pxToRem(14),
        padding: baseTheme.spacing(0.25, 0),
      },

      listItemIconRoot: {
        marginRight: 5,
        minWidth: 20,
      },

      listItemIcon: {
        height: 18,
        width: 18,
      },

      listItemTextRoot: {
        margin: 0,
        padding: 0,
      },

      label: {
        fontWeight: 500,
        marginRight: baseTheme.spacing(0.5),
        "&:after": {
          content: '":"',
        },
      },

      inlineNestedList: {
        display: 'inline-flex',

        '& > *:not(:last-child)': {
          marginRight: baseTheme.spacing(0.5),
          '&:after': {
            content: '","',
          },
        },
      },

      nestedListItem: {
        padding: 0,
        width: 'initial',
      },
    },
  },

  //----------------------------------------------------------------------------
  // Application Theme
  topbar: {
    height: TOP_BAR_HEIGHT,
  },

  sidebar: {
    width: SIDEBAR_WIDTH,
  },

  mixins: {
    actionButton: {
      fontSize: baseTheme.typography.pxToRem(16),
      margin: baseTheme.spacing(2, 0),
      width: '100%',
    },

    linkButton: {
      color: baseTheme.palette.text.primary,
      fontSize: baseTheme.typography.pxToRem(14),
      fontWeight: 600,
      textDecoration: 'underline',
    },
  },
});

export default theme;

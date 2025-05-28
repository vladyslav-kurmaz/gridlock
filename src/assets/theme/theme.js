// theme.js (Chakra UI)
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
  colors: {
    light: {
      background: "#ffffff", 
      text: "#000000", 
    },
    dark: {
      background: "rgb(15 23 42 / 1)", 
      text: "rgb(29 228 211 / 1)", 
    },
    majky: {
      50: "#effefc",
      100: "#c7fff6",
      200: "#90ffed",
      300: "#51f7e3",
      400: "#1de4d3",
      500: "#04c8ba",
      600: "#00b4ab",
      700: "#05807b",
      800: "#0a6563",
      900: "#0d5452",
      950: "#003233",
    }
  },
  styles: {
    global: (props) => ({
      body: {
        fontFamily: '"Fredoka", sans-serif',
        bg: mode("white", "rgb(15 23 42 / 1)")(props), 
        color: mode("black", "rgb(29 228 211 / 1)")(props),
      },
      '::-webkit-scrollbar': {
        width: '8px',
        height: '8px'
      },
      '::-webkit-scrollbar-thumb': {
        background: '#b8b8b8',
        borderRadius: '8px'
      }
    })
  },
  breakpoints: {
    '0': '0em',
    '380': '23.75em',   // 380px
    '451': '28.125em',  // 450px
    '550': '34.375em',  // 550px
    sm: '30em',         // 480px
    md: '48em',         // 768px
    lg: '62em',         // 992px
    xl: '80em',         // 1280px
    '2xl': '96em',      // 1536px
    '3xl': '110em'      // 1760px
  }
});

export default theme;

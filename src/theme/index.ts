import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    cssVarPrefix: "one-fl",
  },
  colors: {
    brand: {
      faintBg: "#F7F8Fa",
      funnelBlack: "#1E1E1C",
      primary: "#EA572B",
      primary50: "#FDF2F2",
      primary100: "#fff0eb",
      primary200: "#FFCEC0",
      primary500: "#FF6A3D",
      primary600: "#EA572B",
      primary700: "#C84219",
      primary800: "#A62F0C",
      primary900: "#842002",
      primary901: "#621700",
      secondary: "#070B1A",
      secondaryBg: "#FAFBFF",
      secondary100: "#F4F7FF",
      secondary200: "#E4E9FF",
      secondary300: "#C4D3FF",
      secondary500: "#8AA4EF",
      secondary800: "#354A89",
      secondary900: "#213367",
      neutral200: "#EAEBF1",
      neutral300: "#DDE1E9",
      neutral700: "#676D7E",
      grey40: "#c3aeae",
      red200: "#FDE7E8",
      red900: "#66191D",
      green700: "#3B9B7B",
    },
  },
  fonts: {
    heading: 'Inter, system-ui, sans-serif',
    body: 'Inter, system-ui, sans-serif',
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'lg',
      },
      variants: {
        solid: {
          bg: 'brand.primary',
          color: 'white',
          _hover: {
            bg: 'brand.primary700',
          },
        },
        outline: {
          border: '2px solid',
          borderColor: 'brand.primary',
          color: 'brand.primary',
          _hover: {
            bg: 'brand.primary50',
          },
        },
      },
    },
    Container: {
      baseStyle: {
        maxW: 'container.xl',
      },
    },
  },
  styles: {
    global: {
      body: {
        // bg: 'brand.secondaryBg',
        // color: 'brand.funnelBlack',
      },
    },
  },
});

export default theme;
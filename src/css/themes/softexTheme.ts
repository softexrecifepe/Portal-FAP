const ThemeColors = {
  primary: "#dc7c2c",
  secondary: "#ecbc94",
  tertiary: "#FAB400",
  quaternary: "#713d12",
  background: "#FBAB7E",
};

const ThemeGradients = {
  gradient: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
};

const TextColors = {
  primary: "#f1f1f1",
  secondary: "#333",
};

const FontSizes = {
  tiny: "10px",
  small: "12px",
  medium: "15px",
  large: "18px",
};

const FontWeights = {
  light: 300,
  regular: 400,
  bold: 700,
};

const FontFamily = {
  primary: "Titillium Web, sans-serif",
};

const Spacing = {
  small: "5px",
  medium: "10px",
  large: "15px",
};

const BorderRadius = {
  small: "5px",
  medium: "10px",
  large: "15px",
  veryLarge: "20px",
};

const BoxShadow = {
  small:
    "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",

  medium: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",

  large: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",

  extraLarge:
    "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
};

const ImageSizes = {
  full: "100%",
  half: "50%",
  quarter: "25%",
};

export const softexTheme = {
  boxShadow: BoxShadow,
  borderRadius: BorderRadius,
  colors: ThemeColors,
  fontSizes: FontSizes,
  fontWeights: FontWeights,
  fontFamily: FontFamily,
  gradients: ThemeGradients,
  imageSizes: ImageSizes,
  spacing: Spacing,
  textColors: TextColors,
};

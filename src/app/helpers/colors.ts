const COLORS = {
  PRIMARY: '#D7AC50',
  BLACK: '#000000',
  WHITE: '#FFFFFF',
  GREY: '#363B3E',
  LIGHT_GRAY: '#CCCCC6',
};

const hexCheck = (hex: string): string => {
  return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hex) ? hex : COLORS.PRIMARY;
};

const colorOpacity = (hex: string, opacity: number): string => {
  let color = hex.replace(/[^0-9a-f]/gi, '');
  const isValid = color.length === 6 || color.length === 3;

  if (!isValid) {
    throw new Error('Invalid hexadecimal');
  }

  if (color.length === 3) {
    color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
  }

  let alpha: number | string = opacity;
  if (opacity < 0) {
    alpha = 0;
  }
  if (opacity > 1) {
    alpha = 1;
  }

  alpha = `0${Math.round(alpha * 255).toString(16)}`.slice(-2);

  color = `#${color}${alpha}`;

  return color;
};

export { COLORS, hexCheck, colorOpacity };

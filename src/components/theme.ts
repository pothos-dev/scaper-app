export type FontSize = keyof typeof fontSize
const fontSize = {
  xsmall: '0.66em',
  small: '0.8em',
  default: '1em',
  large: '1.5em',
}

export type Spacing = keyof typeof spacing
const spacing = {
  none: 0,
  XXS: 1,
  XS: 2,
  S: 4,
  M: 8,
  L: 16,
  XL: 32,
  XXL: 64,
}

export type BorderRadius = keyof typeof borderRadius
const borderRadius = {
  none: 0,
  S: 4,
  M: 8,
}

export type IconSize = keyof typeof iconSize
const iconSize = {
  S: 12,
  M: 18,
  L: 24,
  XL: 36,
  XXL: 72,
}

export type Color = keyof typeof color
const color = {
  transparent: 'transparent',
  semiTransparent: '#fff4',
  input: '#ddd',
  background: 'hsl(120, 0%, 100%)',
  elevated: 'hsl(0, 0%, 10%)',
  focus: '#0a08',
  error: '#a00',
}

export const backgroundGradient =
  'linear-gradient(170deg, ' +
  'hsl(120, 40%, 60%) 0%,' +
  'hsl(220, 40%, 50%) 100%' +
  ')'

export type TextColor = keyof typeof textColor
const textColor = {
  default: '#000',
  inverted: '#eee',
  error: '#a00',
}

export type Theme = typeof theme
export const theme = {
  spacing,
  borderRadius,
  color,
  textColor,
  fontSize,
  iconSize,
}

export function matchingTextColor(color: Color): TextColor {
  switch (color) {
    case 'elevated':
    case 'active':
      return 'inverted'
    default:
      return 'default'
  }
}

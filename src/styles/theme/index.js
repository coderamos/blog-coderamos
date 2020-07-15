export const colors = {
  black: '#000000',
  blue: '#33A1F2',
  white: '#FFF',
  pink: '#F81CE5',
  green: '#50E3C2',
  greenBright: '#3AFACF',

  gray: '#38444D',
}

export const grid = {
  breakpoints: {
    xs: 500,
    sm: 736,
    md: 980,
    lg: 1200,
  },
}

export const mediaQueries = {
  xs: `(max-width: ${grid.breakpoints.xs}px)`,
  sm: `(max-width: ${grid.breakpoints.sm}px)`,
  md: `(max-width: ${grid.breakpoints.md}px)`,
  lg: `(max-width: ${grid.breakpoints.lg}px)`,
}

export default { colors, grid, mediaQueries }

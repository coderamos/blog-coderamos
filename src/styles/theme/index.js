export const grid = {
  breakpoints: {
    sm: 450,
    md: 768,
    lg: 1170,
    xl: 1440,
  },
}

export const mediaQueries = {
  sm: `(max-width: ${grid.breakpoints.sm}px)`,
  md: `(max-width: ${grid.breakpoints.md}px)`,
  lg: `(max-width: ${grid.breakpoints.lg}px)`,
  xl: `(max-width: ${grid.breakpoints.xl}px)`,
}

export default { grid, mediaQueries }

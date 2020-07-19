const getThemeColor = () => {
  const theme = typeof window !== 'undefined' && window.__theme

  if (theme === 'dark') return '#000000'
  if (theme === 'light') return '#FFFFFF'
}

export default getThemeColor

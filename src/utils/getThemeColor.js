const getThemeColor = () => {
  const theme = typeof window !== 'undefined' && window.__theme

  if (theme === 'light') return '#FFFFFF'
  if (theme === 'dark') return '#000000'
}

export default getThemeColor

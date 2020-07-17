const getThemeColor = () => {
  const theme = typeof window !== 'undefined' && window.__theme

  if (theme === 'light') return '#FFFFFF'
  if (theme === 'dark') return '#33A1F2'
}

export default getThemeColor

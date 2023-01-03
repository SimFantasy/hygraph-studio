import React, { useState, useEffect } from 'react'

const useTheme = () => {
  const [theme, setTheme] = useState('light')

  const root = document.documentElement

  useEffect(() => {
    const localTheme = localStorage.getItem('fantasy-theme')
    if (localTheme) {
      setTheme(localTheme)
      root.setAttribute('data-color-mode', localTheme)
    } else {
      setTheme('light')
    }
  }, [])

  const toggleTheme = () => {
    if (theme === 'light') {
      localStorage.setItem('fantasy-theme', 'dark')
      root.setAttribute('data-color-mode', 'dark')
      setTheme('dark')
    } else {
      localStorage.setItem('fantasy-theme', 'light')
      root.setAttribute('data-color-mode', 'light')
      setTheme('light')
    }
  }

  return { theme, toggleTheme }
}

export default useTheme

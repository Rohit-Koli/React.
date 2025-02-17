import React from 'react'

const ThemeButton = ({isDarkMode}) => {
  return isDarkMode ?<h2>🌙 Dark Mode</h2> : <h2>☀️ Light Mode</h2>
}

export default ThemeButton

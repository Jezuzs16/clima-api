import { useState } from 'react'

export const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.body.classList.toggle('dark-mode')
  }

  return (
    <button className="darkmode-toggle-btn" onClick={toggleDarkMode}>
      {darkMode ? '☀️' : '🌕'}
    </button>
  )
}
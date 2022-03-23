import React, { useState } from 'react'

import { ThemeProvider } from 'styled-components'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

import GlobalStyle from './styles/global'
import Header from './components/Header/Index'

function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <div className="container">
        <Header toggleTheme={toggleTheme} />
        <h1>123</h1>
      </div>
    </ThemeProvider>
  )
}

export default App

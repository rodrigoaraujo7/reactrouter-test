import usePersistedState from './utils/usePersistedState'
import { useState } from 'react'

import { ThemeProvider, DefaultTheme } from 'styled-components'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

import { motion } from 'framer-motion'

import GlobalStyle from './styles/global'
import Header from './components/Header/Index'
import Footer from './components/Footer/Index'
import TechnologiesList from './components/TechnologiesList/Index'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  const searchHandler = () => {}

  return (
    <motion.div 
      className="container" 
      initial={{ x: 0 }}
      animate={{ x: 0 }}
      exit={{ x: -8000, transition: { duration: 0.7 } }}
    >
      <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header toggleTheme={toggleTheme} />
          <TechnologiesList 
          term={searchTerm} 
          searchKeyword={searchHandler} 
          />
          <Footer />
      </ThemeProvider>
    </motion.div>
  )
}

export default App

import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import Routes from './Routes'
import { GlobalStyle } from './styles/globalStyles'
import { darkTheme } from './styles/theme'

export const ThemeContext = React.createContext(null)

const App = () => {
  const [theme, setTheme] = useState('dark')
  const themeStyle = darkTheme

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyle />
        <Helmet>
          <title>Sidebar - Code Focus</title>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap'
            rel='stylesheet'
          />
        </Helmet>
        <Routes />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyle from './styles/GlobalStyles'

import Home from './pages/home'


function App() {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Home/>
      </ThemeProvider>
    </main>
  )
}


export default App

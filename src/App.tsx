import Home from './pages/home'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyle from './styles/GlobalStyles'


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

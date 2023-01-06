import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Routes'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { CartProvider } from './hooks/useCart'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <CartProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
          <ToastContainer />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </CartProvider>
  )
}

export default App

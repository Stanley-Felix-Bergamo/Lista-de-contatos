import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EstiloGlobal, { Container } from './styles'
import Home from './Pages/Home'
import store from './Store'
import { Provider } from 'react-redux'
function App() {
  const rotas = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    }
  ])

  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App

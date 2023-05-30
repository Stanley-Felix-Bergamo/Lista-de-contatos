import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EstiloGlobal, { Container } from './styles'
import Home from './Pages/Home'

function App() {
  const rotas = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    }
  ])

  return (
    <div className="App">
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </div>
  )
}

export default App

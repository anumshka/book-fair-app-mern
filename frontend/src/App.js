import Footer from './components/Footer'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen'

function App() {
  return (
    <>
      <Router>
        <Header></Header>

        <main className='py-3'>
          <Container>
            <h1>What you reading?</h1>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/product/:id' component={ProductScreen} />
          </Container>
        </main>

        <Footer></Footer>
      </Router>
    </>
  )
}

export default App

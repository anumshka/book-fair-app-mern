import Footer from './components/Footer'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Router>
            <Route path='/product/:id' component={ProductScreen} />
            <Route path='/' component={HomeScreen} exact />
          </Router>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App

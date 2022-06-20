import Footer from './components/Footer'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <>
      <Header></Header>

      <main className='py-3'>
        <Container>
          <h1>What you reading?</h1>
          <HomeScreen></HomeScreen>
        </Container>
      </main>

      <Footer></Footer>
    </>
  )
}

export default App

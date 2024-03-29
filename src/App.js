import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Details from './Components/Details'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Footer from './Components/Footer'
import Error from './Components/Error';


function App() {

  
  return (
    <BrowserRouter>
      
        
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Kay-Tog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='links' to='/'>Home</Link>
            <Link className='links' to='about'>About</Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
      
      
    </Navbar>
    
      <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/about' element={<About/>}/>
          <Route path='/details/:mealsId' element={<Details/>}/>
          <Route path='*'  element={ <Error /> }/>
      </Routes>

      <Footer />
    
    </BrowserRouter>
  );
}

export default App;

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'
import Nav from './Nav'

function App() {


  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/about' Component={About}/>
    </Routes>
    </BrowserRouter>
  
  )
}

export default App

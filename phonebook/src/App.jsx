import { useState } from 'react'
import Home from './component/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Home}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

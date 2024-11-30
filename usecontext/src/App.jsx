
import './App.css'
import Headers from './Headers'
import Content from './Content'
import ThemeProvider from './ThemeProvider'

function App() {


  return (
    <>
     <ThemeProvider>
      <Headers/>
     <Content/>
     </ThemeProvider>
    </>
  )
}

export default App

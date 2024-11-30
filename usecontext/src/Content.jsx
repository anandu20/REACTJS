import React,{useContext} from 'react'
import {ThemeContext} from "./ThemeProvider"
const content = () => {
  
    const {theme,toggleTheme}=useContext(ThemeContext)
    return (
      <div>
          <header style={{
              padding:"20px",
              backgroundColor:theme==="light"?"blue":"green",
              color:theme==="light"?"green":"blue"
          }}>
            <p>Strike first strike hard cobrakai never Dies</p>
              <button style={{
                   padding:"20px",
                   backgroundColor:theme==="light"?"green":"blue",
                   color:theme==="light"?"blue":"green"
               }} onClick={toggleTheme}> ToggleTheme  </button>
  
          </header>
        
      </div>
    )
 
}

export default content

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>

    <h1 className="border border-gray-300 shadow-lg shadow-pink-500/10  border-2 rounded-md p-4 text-xl my-4 ">
      Dua Lipa (Singer)
    </h1>

    <div className="border border- pink -100 shadow-lg shadow-pink-500/15  rounded-md p-8  ">
    <h1 className="font-sans p-4 text-xl">About Dua Lipa</h1>
    <h1 className="font-sans p-4 text-lg italic">Dua Lipa is an English and Albanian singer and songwriter. Her accolades include seven Brit Awards and three Grammy Awards. Time magazine included her in its list of the 100 most influential people in the world in 2024. Lipa worked as a model before venturing into music and signing with Warner Bros. in 2014Lipa worked as a model before venturing into music and signing with Warner Bros. in 2014. She released her eponymous debut album in 2017, which peaked at number three on the UK Albums Chart and spawned the singles "Be the One", "IDGAF", and the UK number-one single "New Rules". She was honoured with the Brit Awards for British Female Solo Artist and British Breakthrough Act in 2018. Her second UK number-one single, "One Kiss" with Calvin Harris, was the best-selling song of 2018 in the UK and won the Brit Award for Song of the Year. She later won the Grammy Award for Best New Artist and for Best Dance Recording for "Electricity" featuring Silk City in 2019. 
    </h1>
    <h3 className="font-sans p-4 text-lg ">
      Born: 22 August 1995 (age 29 years), London, United Kingdom <br />
      Height: 1.73 m <br />
      Nationality: Albanian, British <br />
      Parents: Anesa Lipa, Dukagjin Lipa <br />
      Siblings: Rina Lipa, Gjin Lipa</h3>
    </div> 
    <div className='flex space-x-8 my-4'>
    <button className='bg-pink-500 border  border-2 rounded-md p-2 '> About </button>
    <button className='bg-pink-500 border  border-2 rounded-md p-2'>Awards</button>
    <button className='bg-pink-500 border  border-2 rounded-md p-2'>Carrer</button>
    </div>
  </div>  
  

    
  )
}

export default App

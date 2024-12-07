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


  
   <div className="bg-fixed bg-no-repeat bg-top bg-cover  border border-pink-300 border-2  rounded-md  shadow-lg shadow-pink-500/15 text-white  h-auto   w-7/12 m-auto p-6  text-base" style={{backgroundImage: `url(img/dua.webp)`}}>
   <p>Dua Lipa is an English singer, songwriter, and model. Her musical career began at age 14, when she began covering songs by other artists on YouTube. In 2015, she was signed with Warner Music Group and released her first single soon after. In December 2016, a documentary about Lipa was commissioned by The Fader magazine, titled See in Blue. In January 2017, Lipa won the EBBA Public Choice Award. Her self-titled debut studio album was released on 2 June 2017. The album spawned seven singles, including two UK top-10 singles "Be the One" and "Idgaf" and the UK number-one single "New Rules", which also reached number six in the US. In 2018, Lipa won two Brit Awards for British Female Solo Artist and British Breakthrough Act.Lipa was born in London, to Albanian parents from Kosovo who had left Pristina in the 1990s. She attended Sylvia Young Theatre School, part-time, before moving to Kosovo with her family in 2008. Lipa grew up listening to her father, singer Dukagjin Lipa. Her given name means "love" in Albanian; its atypical nature was cause for distaste in her youth, but she grew to "enjoy" it as it eliminated the need for a stage name. At the age of 14, she began posting covers of her favorite songs by artists such as P!nk and Nelly Furtado on YouTube. At the age of 15, she moved back to London with aspirations of becoming a singer. Shortly after, she began working as a model. In 2013, she starred in a television advertisement for The X Factor.
   In 2015, Lipa began working on her debut album for Warner Music Group. In August 2015, she released her first single "New Love", produced by Emile Haynie and Andrew Wyatt. She released her second single "Be the One", in October 2015. "Be the One" achieved success across Europe, reaching number one in Belgium, Poland and Slovakia, as well as charting within the top 10 in over 11 European territories. In Australia and New Zealand, the song became an airplay success, reaching numbers 6 and 20 respectively. Lipa describes her musical style as "dark pop". On 30 November 2015, she was revealed as one of the acts on the BBC Sound of...2016 long list. Her first tour in the UK and Europe began in January 2016. In November 2016, Lipa concluded her tour through Europe.

In January 2018, Lipa received nominations in five categories at the 2018 Brit Awards, more nominations than any other artist that year. She was nominated for British Female Solo Artist, British Breakthrough Act, MasterCard British Album of the Year (Dua Lipa), British Single of The Year ("New Rules") and British Video of The Year ("New Rules"). This was the first time that a female artist had received five nominations.[36] She performed at the awards ceremony held on 21 February at the O2 Arena in London and collected the awards for British Female Solo Artist and British Breakthrough Act.n January 2018, Lipa received nominations in five categories at the 2018 Brit Awards, more nominations than any other artist that year. She was nominated for British Female Solo Artist, British Breakthrough Act, MasterCard British Album of the Year (Dua Lipa), British Single of The Year ("New Rules") and British Video of The Year ("New Rules"). This was the first time that a female artist had received five nominations.[36] She performed at the awards ceremony held on 21 February at the O2 Arena in London and collected the awards for British Female Solo Artist and British Breakthrough Act.

Lipa announced via social media that she had begun working on new material for her second album. She is working with MNEK, who previously co-wrote her single "Idgaf". The singer also collaborated with electronic music producer Whethan on a song called "High" for the Fifty Shades Freed soundtrack released in February 2018.
- IMDb Mini Biography By: ahmetkozan

Lipa announced via social media that she had begun working on new material for her second album. She is working with MNEK, who previously co-wrote her single "Idgaf". The singer also collaborated with electronic music producer Whethan on a song called "High" for the Fifty Shades Freed soundtrack released in February 2018.
- IMDb Mini Biography By: ahmetkozan</p>
    </div>
  
  
    

  </div>  






  

    
  )
}

export default App

import { useCallback,useState} from 'react'
import './App.css'
import Child from './Child';

function App() {
  const [count,setCount]=useState(0);
  const [number,setNumber]=useState([1,2,3,4,5]);

  const handleAddNumber=useCallback(()=>{
    setNumber((pre)=>([pre,pre.length+1]))
  },[])
  console.log("parent");
  
  return (
    <div style={{margin:"50px",textAlign:"center"}}>
      <h1>useCallback</h1>
    <p>count :{count}</p>
    <button onClick={()=>setCount((pre)=>pre+1)}>increment count</button>
    <Child addNumber={handleAddNumber}/>
    <div style={{marginTop:"50px"}}>
      <ul>
        {
          number.map((num,ind)=> <li key={ind}>Number :{num}</li>)
        }
      </ul>

    </div>
      
    </div>
  )
}

export default App

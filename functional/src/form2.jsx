// using usestate methord

import { useState } from "react";
import './App.css';
function App(){
    let [val,setVal]=useState({
            name:"",
            age:""
    })
    const handleChange=(e)=>{
        console.log(e.target.name+ "" +e.target.value);
        
        setVal((pre)=>{return{...pre,[e.target.name]:e.target.value}})
    }

    const onHandleSubmit=(e)=>{

        e.preventDefault();
        console.log(val);
        
    }

    return(
        <>
        <form action="">
            <input type="text" placeholder="name" name="name" onChange={handleChange}/>
            <input type="text" placeholder="name" name="age" onChange={handleChange} />
            <button onClick={onHandleSubmit}>submit</button>

        </form>
        </>
    )
}
export default App
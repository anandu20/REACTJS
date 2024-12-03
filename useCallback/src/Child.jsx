import React,{memo} from 'react'

const Child = ({addNumber}) => {
    console.log("child component re-rendered");
    
  return (
    <div>
        <button onClick={addNumber}> Add Number</button>
      
    </div>
  )
}

export default memo(Child) 

import { useState } from "react";

function Todo(){
    let [val,setVal]=useState(0)
    function counter(){
        setVal(val+=1)
    }
    return(
        <>
        <button onClick={counter}>count{val}</button>
        </>
    )

}
export default Todo
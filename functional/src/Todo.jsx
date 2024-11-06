// import { useState } from "react";

// function Todo(){
//     let [val,setVal]=useState(0)
//     function counter(){
//         setVal(val+=1)
//     }
//     return(
//         <>
//         <button onClick={counter}>count{val}</button>
//         </>
//     )

// }
// export default Todo

// 


import { useState } from "react";
// import './App.css';
function App(){
   
    const [task,setTask]=useState("")
    const [todo,setTodo]=useState([])

    const addTask=()=>{
        console.log(task);
        task?setTodo(pre=>([...pre,task])):alert("add task")
        setTask("")
    }
    console.log(todo);
    
    return(
        <>
        <div>
        <input type="text" placeholder="task"  onChange={(e)=>setTask(e.target.value)} value={task}/>
            
           <button onClick={addTask}>Add Task</button>

        </div>
        <ul>
            {
                todo.map((task)=><li>{task}</li>)
            }
        </ul>     
        </>
    )
}
export default App
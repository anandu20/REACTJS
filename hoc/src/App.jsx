// import { useEffect,useState } from 'react'
// import withLoader from './HOC';
// import './App.css'
// import BaseComponent from './BaseComponent'
// const EnhanceDataDisplay=withLoader(BaseComponent);

// function App() {
//   const [data,setData]=useState([]);
//   const [isLoading,setIsLoading]=useState(true)
//   useEffect(()=>{
//     setTimeout(()=>{
//       setData(["item1","item2","item3"]);
//       setIsLoading(false)
//     },1000);
//   },[])


//   return <EnhanceDataDisplay isLoading={isLoading} data={data}/>
// }

// export default App

import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App(){
  const notify = () =>toast.error('🦄 Wow so easy!', {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    // transition: "slide",
    });
  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}

export default App
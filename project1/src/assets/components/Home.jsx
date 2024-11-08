import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

function Home(){
  
    let [inputVal,setInputVal]=useState("")
    let [items,setItems]=useState([])
    let [filter,setFilter]=useState("");
    let [category,setCategory]=useState([]);

    useEffect(()=>{
     const fetchData=async()=>{
    const res=await fetch('https://dummyjson.com/products');
    const data=await res.json();
    setItems([...data.products])

    const rescat=await fetch('https://dummyjson.com/products/categories');
    const datacat=await res.json();
    setCategory([...datacat])
     }
     console.log(category);
     fetchData();
    },[]);
if (items.length==0)return <h1>Loading.....</h1>
 


  return(  <>
<div style={{display:"flex"}}>
    <section style={{margin:"0 10px 0 10px"}} onClick={()=>setFilter("")}>ALL</section>
    {
        category.map((cat,index)=><section style={{margin:"0 10px 0 10px"}} key={index} onClick={()=>setFilter(cat.name)}>{cat.name}</section>)
    }

</div>
  
  <h2 align="center" style={{marginBottom:"1%"}}>ALL PRODUCTS</h2>
  <input className="input" name="text" placeholder="Search for products and more..." type="search"/>
      <div className="main">
        {items.map((item,ind)=>{
          return (<div className="item" key={ind}>
            <img src={item.thumbnail} alt="" />
            <p>{item.title.substring(0,20)}</p>
            <p><b>${item.price}</b></p>
            </div>
            )
        })}
      </div>
  </>
  )

}

export default Home;
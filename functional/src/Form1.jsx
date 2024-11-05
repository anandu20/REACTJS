import React, { Component } from "react";
export class Form1 extends Component{
    state={name:"",age:""}
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state.name);
        console.log(this.state.age);
        
    }
    onHandleChange =(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    render(){
        return(
            <div>
                <form action="">
                    <input type="text" name="name"  placeholder="Name" onChange={this.onHandleChange} />
                    <input type="text" name="age"  placeholder="Age"  onChange={this.onHandleChange}/>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}
export default Form1
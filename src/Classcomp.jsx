import React from "react";


class Mycolor extends React.Component{
   constructor()
   {
    super();
    this.state ={
        color:"green",
        count : 0
        };
   }
    
   add = ()=> {
    this.setState({
       color : "red",
       count : 10
    })  
   }
   
//    function add(params) {
//     this.setState({
//         count:15
//     })
//    }
 
   
    render()
    {
        return <div>
            <h1>My Favorite Color is  {this.state.color}</h1>
            <h2>Count : {this.state.count}</h2>
            <button onClick={this.add}>Add</button>
            </div>;
         
    }
}

export default Mycolor;
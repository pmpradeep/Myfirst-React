import {useState,createContext,useContext} from "react";


const UserContext =createContext();


export default function Usecontext()
{

    const[user,setUser] = useState("Ravi")
    return(
     <UserContext.Provider value ={user}>
        <h1>{`Hello ${user}!`}</h1>
        <Comp2 user={user}/>
     </UserContext.Provider>
    );


}


function Comp2(){
    return(
    <>
       <h1>Usecontext is used to store state in a comp and use in any comp </h1>
      <h1>Comp 2</h1>
      <Comp3/>
    </>
    );
}

function Comp3()
{
    return(
        <>
        <h1>Comp 3</h1>
        <Comp4 />
      </>
    );

   
}

function Comp4()
{
    const user = useContext(UserContext)
    return(
       <>
        <h1>Comp 4</h1>
        <h2>{`Hello ${user} again!`}</h2>
       </>
    );
}

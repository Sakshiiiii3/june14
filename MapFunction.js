import React,{useState,useEffect} from "react";
function MapFunction(){
    const users = [{name:"a",number:'1234',email:"user.com"},
        {name:"a",number:'1234',email:"user.com"},
        {name:"a",number:'124',email:"user.com"}
    ];
    
    return(
        <div>
            <h1>Handle Array with List</h1>
            <table border={1}>
                <tbody>
                <tr>
                   <td>Name</td>
                   <td>Number</td>
                   <td>Email</td>
                </tr>
            
                {
                users.map((users,i)=>
        users.number==="1234" ?
        <tr key={i}>
       <td>{users.name}</td>
       <td>{users.number}</td>
       <td>{users.email}</td>
       </tr>  :
       null
              
    )} </tbody>
    </table>
            
        </div>
    )
}
export default MapFunction;
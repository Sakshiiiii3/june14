import React from "react";
function User(props){
    return(
    <div>
    
    <span> {props.data.name}</span>
    <span>{props.data.email}</span>
    <span> {props.data.number}</span>
    </div>
    )
}
export default User;
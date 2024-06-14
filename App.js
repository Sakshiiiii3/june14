import React from 'react';
import './App.css';
import User from './User';
import Child from './Child';
function App() {
  const user = [{name:"a",number:'1234',email:"user.com"},
    {name:"a",number:'1234',email:"user.com"},
    {name:"a",number:'124',email:"user.com"}
];
 
   function getData(name){
     alert(name);
   }
  return (
    <div className="App">
      
      {
        user.map((item)=><User data={item} />)
      }

      <h4>Lifting state up</h4>
      <Child data={getData} />
    </div>
  );
}

export default App;

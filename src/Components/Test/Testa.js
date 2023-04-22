import React from 'react'


const user = [
    {name:"Pedro",school :{name: "US"}},
    {name:"jake",school : {name : "London"}},
    {name:"Logan",school : null},
    
];
const Testa = () => {
    const abc = <h1>hii</h1>;
  return (
    <div className='App'>
    {user.map((user) => {
        return  (
            <div>
            <h1>Name : {user.name}</h1>
            <h1>School : {user.schll}</h1>
            </div>
          
        )
    })}
    const abc = <h1>hii</h1>;
   </div>

  )
}

export default Testa
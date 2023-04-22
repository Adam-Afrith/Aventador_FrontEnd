import React from 'react'


const user = [
    {name:"Pedro",school :{name: "US"}},
    {name:"jake",school : {name : "London"}},
  //  {name:"Logan",school : null},
    
];
const Testc = () => {
    const abc = <h1>hii</h1>
  return (
   <div className='App'>
    {user.map((user) => {
        return  (
            <div>
            <h1>Name : {user.name}</h1>
            <h1>School : {user.school?.name}</h1>
            </div>
          
        )
    })}
    
   </div>
  )
}

export default Testc
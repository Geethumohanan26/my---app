import {useState,useEffect} from 'react';
import Counter from './Counter';



function App() {
  const[state,setState]=useState(false)
  
    
  
 
  return (
    <div className='App'>
      <h1 onClick={()=>setState(!state)}>Show/Hide</h1>
      {state &&<Counter/>}
    </div>
  );
}

export default App;














//import React, { useState } from "react";
// import "./App.css"

// function App() {
//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);

//   const addTask = () => {
//     setTasks([...tasks, task]);
//     setTask("");
//   };

//   return (
//     <div className="App">

//       <div className="mainHeading">
//         <h1>To-Do List</h1>
//       </div>

//       <div className="subHeading">
//         <h2>Add Your Tasks</h2>
//       </div>

//       <div className="inputSection">
//         <input
//           type="text"
//           placeholder="Enter task..."
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//         />
        
//         <button onClick={addTask}>+</button>
//       </div >

//       <div className="tasks">
//         {tasks.map((t, index) => (
//           <div className="task" key={index}>
//             <div className="task">{t}</div>
//             <div className="left">
//               <input type="checkbox" />
//               <span>{t}</span>

               
//             </div>
//             <div className="right">
//               <span>{t}</span>

//             </div>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }

// export default App;

















// import  react,{useState} from 'react';

// import Counter from './Counter';




// function App(){
//   const[count,setCount]=useState(0)
// const addCount=()=>{
//   setCount(count+1)
// };
// let obj ={
//   title:'1st Counter',i
//   count
// }


  
//   return (
//     <div className="App">
//     <button onClick={addCount}>Add</button>

//       <Counter{...obj}/>
//       <Counter title='2nd Counter' count={count}/>


//     </div>
//   );
// }

// export default App;




// import  { useState } from 'react'
// import Counter from './Counter';

// function App() {
//   const[state,setState]=useState(false)
//   return (
//     <div className="App">
//       <h1 onClick={()=>setState(!state)}>Show/Hide</h1>

//      {state && <Counter/>}

      
//     </div>
//   );
// }

// export default App;


// useEffect

// import React,{useState,useEffect} from "react";
// import Counter from "./Counter";
// function App(){
//   const[state,setState]=useState(false)

// return(
//   <div>
//     <h1 onClick={()=>setState(!state)}>Show/Hide</h1>
//     {state && <Counter/>}
//   </div>
// );
// }
// export  default App;




// import React, { useState } from 'react';
// import Counter from './Counter';


// function App() {
//   const[state,setState]=useState(false)
  

  
  
  
//   return (
//     <div className='App'>
//    <h1 onClick={()=>setState(!state)}>Show/Hide</h1>
//    {state &&<Counter/>}
//     </div>
//   );
// }

// export default App;

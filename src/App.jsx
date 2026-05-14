// import {useState,useEffect} from 'react';
// import Counter from './Counter';




// function App() {
//   const[state,setState]=useState(false)
  
    
  

 
//   return (
//     <div className='App'>
//       <h1 onClick={()=>setState(!state)}>Show/Hide</h1>
//       {state &&<Counter/>}
//     </div>
//   );


 
import {useState} from 'react';
import "./App.css";

function App() {
    const[tasks,setTasks]=useState([]);
    const[task,setTask]=useState("");
    const addTask=()=>{
        console.log(task);
        setTasks([...tasks,task]);
        setTask("");
    }
    const deleteTask=(index)=>{
      const updatedTasks = tasks.filter((_,i)=>i !==index);
      setTasks(updatedTasks);
    };
  return (
    <div>
      <h1>To Do List</h1>
      <div className='inputbox'>
        <input type='text'placeholder='Enter task' value={task}onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={addTask}>Add</button>

      </div>
      <div className='tasks'>
        {tasks.map((t,i)=>(
            <div className='task' key={i}>
                <input type='checkbox'/>
                <span>{t}</span>
                <button onClick={()=>deleteTask(i)}>Delete</button>

            </div>
        ))}

      </div>
    </div>
  );
}

export default App;

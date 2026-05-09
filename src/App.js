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
import   "./App.css";
function App(){
  const[tasks,setTasks]=useState([])
   const[task,setTask]=useState("")
  const addTask =()=>{
    console.log(task);
    setTasks([...tasks,task]);
    setTask("")
  };
  return(
    <div className='App'>
      <h1>To Do List</h1>
      <div className='inputbox'>
        <input type='text' placeholder='Enter task' value={task}onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={addTask}>Add</button>

      </div>
      <div className='tasks'>
        {tasks.map((t,index)=>(
          <div className='task'key={index}>
            <input type="checkbox"/>
            <span>{t}</span>


          </div>
        ))}


      </div>

    </div>
  );
  }
  export default App;
  
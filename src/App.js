import TaskList from './components/TaskList';
import {  v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import './App.css';

const App=() =>{
  const [taskData,settaskData]=useState([])
  const [todo,settodo]=useState("")
  const [placeCount,setplaceCount]=useState("")

  const toChange=(event)=>{

    
    settodo(event.target.value)
    
    let count=0

    const returnedCount=taskData.map(each=>{
      
      if (each.task===event.target.value){
        count+=1
      }
      return count


    })
    

    if (count===0){
      setplaceCount("")
    }
    else{
      setplaceCount(count)
    }
    

  }

  const toAdd=()=>{
    const updateTodo={
      id:uuidv4(),
      task:todo,
      count:0

    }
    settaskData([...taskData,updateTodo])
    settodo("")
    setplaceCount("")

  }
  const editData=(item)=>{
    const data=taskData.map(each=>{
      if (item.id===each.id){
        each.task=item.task
        each.count=each.count+1
        return each

      }
      return each
    })

    settaskData(data)
    settodo("")
    setplaceCount("")
    
  }

  const deleteData=(item)=>{
    const data=taskData.filter(each=>each.id!==item.id)

    settaskData(data)
    settodo("")
    setplaceCount("")
  }


  return (
    <div className="App">
      <h1>Day Goals!</h1>
       <div className="userData">
        <div className="inputSection">
        <input type="text" onChange={toChange} value={todo}  placeholder="Add todo"/>
        <p>{placeCount}</p>
        </div>
        <button type="button" onClick={toAdd}>Add todo</button>
        </div>
        <ul>
          {
            taskData.map(item=>
              <TaskList key={item.id} data={item} editeddata={editData} delData={deleteData}/>)
          }
        </ul>
        
      
    </div>
  );
}

export default App;

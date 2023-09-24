import React from 'react'
import { useState } from 'react'

const Tasks = () => {
  
    const [title, settitle] = useState("")
    const [discription, setDiscription] = useState("")
  
  
    const [mainTask, setMainTask] = useState([])
  
    const submitHandle = (e)=>{
        e.preventDefault()
        setMainTask([... mainTask , {title , discription}])
        
        settitle("")
        setDiscription("")
        // console.log(mainTask)
    }
  
    const deleteHandler= (i) => { 
  
      let copyTask = [...mainTask]
      copyTask.splice(i , 1)
      setMainTask(copyTask)
  
    }
  
  
  
      let renderTask = <h2>No Task Available</h2>
  
  
      if (mainTask.length>0){
  
        renderTask =  mainTask.map((t,i)=>{
          return(
  
            <li key={i} className=' flex items-center justify-between mb-5'>
  
            <div className=' w-2/3'>
            <h3 className='text-2xl font-semibold'>{t.title}</h3>
            <p className='text-bold font-semibold ml-3' >{t.discription}</p>
  
          </div>
          <button 
          onClick={deleteHandler}
          className='bg-red-400 px-4 py-2 text-white font-bold rounded'>Delete</button>
            </li>
          )  
      })
  
      }
  
  
    return (
      <>
      
      <h1 
      className=' bg-purple-500 text-white text-2xl p-5 text-center '>My To Do List</h1>
  
  
      <form onSubmit={submitHandle}>
  
        <input
          required
          type="text" placeholder='Enter Task...'
          className='text-2xl border-zinc-800 border-2 m-5 px-5 py-4 ' 
          value={title}
          onChange={(e)=>{ settitle(e.target.value)}}
            
          />
  
          <input 
            type="text" placeholder='Enter Discription...' 
           className='text-2xl border-zinc-800 border-2 m-5 px-5 py-4 ' 
           value={discription}
           onChange={(e)=>{setDiscription(e.target.value)}}
          />
  
          <button
            className='bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5'
          >Add Task</button>
  
      </form>
  
      <hr />
  
      <div className='p-8 bg-slate-200 '>
  
        <ul>
            {renderTask}
        </ul>
      </div>
      
      </>
    )
}

export default Tasks
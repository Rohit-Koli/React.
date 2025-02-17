import React from 'react'

const TaskList = ({tasks}) => {
  return (
    <>
    <ul>
        {tasks.map((task,index)=>(
            <li key={index}>
                {task.isCompleted ?"☑️ ":"⬜ "} {task.title}
            </li>
        ))}
    </ul>
    
    </>    
  )
}

export default TaskList

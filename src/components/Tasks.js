import React from 'react'
import Task from './Task'

function Tasks({tasks, onDel, onReminder}) {
  
  return (
    <div>
      {tasks.map((el) =><Task task = {el} onDel={onDel} onReminder={onReminder}/>)}
    </div>
  )
}

export default Tasks
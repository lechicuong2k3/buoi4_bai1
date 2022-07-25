function Task({task, onDel, onReminder}) {
  return (
    <div className={`task ${task.reminder ? "reminder" : ''}`} onDoubleClick={() => onReminder(task.id)}>
        <h3>{task.text}</h3>
        <p>{task.time}</p>
        <input type='submit' value='Delete' className='btn btn-block' onClick={() => onDel(task.id)}/>
    </div>
  )
}

export default Task
import React from 'react'
import TaskShow from './TaskShow'

function TaskList( { tasks, onPush, onUpdate } ) {
  return (
    <div className="TaskList">
        {tasks.map((task, index) => {
            return <TaskShow key={index} task={task} onPush={onPush} onUpdate={onUpdate}/>
        })}
    </div>
  )
}

export default TaskList
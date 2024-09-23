import React from 'react';
import { useState } from 'react';
import TaskCreate from './TaskCreate';

function TaskShow( { task, onPush, onUpdate } ) {
    const [update, setUpdate] = useState(false)

    const handleClick = () => {
        onPush(task.id)
    }

    const handleUpdate = () => {
        setUpdate(!update);
    }

    const handleSubmit = (id,updatedTitle,updatedDesc) => {
        setUpdate(false);
        onUpdate(id,updatedTitle,updatedDesc);
    }
    

  return (

    <div>
      {update ? <TaskCreate task={task} isUpgrade={true} onUpdate={handleSubmit} /> :
      <div className="TaskShow">
        <h3>Görev</h3>
        <p>{task.title}</p>

        <h3>Açıklama</h3>
        <p>{task.desc}</p>

        <div className="buttons">
            <button onClick={handleClick} className="delete btn">
                Sil
            </button>

            <button onClick={handleUpdate} className="upgrade btn">
                Düzenle
            </button>
        </div>
    </div> }
    </div>
    
  )
}

export default TaskShow
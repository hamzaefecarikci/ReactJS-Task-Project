import React from 'react';
import { useState } from 'react';

function TaskCreate( { onCreate, task, isUpgrade, onUpdate } ) {
    const [title, setTitle] = useState(isUpgrade ? task.title : '');
    const [titleDesc, setTitleDesc] = useState(isUpgrade ? task.desc : '');

    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleChangeTitleDesc = (event) => {
        setTitleDesc(event.target.value)
    }

    const handleClick = (event) => {

        if(isUpgrade)
        {
            onUpdate(task.id,title,titleDesc);
        }
        
        else
            onCreate(title,titleDesc);

        setTitle('');
        setTitleDesc('');

        event.preventDefault();
    }

  return (

    <div>
        {isUpgrade ? 
        <div className="TaskUpgrade">
            <form className="task-form">
                <label className="task-label">Başlığı Düzenleyiniz</label>
                <input className="task-text" type='text' value={title} onChange={handleChangeTitle}/>
                

                <label className="task-label">Task Düzenleyiniz</label>
                <textarea value={titleDesc} onChange={handleChangeTitleDesc}></textarea>

                <button onClick={handleClick} className="task-button">
                    Güncelle
                </button>
            </form>
        </div> 
        : 
        <div className="TaskCreate">
            <form className="task-form">
                <label className="task-label">Başlık</label>
                <input className="task-text" type='text' value={title} onChange={handleChangeTitle}/>
                

                <label className="task-label">Task Girin</label>
                <textarea value={titleDesc} onChange={handleChangeTitleDesc}></textarea>

                <button onClick={handleClick} className="task-button">
                    Onayla
                </button>
            </form>
        </div>}
    </div>

    
  )
}

export default TaskCreate
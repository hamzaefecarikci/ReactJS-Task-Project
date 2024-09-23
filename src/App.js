import './App.css';
import { useState } from 'react';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';

function App() {
  const [titles, setTitles] = useState([]);

  const handleCreate = (title, desc) => {
     const createdTask =[
      ...titles,
      {
        id:Math.round(Math.random()*99999),
        title,
        desc
      }];
    setTitles(createdTask);
  }

  const onPush = (id) =>{
    const newTask = titles.filter((task) => {
      return task.id !== id;
    })
    setTitles(newTask);
  }

  const onUpdate = (id,updatedTitle,updatedDesc) => {
    const updatedTask = titles.map((task) => {
      if(task.id === id)
      {
        return {id,title:updatedTitle,desc:updatedDesc}
      }
      return task;
    })
    setTitles(updatedTask);
  }

  return (
    <div className="App"> 
      <h2>Lütfen Task Giriniz!!</h2>
      <TaskCreate onCreate={handleCreate} onUpdate={onUpdate}/>

      <h2>Görevler</h2>
      <TaskList tasks={titles} onPush={onPush} onUpdate={onUpdate}/>
    </div>
  );
}

export default App;
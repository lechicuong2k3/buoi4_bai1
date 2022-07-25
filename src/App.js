import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from './components/About';

function App() {
  const [listTasks, setListTasks] = useState(
    [
      {
        id: 1,
        text: "Tập gym",
        time: "7:00",
        reminder: true,
      },
      {
        id: 2,
        text: "Nấu cơm trưa",
        time: "11:00",
        reminder: false,
      },
      {
        id: 3,
        text: "Đi học",
        time: "12:30",
        reminder: true,
      },
      {
        id: 4,
        text: "Đá bóng",
        time: "18:00",
        reminder: true,
      },
    ]
  )
  

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setListTasks([...listTasks, newTask]);
  }

  const delTask = (id) => {
    setListTasks(listTasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setListTasks(
      listTasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Header title = "Techainer Bootcamp"  year='2022'/>
        <Routes>
          <Route path='/' element = {
            <>
              <AddTask onAdd = {addTask}/>
              <Tasks tasks={listTasks} onDel = {delTask} onReminder = {toggleReminder}/>
              <Link to="/about">About page</Link>
            </>
          }></Route>
          <Route path='/about' element ={<About/>}>

          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );


}

export default App;

import React from "react";
import { useState, useEffect } from "react";
import Task from "./Task";

function Home () {

    const [tasks, setTask] = useState(localStorage.getItem("tasks") ? 
    JSON.parse(localStorage.getItem("tasks"))
    :[]);
    const [title, setTitle] = useState(" ");
    const [description, setDescription] = useState(" ");

    const submitHandler = (e) => {
        e.preventDefault()
        setTask([...tasks, {title, description}])
        setTitle("")
        setDescription("")


    }

    const deleteTask = (index) => {
        const filteredArr = tasks.filter((val, i) => {
            return i !== index;
        });
        setTask(filteredArr)
    }

    useEffect (() => {

        localStorage.setItem("tasks", JSON.stringify(tasks));

    }, [tasks]);

    return (
        <div className='heading'>
     
         <form onSubmit={submitHandler} >     
        <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea type="text" placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
        <button type="submit"> ADD daily goal </button>
        </form>
     
     {tasks.map((item, index) =>(
         <Task  key={index} 
         title={item.title} 
         description={item.description}
         deleteTask={deleteTask}
         index={index}  />
     ))}
        </div>
       );

}

export default Home
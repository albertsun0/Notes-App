import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Task from './Task'

const TaskList = () => {
    const [tasks, setTasks] = useState([])
    
    const toggleComplete = async (id, value) => {
        console.log(value)
        axios.patch(`http://localhost:3000/api/v1/tasks/${id}`, {completed:value})
        .then(function(response){
            console.log(response)
            updateTasks()
        })
        .catch(function(error){
            console.log(error)
        })
    }

    const addTask = async () =>{
        const task = document.getElementById("input").value;
        axios.post("http://localhost:3000/api/v1/tasks", {name:task})
        .then(function(response){
            console.log(response)
            updateTasks()
        })
        .catch(function(error){
            console.log(error)
        })
    }

    const deleteTask = async (id) =>{
        axios.delete(`http://localhost:3000/api/v1/tasks/${id}`)
        .then(function(response){
            console.log(response)
            updateTasks()
        })
        .catch(function(error){
            console.log(error)
        })
    }

    const updateTasks = async () =>{
        axios.get("http://localhost:3000/api/v1/tasks")
        .then(function(response){
            refresh(response.data.tasks)
        })
        .catch(function(error){
            console.log(error)
        })
    }

    useEffect(() => {
        updateTasks()
    }, [])

    const refresh = (data) => {
        console.log(data)
        setTasks(data)
    } 

    return (
        <div className = "p-4">
            <div class = "flex mb-4">
                <input type = "text" class = "w-5/6 border-2 mr-4 rounded-md dark:bg-gray-600 dark:border-transparent text-lg" id="input"></input>
                <button onClick = {() => addTask()} class = "p-4 bg-green-200 rounded-md flex-grow dark:bg-green-600"> Add Task</button>
            </div>
            
            {tasks && (
                tasks.map((task) =>{
                    console.log(task)
                    return <Task key={task._id} name = {task.name} complete = {task.completed} id = {task._id} delete = {deleteTask} toggleComplete = {toggleComplete}/>
                }) 
            )}
            
        </div>
    )
}

export default TaskList

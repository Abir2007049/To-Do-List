import React,{username, useState} from 'react' 
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import './index.css';

function ToDoList()
{
    const[tasks,setTasks]=useState(["Breakfast","Shower","Walk"]);
    const [newTask,setNewTask]=useState("");
    function handleInputChange(event)
    {
        setNewTask(event.target.value);

    }
    function addTask(index)
    {
        if(newTask.trim() !=="")
        setTasks(t=>[...t,newTask]);
        setNewTask("");


    }
    function deletetask(index)
    {
        const updatedtask=tasks.filter((_,i)=> i!==index);
        setTasks(updatedtask);

    }
    function moveTaskUp(index)
    {
        if(index>0)
        {
            const updatedtasks=[...tasks];
            [updatedtasks[index],updatedtasks[index-1]]=[updatedtasks[index-1],updatedtasks[index]];
            setTasks(updatedtasks);
        }

    }
    function moveTaskDown(index)
    {
       if(index<tasks.length-1){ const updatedtasks=[...tasks];
        [updatedtasks[index],updatedtasks[index+1]]=[updatedtasks[index+1],updatedtasks[index]];
        setTasks(updatedtasks);
       }

    }
    const handleClick = (e) => {
        e.target.textContent = "Done";
        e.target.style.background = "green";
        e.target.style.color = "aqua"; // Optional: change text color for contrast
    };
    
    
    return(<div className="todol">
        <h1>To Do List</h1>
        <div>
            <input
            type="text"
            placeholder="Enter A task"
            value={newTask}
            onChange={handleInputChange}
            />
            <button className="ab"
            onClick={addTask}>Add</button>
        </div>
        <ol>
            {tasks.map((task,index)=>
            <li key={index}>
                <span className="text"> {task}</span>
                <Badge  bg="secondary" as={Button}
                className="Delb"
                onClick={()=>deletetask(index)}>Delete</Badge>
                <Badge  bg="secondary" as={Button}
                className="Movb"
                onClick={()=>moveTaskUp(index)}>Up </Badge>
                <Badge  bg="secondary" as={Button}
                className="Movb"
                onClick={()=>moveTaskDown(index)}>Down</Badge>
                < Badge  bg="secondary" as={Button}onClick={(e) => handleClick(e)}>Undone</Badge>
            </li>)}
        </ol>

    </div>);

}
export default ToDoList
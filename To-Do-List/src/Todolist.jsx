import React, {useState} from "react"

useState

function Todolsit(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState([]);

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){

        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }

    }

    function deleteTask(index){

        const updatedTasks = tasks.filter((element,i) => i !== index);
        setTasks(updatedTasks); 
    }

    function moveTaskUP(index){
        
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index - 1]] = 
            [updatedTasks[index - 1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){

        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index + 1]] = 
            [updatedTasks[index + 1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }  

    return(
    
    <div className="To-Do-List">
        <header className="todo-header">
            <h2>My daily</h2>
            <h1>To-Do-List</h1>
        </header>
        <div>
            <input 
            type="text"
            placeholder="Type"
            value={newTask}
            onChange={handleInputChange}
            />
            <button 
            className="add-button"
            onClick={addTask}>
                +
            </button>
        </div>

        <ol>
            {tasks.map((task, index) =>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="move-button"
                    onClick={() => moveTaskUP(index)}>
                        UP
                    </button>
                    <button className="move-button"
                    onClick={() => moveTaskDown(index)}>
                        Down
                    </button>
                    <button className="delete-button"
                    onClick={() => deleteTask(index)}>
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=delete" />
                        <span class="material-symbols-outlined">
                            delete
                        </span>
                    </button>
                </li>
            )}
        </ol>

    </div>);

}
export default Todolsit
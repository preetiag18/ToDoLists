import { useState } from "react";

const Todo = () =>{
    const [toDoName ,setTodoName] = useState('');
    const[dueDate, setDueDate] = useState('');
    const [toDoList , setToDoList] = useState([]);

    const onChangeToDoName = (event) =>{
        setTodoName(event.target.value);
    }
    const onChangeDueDate = (event) =>{
        setDueDate(event.target.value);
    }

    const onChangeToDoNameHandler = (event)=>{
        event.preventDefault();
        
        setTodoName('');
        setDueDate('');
        setToDoList((prevState) => {
            return [...prevState ,
                {
                    name: toDoName,
                    date: dueDate,
                    id: Math.floor(Math.random()*20000)
                }
             ]
            
        });
        }

        const onDeleteHandler = (did) =>{
            
            setToDoList((prevState) =>{
                return (
                    [...prevState].filter((item)=>{
                        return item.id !== did
                    })
                )
            })

    }


    return (
        <div>
            <form >
                <label htmlFor="todo"> Task</label>
                <input id = "todo" type = "text" value = {toDoName} onChange = {onChangeToDoName} ></input>
                <label htmlFor = 'date' >Date</label>
                <input id = "date" type = "date" value = {dueDate} onChange = {onChangeDueDate}></input>
                <button type = "submit" onClick = {onChangeToDoNameHandler}>Submit</button>
            </form>
            <div>
                <ul>
                {
                toDoList.map((item) => {
                    return (
                        <li key = {item.id}> {item.name}   :   {item.date} 
                        <button type = "button" onClick={()=>onDeleteHandler(item.id)}>Delete</button>
                        </li>
                        
                    )
                }
                )
            }
                </ul>
            </div>
        </div>

    );
}
export default Todo;
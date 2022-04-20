import { useState } from "react";
import './Todo.css'

const Todo = () => {
    const [toDoName, setTodoName] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [toDoList, setToDoList] = useState([]);

    const onChangeToDoName = (event) => {
        setTodoName(event.target.value);
    }
    const onChangeDueDate = (event) => {
        setDueDate(event.target.value);
    }

    const onChangeToDoNameHandler = (event) => {
        event.preventDefault();

        setTodoName('');
        setDueDate('');
        setToDoList((prevState) => {
            return [...prevState,
            {
                name: toDoName,
                date: dueDate,
                id: Math.floor(Math.random() * 20000)
            }
            ]

        });
    }

    const onDeleteHandler = (did) => {

        setToDoList((prevState) => {
            return (
                [...prevState].filter((item) => {
                    return item.id !== did
                })
            )
        })

    }


    return (
        <div>
            <h2> Your todo list</h2>
            <form className="todoForm">
                <div>
                    <label htmlFor="todo"> Task: </label>
                    <input id="todo" type="text" value={toDoName} onChange={onChangeToDoName} ></input>
                </div>
                <div>
                    <label htmlFor='date' >Date: </label>
                    <input id="date" type="date" value={dueDate} onChange={onChangeDueDate}></input>
                </div>
                <button type="submit" onClick={onChangeToDoNameHandler}>Submit</button>
            </form>
            <div>
                <ul className="todoList">
                    {
                        toDoList.map((item) => {
                            return (
                                <li key={item.id} className="todoList__item">

                                    {item.name} {item.date}
                                    <button type="button" className= "todoList__item__delete" onClick={() => onDeleteHandler(item.id)}>Delete</button>

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
import React, { useState, useEffect } from "react";
import "./ToDolist.scss";
import { v4 as uuidv4 } from "uuid";


const ToDoList = () => {

    const intialState = JSON.parse(localStorage.getItem("todos")) || [];
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState(intialState);
    const [editTodo, setEditTodo] = useState(null);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    useEffect(() => {
        if (editTodo) {
            setInput (editTodo.title);
        } else {
            setInput ("");
        }
    }, [setInput, editTodo]);

    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(!editTodo) {
            setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
            setInput ("");
        } else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }
    };

    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id) {
                    return {...item, completed: !item.completed}
                }
                return item;
            })
        );
    }

    const updateTodo = (title, id ,completed) => {
        const newTodo = todos.map((todo) => 
            todo.id === id ? { title, id, completed } : todo
        );
        setTodos(newTodo);
        setEditTodo("");
    }

    const handleEdit = ({id}) => { 
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }



    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input type="text" 
                className="task-input" 
                placeholder="Enter a Todo..."
                value={input}
                required
                onChange={onInputChange}
                />
            </form>
            <button className="button-add" id="button-add" type="submit" onClick={onFormSubmit}>
                {editTodo ? "OK" : "Add"}
            </button>
            <div className="results">
                {todos.map((todo) => (
                    <li className="todo-list" key={todo.id}>
                        <input 
                            type="text" 
                            value={todo.title} 
                            // className="list" 
                            className={`list ${todo.completed ? "complete" : ""}`}
                            onChange={(event) => event.preventDefault()} 
                        />
                        <div>
                            <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
                                <i className="fa fa-check-circle"></i>
                                complete
                            </button>
                            <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
                                <i className="fa fa-check-circle"></i>
                                edit
                            </button>
                            <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
                                <i className="fa fa-check-circle"></i>
                                delete
                            </button>
                        </div>
                    </li>
                ))}
            </div>   
        </div>
)};

export default ToDoList;

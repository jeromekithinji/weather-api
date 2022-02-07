import React from "react";
import "./ToDoList.scss";
import Dustbin from '../../assets/images/bin.svg';

const ToDoList = () => {

    const taskList = document.querySelector(".inbox");
    const addTaskButton = document.querySelector(".add-new")

    // const newTask = addTaskButton.addEventListener("click", (event) => {
    //     taskList.append("<div className='item'><input type='checkbox'/><p className='text' contentEditable='true'>This is an inbox layout.</p><img className='dustbin' src={Dustbin} alt='image of bin' /></div>");
    // })

    const newTask = () => {
        console.log("works")
        taskList.innerHTML += (
            `<div className="item">
                <input type="checkbox" />
                <p className="text" contentEditable="true">Feed dog</p>
                <img className="dustbin" src={Dustbin} alt="Dustbin" />
            </div>`
        );
        store();
    }

    let totalTasks = 0;
    let checkboxes = 0;
    const getTotalTasks = () => {
        totalTasks = taskList.getElementsByTagName("div").length;
        checkboxes = taskList.getElementsByTagName("input").length;
        console.log(totalTasks);
        console.log(checkboxes);
        // return totalTasks;
    }

    let remainingTasks = 0;
    const getRemainingTasks = () => {
        remainingTasks = taskList.getElementsByTagName("div").length;
        console.log(remainingTasks);
        return remainingTasks;
    }

    let completedTasks = 0;
    const getCompletedTasks = () => {
        // allTasks = taskList.getElementsByTagName("div").length;
        console.log(completedTasks);
        return completedTasks;
    }

    const store = () => {
        window.localStorage.myitems = taskList.innerHTML;
    }

    // const getValues = () => {
    //     const storedValues = window.localStorage.myitems;
    //     if(!storedValues) {
    //         taskList.innerHTML = (`<div className="item">
    //         <input type="checkbox" />
    //         <p className="text" contentEditable="true">Feed dog</p>
    //         <img className="dustbin" src={Dustbin} alt="Dustbin" />
    //     </div>` +
    //     `<div className="item">
    //         <input type="checkbox" />
    //         <p className="text" contentEditable="true">Do homework</p>
    //         <img className="dustbin" src={Dustbin} alt="Dustbin" />
    //     </div>` +
    //     `<div className="item">
    //         <input type="checkbox" />
    //         <p className="text" contentEditable="true">Go to gym</p>
    //         <img className="dustbin" src={Dustbin} alt="Dustbin" />
    //     </div>` +
    //     `<div className="item">
    //         <input type="checkbox" />
    //         <p className="text" contentEditable="true">Finish cleaning</p>
    //         <img className="dustbin" src={Dustbin} alt="Dustbin" />
    //     </div>`)
    //     }
    //     else {
    //         taskList.innerHTML = storedValues;
    //     }
    //   }
    
    //   getValues();




    return (
        <div className="wrapper">
            <div className="align">
                <div className="app">
                    <div className="info">
                        <div className="info-bottom">
                            <div className="left">
                                <p id="count">{getTotalTasks}</p>
                                <p id="tasks">Total</p>
                            </div>
                            <div className="middle">
                                <p id="remaining_done">5</p>
                                <p id="remaining_tasks">Remaining</p>
                            </div>
                            <div className="right">
                                <p id="count_done">2</p>
                                <p id="tasks_done">Done</p>
                            </div>
                        </div>
                    </div>
                    <p id="allTasks">
                        <strong>Tasks</strong> for today
                    </p>
                    <div className="inbox">
                        <div className="item">
                            <input type="checkbox" />
                            <p className="text" contentEditable="true">Feed dog</p>
                            <img className="dustbin" src={Dustbin} alt="Dustbin" />
                        </div>
                        <div className="item">
                            <input type="checkbox" />
                            <p className="text" contentEditable="true">Do homework</p>
                            <img className="dustbin" src={Dustbin} alt="Dustbin" />
                        </div>
                        <div className="item">
                            <input type="checkbox" />
                            <p className="text" contentEditable="true">Go to gym</p>
                            <img className="dustbin" src={Dustbin} alt="Dustbin" />
                        </div>
                        <div className="item">
                            <input type="checkbox" />
                            <p className="text" contentEditable="true">Finish cleaning</p>
                            <img className="dustbin" src={Dustbin} alt="Dustbin" />
                        </div>
                        <div className="item">
                            <input type="checkbox" />
                            <p className="text" contentEditable="true">Pick up car</p>
                            <img className="dustbin" src={Dustbin} alt="Dustbin" />
                        </div>
                        <div className="item">
                            <input type="checkbox" />
                            <p className="text" contentEditable="true">Schedule appointment </p>
                            <img className="dustbin" src={Dustbin} alt="Dustbin" />
                        </div>
                    </div>
                    <div className="bottom">
                        <button onClick={newTask} className="add-new">Add new task</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToDoList;

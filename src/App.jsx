import "./App.css";
// import ToDoList from "./components/ToDoList/ToDoList";
import ToDoList from "./components/TodoList/ToDoList";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";

function App() {
    return (
        <div className="App">
            <body>
                <div className="weather">
                    <WeatherInfo />
                </div>
                <div className="todoList">
                    <ToDoList />
                </div>
            </body>
        </div>
    );
}

export default App;

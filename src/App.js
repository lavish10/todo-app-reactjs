import React, {Component} from 'react';
import './App.css';
import CreateTask from "./components/CreateTask";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
        this.handleAddTask = this.handleAddTask.bind(this);
    }

    handleAddTask(newTaskContent) {
        this.setState({
            tasks: this.state.tasks.concat(newTaskContent)
        });
    }

    render() {
        return (
            <div className="App">
                <h1>TODO APP</h1>
                <CreateTask newTask={this.handleAddTask}/>
                <ul>
                    {
                        this.state.tasks.map((task, id) => {
                            return <li id={`task_${id}`}>{task}</li>
                        })
                    }
                </ul>
            </div>
        );
    }

}

export default App;

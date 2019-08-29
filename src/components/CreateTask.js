import React, {Component} from 'react';
import '../App.css';

class CreateTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: ''
        };
        this.createNewTask = this.createNewTask.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    createNewTask(event) {
        this.setState({
            task: event.target.value
        });
    }

    handleSubmit() {
        this.props.newTask(this.state.task);
        this.setState({
            task: ''
        });
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Enter TODO" value={this.state.task} onChange={this.createNewTask}/>
                <button onClick={this.handleSubmit}>Add to TODO</button>
            </div>
        );
    }
}

export default CreateTask;
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class TaskView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li id={`task_${this.props.id}`}>{this.props.task}</li>
        );
    }
}

TaskView.propType = {
    id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired
};
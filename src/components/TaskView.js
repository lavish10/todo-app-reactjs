import React from 'react';
import '../App.css';

export default function TaskView(props) {
    return (
        <li id={`task_${props.id}`}>{props.task}</li>
    );
}
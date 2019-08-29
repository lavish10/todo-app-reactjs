import {shallow} from "enzyme";
import React from "react";
import CreateTask from "./CreateTask";

describe('create task test', function () {

    it('should render Field for entering Task', function () {
        const createTaskWrapper = shallow(<CreateTask/>);

        expect(createTaskWrapper.find('input')).toHaveLength(1);
    });
    it('should render Button to Add Task', function () {
        const createTaskWrapper = shallow(<CreateTask/>);

        expect(createTaskWrapper.find('button')).toHaveLength(1);
    });
});
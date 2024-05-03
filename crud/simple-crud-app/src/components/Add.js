import React, {useState} from "react";
import {Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employess from './Employees';
import { v4 as uuid} from 'uuid'
import {Link, useNavigate} from 'react-router-dom';

function Add(){
    const[name,setName] = useState('');
    const[surname,setSurName] = useState('');
    const[age,setAge] = useState('');

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqId = ids.slice(0,8);

        let a = name, b = surname, c = age;

        Employees.push({id: uniqId, Name : name, Surname : surname, Age : age});
        history("/");
    }

    return <div>
        <Form className="d-grip gap-2" style={{margin:"15rem"}}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter name"
                required onChange={(e) => setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSurname">
                <Form.Control type="text" placeholder="Enter surname"
                required onChange={(e) => setSurName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAge">
                <Form.Control type="text" placeholder="Enter age"
                required onChange={(e) => setAge(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button onClick={(e) =>
                handleSubmit(e)} type="submit">Submit</Button>
        </Form>
    </div>
}

export default Add;
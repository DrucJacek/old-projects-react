import React, {Fragment, useEffect, useState} from "react";
import {Button, Form, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employess from './Employees';
import { v4 as uuid} from 'uuid'
import {Link, useNavigate} from 'react-router-dom';

function Home(){

let history = useNavigate();

const handleEdit = (Id, Name, Surname, Age) => {
    localStorage.setItem('Name', Name);
    localStorage.setItem('Surname', Surname);
    localStorage.setItem('Age', Surname);
    localStorage.setItem('Id', Id);

}

const handleDelete = (Id) => {
    var index = Employees.map(function(e){
        return e.Id
    }).indexOf(Id);

    Employees.splice(index,1);
    history('/');
}
    return(
        <Fragment>
            <div style={{margin:"10rem"}}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Surname
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length > 0
                            ?
                            Employees.map((item) => {
                                return(
                                    <tr>
                                        <td>
                                            {item.Name}
                                        </td>
                                        <td>
                                            {item.Surname}
                                        </td>
                                        <td>
                                            {item.Age}
                                        </td>
                                        <td>
                                            <Link to={'/edit'}>
                                            <Button on onClick={() => handleEdit(
                                                item.Id, item.Name, item.Surname, item.Age)}>Edit</Button>
                                            </Link>
                                            &nbsp;
                                            <Button onClick={() => handleDelete(item.Id)}>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "Brak pracowników w bazie."
                        }   
                    </tbody>
                </Table>
                <br>
                </br>
                <Link className='d-grid gap-2' to="/create">
                    <Button size='lg'>Create</Button>
                </Link>
            </div>
        </Fragment>
    )
}

export default Home;
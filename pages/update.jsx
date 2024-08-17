import React, { useState,useEffect} from 'react';
import axios from 'axios';
// import GetReq from './getrout.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import CollapsibleExample from '../pages/navebar.jsx';
import Login from '../pages/login';
import { Outlet, Link } from 'react-router-dom';
import '../css/sig.css'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import Form from '../pages/form.jsx';
// import './demo.css'
function Update() {
    let [resp,setresp]=useState('')
   

    
    let [form, setform] = useState({
       uemail: '',
        name: '',
        lname:'',
        email: '',
        pass: '',
        dob: ''

    })



  

    let handlech = (e) => {

        let { name, value } = e.target;

        setform((data) => ({ ...data, [name]: value }))

    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(form)

        try {
            const response = await axios.patch('http://localhost:3001/update', form); // Your Node.js server endpoint
            console.log( response.data);
            setresp(response.data)
            // Optionally, update state or perform actions based on the response
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle errors appropriately, e.g., display an error message to the user
        }
    };






    return (
        
        <>
<CollapsibleExample/>
            <div className="container">
                <h1>Update</h1>

                <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="username">Enter Valid Email For Update:</label>
                <input type="text" id="username" value={form.uemail} name="uemail" autoComplete="on" onChange={handlech} placeholder=" Enter your email" required />
            </div>
<hr/>
                    <div className="form-group">
                        <label htmlFor="username">First Name:*</label>
                        <input type="text" id="username" value={form.name} name="name"  autoComplete="on" onChange={handlech} placeholder=" Enter your First Name" required />
                        
                     
                        </div>
                    <div className="form-group">
                    <label htmlFor="username"> Last Name:</label>
                    <input type="text" id="username" value={form.lname} name="lname" autoComplete="on" onChange={handlech} placeholder=" Enter your Last Name" required />
                </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" value={form.uname} name="email" autoComplete="on" onChange={handlech} placeholder="Enter your Email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="text" id="password" value={form.pass} name="pass" autoComplete="off" p onChange={handlech} laceholder="Enter your password" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">Date OF Birth</label>
                        <input type="text" id="confirm-password" value={form.dob} name="dob" autoComplete="off" onChange={handlech} placeholder="Enter Date Of Birth" required />
                    </div>
                    <button type="submit" onClick={handleSubmit}>Update</button>
                   


                </form>

                <Outlet />
              {resp.value==='Form data submitted: data submited' ? (<div><Alert variant="success"> {resp}</Alert></div>)
              :
             ( <div>  <Alert variant="danger"> {resp}</Alert></div>)
            }
            </div>


        </>

        
    )
}
export default Update;
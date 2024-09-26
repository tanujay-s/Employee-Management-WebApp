import React, { useState } from "react";
import axios from '../api/axios';
import { useNavigate } from "react-router-dom";
import '../App.css';

export default function Signup () {
    const [formData, setFormData] = useState({name:'',userName:'',password:''});
    const navigate = useNavigate();

    const handleChange = (e) =>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await axios.post('/register',formData);
            alert(response.data.message);
            navigate('/login');

        } catch(error) {
            console.error('Signup error: ', error);
            alert('Sign Up failed');
        }
    }   

    return (
        <div className="mainContainer">
            <form onSubmit={handleSubmit}>
                <input 
                    name="name"
                    type="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input 
                    name="userName"
                    type="username"
                    placeholder="Username"
                    value={formData.userName}
                    onChange={handleChange}
                />
                <input 
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    ); 
};
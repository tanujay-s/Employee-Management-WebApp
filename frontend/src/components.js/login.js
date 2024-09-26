import React, {useContext, useState} from "react";
import axios from '../api/axios';
import { AuthContext } from "../AuthContext";
import '../App.css';

export default function Login () {

    const [formData, setFormData] = useState({userName:'', password:''});

    const { login } = useContext(AuthContext);
  
    const handleChange = (e) =>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await axios.post('/login',formData);
            alert(response.data.message);
            const userData = response.data.user;
            login({
                name: userData.name
              });

        } catch(error) {
            console.error('Login error: ', error);
            alert('Login failed');
        }
    }   

    return (
        <div className="mainContainer">
        <form onSubmit={handleSubmit}>

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
            <button type="submit">Login</button>
        </form>
    </div>
    );
}
import React,{useState} from 'react';
import axios from '../api/axios';
import {Link,useNavigate} from  'react-router-dom';

const CreateEmployee = () => {
    const [formData, setFormData] = useState({
        image:'',
        name: '',
        email: '',
        mobile: '',
        designation: '',
        gender: '',
        course: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prevState => ({
                    ...prevState,
                    image: reader.result.split(',')[1] 
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await axios.post('/employee',formData);
            alert(response.data.message);
            navigate('/showEmployeeList');

        } catch(error) {
            console.error('Error: ', error);
            alert('Failed to create Employee');
        }
    };

    return (
        <div style={style.home}>
            <h2 style={style.heading}>Create Employee</h2>
                <div style={style.linkContainer}> 
                    <Link to="/showEmployeeList" style={style.createLink}>Employee List</Link>
                </div> 
            <div style={style.container}>
                <form onSubmit={handleSubmit}>
                    <div style={style.formGroup}>
                        <label htmlFor="name" style={style.label}>Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            style={style.input}
                            required
                        />
                    </div>
                    <div style={style.formGroup}>
                        <label htmlFor="email" style={style.label}>Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            style={style.input}
                            required
                        />
                    </div>
                    <div style={style.formGroup}>
                        <label htmlFor="mobile" style={style.label}>Mobile Number:</label>
                        <input
                            type="text"
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            style={style.input}
                            required
                        />
                    </div>
                    <div style={style.formGroup}>
                        <label htmlFor="designation" style={style.label}>Designation:</label>
                        <select
                            id="designation"
                            name="designation"
                            value={formData.designation}
                            onChange={handleChange}
                            style={style.select}
                            required
                        >
                            <option value="HR">HR</option>
                            <option value="Sales">Sales</option>
                            <option value="Manager">Manager</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div style={style.formGroup}>
                        <label style={style.label}>Gender:</label>
                        <div>
                            <label >
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    checked={formData.gender === 'Male'}
                                    onChange={handleChange}    
                                />
                                Male
                            </label>
                            <label >
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    checked={formData.gender === 'Female'}
                                    onChange={handleChange}
                                />
                                Female
                            </label>
                        </div>
                    </div>
                    <div style={style.formGroup}>
                        <label htmlFor="course" style={style.label}>Course:</label>
                        <select
                            id="course"
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            style={style.select}
                            required
                        >
                            <option value="BCA">BCA</option>
                            <option value="MCA">MCA</option>
                            <option value="BSC">BCA</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div style={style.formGroup}>
                        <label htmlFor="image" style={style.label}>Upload Image:</label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={handleImageUpload}
                            style={style.input}
                        />
                    <button type="submit" style={style.button}>Create Employee</button>
                    </div>
            </form>
        </div>
        </div>
    );
};

const style = {
    home: {
        backgroundColor: '#ffd60a',
        margin: '0px',
        padding: '2px',
        height: '50px',
    },
    heading: {
        marginLeft: '10px',
        fontSize: '20px',
    },
    linkContainer: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    createLink: {
        fontSize: '16px',
        textDecoration: 'none',
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '8px 12px',
        borderRadius: '4px',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px 0',
        backgroundColor: '#f4f4f4',
        minHeight: '100vh',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    formGroup: {
        marginBottom: '15px',
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        marginBottom: '5px',
        color: '#555',
    },
    input: {
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '16px',
    },
    select: {
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '16px',
        backgroundColor: '#fff',
    },
    button: {
        padding: '10px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#4CAF50',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer',
        marginTop: '10px',
    },
};

export default CreateEmployee;
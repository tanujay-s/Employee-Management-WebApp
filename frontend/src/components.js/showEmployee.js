import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";

const ShowEmployee = () => {
    const [employees, setEmployees] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredEmployees, setFilteredEmployees] = useState([]);
    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get('/employee');
                setEmployees(response.data);
                setFilteredEmployees(response.data);
            } catch (error) {
                console.error('Error fetching employees');
            }
        };
        fetchEmployees();
    }, []);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        const filtered = employees.filter(employee =>
            employee.name.toLowerCase().includes(value.toLowerCase()) ||
            employee.email.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredEmployees(filtered);
    };

    return (

        <div>
            <div style={style.home}>
                <h2 style={style.heading}>Employee List</h2>
                <div style={style.searchContainer}>
                    <h3>Total Count: {filteredEmployees.length}</h3>
                    <input
                        type="text"
                        placeholder="Search employees..."
                        value={searchTerm}
                        onChange={handleSearch}
                        style={style.searchBar}
                    />
                    <Link to='/createEmployee' style={style.createLink}>Create Employee</Link>
                </div>
            </div>
            <table style={style.table}>
                <thead>
                    <tr>
                        <th style={style.th}>UniqueId</th>
                        <th style={style.th}>Image</th>
                        <th style={style.th}>Name</th>
                        <th style={style.th}>Email</th>
                        <th style={style.th}>Mobile Number</th>
                        <th style={style.th}>Designation</th>
                        <th style={style.th}>Gender</th>
                        <th style={style.th}>Course</th>
                        <th style={style.th}>Create Date</th>
                        <th style={style.th}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredEmployees.length > 0 ? (
                        filteredEmployees.map((employee, index) => (
                            <tr key={employee._id}>
                                <td style={style.td}>{employee.uniqueId}</td>
                                <td style={style.td}>{employee.image}</td>
                                <td style={style.td}>{employee.name}</td>
                                <td style={style.td}>{employee.email}</td>
                                <td style={style.td}>{employee.mobile}</td>
                                <td style={style.td}>{employee.designation}</td>
                                <td style={style.td}>{employee.gender}</td>
                                <td style={style.td}>{employee.course}</td>
                                <td style={style.td}>{new Date(employee.createdAt).toLocaleDateString('en-GB')}</td>
                                <td style={style.td}>
                                    <button style={style.button}>Edit</button>
                                    <button style={style.button}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" style={style.noData}>
                                No employees found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
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
    searchContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'baseline', 
        gap: '20px', 
        marginBottom: '10px',
    },
    countText: {
        fontSize: '18px',
    },
    searchBar: {
        padding: '8px',
        width: '200px', 
        fontSize: '16px',
    },
    createLink: {
        fontSize: '16px',
        textDecoration: 'none',
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '8px 12px',
        borderRadius: '4px',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '50px',
    },
    th: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px',
        textAlign: 'left',
        border: '1px solid #ddd',
    },
    td: {
        padding: '10px',
        border: '1px solid #ddd',
        textAlign: 'left',
    },
    button: {
        margin: '0 5px',
        padding: '5px 10px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '4px',
    },
    noData: {
        textAlign: 'center',
        padding: '20px',
        color: '#888',
    },
};

export default ShowEmployee;
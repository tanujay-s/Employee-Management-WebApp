import React from "react";
import { Link } from "react-router-dom";

const EmployeeList = () => {
    return (
        <div>
            <div style={style.home}>
                <h2 style={style.heading}>Employee Management</h2>
            </div>
            <div style={style.content}>
                <div style={style.option}>
                    <Link to="/createEmployee" style={style.link}>
                        Create Employee
                    </Link>
                </div>
                <div style={style.option}>
                <Link to="/showEmployeeList" style={style.link}>
                        View Employee List
                    </Link>
                </div>

            </div>
        </div>
    );
};

const style = {
    home: {
        backgroundColor: '#ffd60a',
        margin: '0px',
        padding: '2px',
        height: '50px'
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: '30px',
        height: '50vh'
    },
    heading: {
        marginLeft: '10px',
        fontSize: '20px'
    },
    option: {
        marginTop: '100px',
        marginLeft: '50px',
        padding: '20px',
        backgroundColor: '#ffd60a',
        borderRadius: '10px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        width: '200px',
        height: ' 50px',
        textAlign: 'center',
        transition: 'all 0.3s ease',
    },
    optionHover: {
        transform: 'scale(1.05)',
    },
    link: {
        textDecoration: 'none',
        color: '#001d3d',
        fontSize: '18px',
        fontWeight: 'bold'
    },
};

export default EmployeeList;
import React from "react";

const EmployeeList = ()=> {
    return(
        <div>
            <div style={style.home}>
                <h2 style={style.heading}>Employee List</h2>
            </div>
             <div style={style.content}>
                <h2>Employee List</h2>
             </div>
         </div>
    );
};

const style = {
    home: {
        backgroundColor:'#ffd60a',
        margin: '0px',
        padding: '2px',
        height: '50px'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        textAlign: 'center',
        fontSize: '30px',
        height: '50vh'
    },
    heading: {
        marginLeft: '10px',
        fontSize: '20px'
    }
};

export default EmployeeList;
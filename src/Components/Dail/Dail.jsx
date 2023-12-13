import React from 'react';

const Dail = (props) => {
    return (
        <div style={{border: '2px solid green'}}>
            <h2>This is for dail!!!</h2>
            <h4>Steps for Dial: {props.steps} </h4>
        </div>
    );
};

export default Dail;
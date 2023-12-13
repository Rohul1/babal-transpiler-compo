import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0)

    const increaseSteps = ()=>{
        const newStepsCount = steps + 1;
        setSteps(newStepsCount);
    }
     useEffect (()=>{
        console.log("Hellow")
     },[steps])

    return (
        <div>
            <h2>This is my smart watch!!</h2>
            <h3>My current steps is : {steps}</h3>

            <button onClick={increaseSteps}>Steps Flows....</button>
            <Display name="LCD" steps={steps}></Display>
        </div>
    );
};

export default Watch;
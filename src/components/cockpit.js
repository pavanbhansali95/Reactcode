import React, { useEffect } from 'react';

const Cockpit = (props) => {
    console.log('inside  cockpit--');

    //working as componentdidmount
    useEffect(()=>{
        console.log('inside useeffect1 cockpit component--');
        alert('i am cockpit useeffect and will be caled only once');

        return () => {
            console.log('cockpit componnet removed from memory--');
        }
    },[]);

    useEffect(()=>{
        console.log('inside useeffect2 cockpit component--');
        alert('i am cockpit useeffect2 and will be caled again and again');
    });

    useEffect(()=>{
        console.log('inside useeffect3 cockpit component--');
        alert('i am cockpit useeffect3 and will be caled when props.ersons will change');
    },[props.persons]);


    return <div>

<h1>Welcome to {props.title}
    </h1>
<button onClick = {props.clicked}>Show Persons</button>
    </div> 
}

export default React.memo(Cockpit);
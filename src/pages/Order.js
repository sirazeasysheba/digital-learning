import React, { useState } from 'react';

const Order = () => {
    const [active,setActive]=useState(true);
    const [active2,setActive2]=useState(false);
    const handleChange=()=>{
        setActive2(!active2);
        setActive(!active);
    }
    console.log(active,active2)
    return (
        <div>
            <div className="d-flex">
                <button className="toggle-btn" onClick={handleChange}>B</button>
                <button className="toggle-btn">B</button>
                <button className="toggle-btn">B</button>
            </div>
        </div>
    );
};

export default Order;
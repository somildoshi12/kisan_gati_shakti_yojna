import React, { useState } from 'react'
import './Form.css';

export default function Form() {

    const [name, setName] = useState('');

    const handleName = (event) => {
        setName(event.target.value);
        // console.log(event.target.value);
    }

    return (
        <div className="formPage">
            <div className="form">

                <h1>Enter your details</h1>
                <br />
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Name" value={name} onChange={handleName} />
                    <label htmlFor="floatingInput">Enter your name</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
            </div>
        </div>
    )
}

import React, { useState } from 'react'
import './Form.css';

export default function Form() {

    const [name, setName] = useState('');
    const [states, setStates] = useState('');

    const handleName = (event) => {
        setName(event.target.value);
        // console.log(event.target.value);
    }

    const handleDropDown = (event) => {
        setStates(event.target.value);
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
                <select class="form-select my-3" aria-label="Default select example" onChange={handleDropDown}>
                    <option selected> --- Select your State -- </option>
                    <option value="1">Andhra Pradesh</option>
                    <option value="2">Arunachal Pradesh</option>
                    <option value="3">Assam</option>
                    <option value="4">Bihar</option>
                    <option value="5">Chhattisgarh</option>
                    <option value="6">Delhi</option>
                    <option value="7">Goa</option>
                    <option value="8">Gujarat</option>
                    <option value="9">Haryana</option>
                    <option value="10">Himachal Pradesh</option>
                    <option value="11">Jammu and Kashmir</option>
                    <option value="12">Jharkhand</option>
                    <option value="13">Karnataka</option>
                    <option value="14">Kerala</option>
                    <option value="15">Madhya Pradesh</option>
                    <option value="16">Maharashtra</option>
                    <option value="17">Manipur</option>
                    <option value="18">Meghalaya</option>
                    <option value="19">Mizoram</option>
                    <option value="20">Nagaland	</option>
                    <option value="21">Odisha</option>
                    <option value="22">Punjab</option>
                    <option value="23">Rajasthan</option>
                    <option value="24">Sikkim</option>
                    <option value="25">Tamil Nadu</option>
                    <option value="26">Telangana</option>
                    <option value="27">Tripura</option>
                    <option value="28">Uttar Pradesh</option>
                    <option value="29">Uttarakhand</option>
                    <option value="30">West Bengal</option>
                </select>
                let temp = {states};
                <div>
                    <p>{states}</p>
                    <p>ನಮಸ್ಕಾರ   નમસ્તે</p>
                </div>
                {/* const a = 5; */}
            </div>
        </div>
    )
}

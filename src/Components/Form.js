import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Form.css';
import Harvesting from './Harvesting';

export default function Form() {

    const [name, setName] = useState('');
    const [states, setStates] = useState('');


    const [title, setTitle] = useState('');
    const [climate, setClimate] = useState('');
    const [pic, setPic] = useState('');
    const [method, setMethod] = useState('');


    const handlePages = () => {
        // console.log('hello noob Joey');
        console.log(title);
        // <Harvesting/>
        if (states === '1') {
            console.log('I am state 1');
            setTitle('Andhra Pradesh');
            // <Harvesting/>

        }
        else if (states === '2') {
            console.log('I am state 2');
        }
        else if (states === '3') {
            console.log('I am state 3');
        }
        else if (states === '4') {
            console.log('I am state 4');
        }
        else if (states === '5') {
            console.log('I am state 5');
        }
        else if (states === '6') {
            console.log('I am state 6');
        }
        else if (states === '7') {
            console.log('I am state 7');
        }
        else if (states === '8') {
            console.log('I am state 8');
        }
        else if (states === '9') {
            console.log('I am state 9');
        }
        else if (states === '10') {
            console.log('I am state 10');
        }
        else if (states === '11') {
            console.log('I am state 11');
        }
        else if (states === '12') {
            console.log('I am state 12');
        }
        else if (states === '13') {
            console.log('I am state 13');
        }
        else if (states === '14') {
            console.log('I am state 14');
        }
        else if (states === '15') {
            console.log('I am state 15');
        }
        else if (states === '16') {
            console.log('I am state 16');
        }
        else if (states === '17') {
            console.log('I am state 17');
        }
        else if (states === '18') {
            console.log('I am state 18');
        }
        else if (states === '19') {
            console.log('I am state 19');
        }
        else if (states === '20') {
            console.log('I am state 20');
        }
        else if (states === '21') {
            console.log('I am state 21');
        }
        else if (states === '22') {
            console.log('I am state 22');
        }
        else if (states === '23') {
            console.log('I am state 23');
        }
        else if (states === '24') {
            console.log('I am state 24');
        }
        else if (states === '25') {
            console.log('I am state 25');
        }
        else if (states === '26') {
            console.log('I am state 26');
        }
        else if (states === '27') {
            console.log('I am state 27');
        }
        else if (states === '28') {
            console.log('I am state 28');
        }
        else if (states === '29') {
            console.log('I am state 29');
        }
        else if (states === '30') {
            console.log('I am state 30');
        }

        // <Harvesting />
    }


    const handleName = (event) => {
        setName(event.target.value);
        // console.log(event.target.value);
    }

    const handleDropDown = (event) => {
        setStates(event.target.value);
        if (event.target.value === '2') {
            setTitle('Andhra Pradesh');
            console.log('I am state 2');
            // console.log(title);
        }

        // console.log(event.target.value);
    }

    const a = states.slice();



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
                <br />
                {/* <Link className="btn-form btn-dark" onClick={handlePages} to="/temp">Submit</Link> */}
                {/* <p>value = {a}</p> */}
                <button type="button" class="btn btn-outline-success" onClick={handlePages}>Success</button>


                <button type="button" class="btn btn-outline-success" onClick={() => {
                    <Harvesting title="hi"/>
                }}>Success</button>
                {/* <Link to={{
                    pathname: "/harvesting",
                    state: {
                        title : "abc"
                    }
                }}>Click</Link> */}
                {/* <button type="button" class="btn btn-outline-success" >Success</button> */}

            </div>
        </div>
    )
}

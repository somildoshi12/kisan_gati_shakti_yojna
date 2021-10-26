import React from 'react'
import { Link } from 'react-router-dom';
import Form from './Form';
import './Homepage.css';

export default function Homepage() {

    // const handleClick = () => {
    //     <Link></Link>
    // }

    return (
        <div className="homePage">
            <div className="home">

                <p className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat quod consequuntur quaerat consequatur autem magni, temporibus sit, aut numquam deleniti voluptas aliquid quisquam, nostrum voluptatibus tenetur. Blanditiis dolorum earum numquam cum itaque officia?</p>
                <button type="button" className="btn btn-dark" ><Link className="btn-home btn-dark" to="/form">join us</Link></button>
            </div>
        </div>
    )
}

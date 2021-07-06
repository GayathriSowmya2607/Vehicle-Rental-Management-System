import React from 'react';
import "./css/home.css";
import { NavLink } from "react-router-dom";
import logo from "./images/logo.png";
import { Form } from 'react-bootstrap';
import "./css/adminLogin.css";

class Subscription extends React.Component {
    render(){
        return(
            <div >
                <nav className="navbar">
                    <ul className="nav-list">
                        <div className="logo">
                            <img src={logo} alt="logo" height="100px" width="50px"/>
                        </div>
                        <li>
                            <NavLink to="/" exact activeclassname="active" className="listdesign">Home</NavLink>
                        </li>
                       
                        
                        <li>
                            <NavLink to="/login" exact activeclassname="active" className="listdesign">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register" exact activeclassname="active" className="listdesign">Register</NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin" exact activeclassname="active" className="listdesign">Admin</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" exact activeclassname="active" className="listdesign">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" exact activeclassname="active" className="listdesign">Contact</NavLink>
                        </li>
                    </ul>
                </nav>
                <br></br>
                <br></br>
                <div>
                  <Form>
                    <h3>We ignite opportunity by setting the world in motion</h3>
                    <p>Good things happen when people can move, whether across town or toward their dreams. Opportunities appear, open up, become reality. What started as a way to tap a button to get a ride has led to billions of moments of human connection as people around the world go all kinds of places in all kinds of ways with the help of our technology.</p>
                    <h3>Rides and beyond</h3>
                    <p>In addition to giving riders a way to get from point A to point B, we're working to bring the future closer with self-driving technology and urban air transport, helping people order food quickly and affordably, removing barriers to healthcare, creating new freight-booking solutions, and helping companies provide a seamless employee travel experience.</p>
                    <h3>Your safety drives us</h3>
                    <p>Whether you’re in the back seat or behind the wheel, your safety is essential. We are committed to doing our part, and technology is at the heart of our approach. We partner with safety advocates and develop new technologies and systems to help improve safety and help make it easier for everyone to get around.</p>
                    <h3>Top Rated Driver-Partners</h3>
                    <p>All our driver-partners are
background verified and trained to
deliver only the best experience!</p>
                  </Form>
                </div>
                </div>
                );
    }
}

export default Subscription;   



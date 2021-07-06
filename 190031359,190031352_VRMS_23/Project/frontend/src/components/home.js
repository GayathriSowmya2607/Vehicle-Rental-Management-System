import React from 'react';
import "./css/home.css";
import "./css/adminLogin.css"
import { NavLink } from "react-router-dom";
import logo from "./images/logo.png";
import slide1 from "./images/slide1.jfif";
import slide2 from "./images/slide2.jfif";
import slide3 from "./images/slide3.jfif";
import slide4 from "./images/slide4.png";
import ban from "./images/ban.PNG";
import { Carousel } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGasPump, faCoins, faGift, faLocationArrow, faRoad, faCarCrash,faIdCard,faUnlock,faCar,faRoute,faStar ,faSmile,faTachometerAlt} from "@fortawesome/free-solid-svg-icons";

class Home extends React.Component {
    render(){
        return(
            <div>
                <nav className="navbar">
                    <ul className="nav-list">
                        <div className="logo">
                            <img src={logo} alt="logo" height="100px" width="60px"/>
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
           
                <div className="firstSection">
                    <div className="main-box">
                        <div className="firstHalf">
                            <p className="text-big1"></p>
                            <p className="text-big1"> </p>
                            <div className="text-big1">
                          
                            </div>
                            <br></br>
                            
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="advantage">
                    <h1>Our Advantages</h1>
                    <p>We simplified car rentals, so you can focus on what's important to you.</p>
                    <CardGroup>
                      <Card>
                      <FontAwesomeIcon icon={faGasPump} size="7x" pull="right" />
                        <Card.Body>
                          <Card.Title>Fuel Cost Included</Card.Title>
                          <Card.Text>
                          Don't worry about mileage! All fuel costs are included. If you refill fuel, we'll pay you back!
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      <Card>
                      <FontAwesomeIcon icon={faCoins} size="7x" pull="right" />
                        <Card.Body>
                          <Card.Title>No Hidden Charges</Card.Title>
                          <Card.Text>
                          Our prices include taxes and insurance.What you see is what you really pay!
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      <Card>
                      <FontAwesomeIcon icon={faGift} size="7x" pull="right" />
                        <Card.Body>
                          <Card.Title>Flexi Pricing Packages</Card.Title>
                          <Card.Text>
                          One size never fits all! Choose a balance of time and kilometers that works best for you.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </CardGroup>
                    <CardGroup>
                      <Card>
                      <FontAwesomeIcon icon={faLocationArrow} size="7x" pull="right" />
                        <Card.Body>
                          <Card.Title>Go Anywhere</Card.Title>
                          <Card.Text>
                          Our cars have all-India permits. Just remember to pay state tolls and entry taxes.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      <Card>
                      <FontAwesomeIcon icon={faRoad} size="7x" pull="right" />
                        <Card.Body>
                          <Card.Title>24x7 Roadside Assistance</Card.Title>
                          <Card.Text>
                          We have round-the-clock, pan India partners. Help is never far away from you.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      <Card>
                      <FontAwesomeIcon icon={faCarCrash} size="7x" pull="right" />
                        <Card.Body>
                          <Card.Title>Damage Insurance</Card.Title>
                          <Card.Text>
                          All your bookings include damage insurance! Drive safe, but don’t worry! 
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </CardGroup>
                </div>
                
                <div>
                <Carousel>
                 <Carousel.Item>
                 <img src={slide1} width="100%" height="100%"></img>
                 <Carousel.Caption>
                 <h3>RentIt Car Rentals</h3>
                 <p>Book Rentals to save time with one car and driver for your multi-stop trips.</p>
                 </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src={slide3} width="100%" height="50%"></img>
                    <Carousel.Caption>
                    <h3>Focused on safety, wherever you go</h3>
                    <p>With every safety feature and every standard in our Community Guidelines, we're committed to helping to create a safe environment for our users.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src={slide2} width="100%" height="50%"></img>
                    <Carousel.Caption>
                    <h3>Setting 10,000+ cities in motion</h3>
                    <p>The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
                <br></br>
                <br></br>
                </div>
                <div className="row" >
                    <div className="col-3 img-fluid">
                    <FontAwesomeIcon icon={faCar} size="7x" pull="center" />
                    <br></br>
                          <h3>Book</h3>
                          <p>Search for and book a car on our site.</p>
                    </div>
                    <div className="col-3 img-fluid">
                    <FontAwesomeIcon icon={faIdCard} size="7x" pull="center" />
                    <br></br>
                    <h3>UPLOAD LICENSE</h3>
                    <p>Upload your driver’s license, and pay a small security deposit.</p>
                    </div>
                    <div className="col-3 img-fluid">
                    <FontAwesomeIcon icon={faUnlock} size="7x" pull="center" />
                    <br></br>
                    <h3>UNLOCK</h3>
                    <p>We SMS your car details 20 minutes before pickup.Unlock it via the Zoomcar app.</p>
                    </div>
                    <div className="col-3 img-fluid">
                    <FontAwesomeIcon icon={faRoute} size="7x" pull="center" />
                    <br></br>
                    <h3>RETURN</h3>
                    <p>Return the car to the same location and fill the end checklist to end your trip.</p>
                    </div>
                </div>
                <div>
                <div class="text-center">
                  <button type="button" class="btn btn-primary"><NavLink to="/register">Sign Up</NavLink></button>
                </div>
                 </div>
                <div>
                    <img src={slide4} width="100%"></img>
                </div>
                <br></br>
                <div className="row" >
                    <div className="col-4 img-fluid">
                    <FontAwesomeIcon icon={faSmile} size="7x" pull="center" />
                    <br></br>
                          <h3>48,00,000+</h3>
                          <p>Happy Users</p>
                    </div>
                    <div className="col-4 img-fluid">
                    <FontAwesomeIcon icon={faTachometerAlt} size="7x" pull="center" />
                    <br></br>
                    <h3>36,00,000+</h3>
                    <p>Km Travelled(enough for 470 round trips to the moon!)</p>
                    </div>
                    <div className="col-4 img-fluid">
                    <FontAwesomeIcon icon={faStar} size="7x" pull="center" />
                    <br></br>
                    <h3>RATING 4.5/5</h3>
                    <p>Rated by 3,00,000+ customers over 10,00,000+ bookings</p>
                    </div>
                </div>
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

export default Home;

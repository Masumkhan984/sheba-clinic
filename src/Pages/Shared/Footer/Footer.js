import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-body">
              <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
           <div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<Link to="#"><i className="fab fa-facebook-f"></i></Link>
  	 				<Link to="#"><i className="fab fa-twitter"></i></Link>
  	 				<Link to="#"><i className="fab fa-instagram"></i></Link>
  	 				<Link to="#"><i className="fab fa-linkedin-in"></i></Link>
  	 			</div>
  	 		</div>
  	 		<div className="footer-col">
  	 			
  	 			<ul>
				   <h4>company</h4>
  	 				<li><Link to="#">about us</Link></li>
  	 				<li><Link to="#">our services</Link></li>
  	 				<li><Link to="#">Doctors</Link></li>
  	 				<li><Link to="#">Our Doctors program</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			
  	 			<ul>
				   <h4>get help</h4>
  	 				<li><Link to="#">FAQ</Link></li>
  	 				<li><Link to="#">Help Line</Link></li>
  	 				<li><Link to="#">payment options</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			
  	 			<ul>
				   <h4>online help</h4>
  	 				<li><Link to="#">doctors</Link></li>
  	 				<li><Link to="#">Madical</Link></li>
  	 				<li><Link to="#">Nurse</Link></li>
  	 				<li><Link to="#">Ambulance</Link></li>
  	 			</ul>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
        </div>
    );
};

export default Footer;
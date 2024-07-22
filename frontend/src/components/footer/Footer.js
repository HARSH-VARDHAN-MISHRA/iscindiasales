import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
// import logo from '../header/logo.png'
import logo from './isclogo.png'

const Footer = () => {
  return (
    <>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 mb-3">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <p>Maxfit values are driven by happy customers and growth is recorded in satisfied smiles.</p>
                        <div className="social-links">
                            <a href="https://www.instagram.com/invites/contact/?i=4pktq1gguihq&utm_content=sbflwik" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://www.facebook.com/profile.php?id=100089877106287&mibextid=ZbWKwL" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="https://api.whatsapp.com/send?phone=919319037605" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-3">
                        <div className="foot-head">Our Products</div>
                        <ul>
                            <li><Link to={'/our-products'}>Pipes & Fittings</Link></li>
                            <li><Link to={'/tap-products'}>Taps Collection</Link></li>
                            <li><Link to={'/garden-pipes'}>Garden Pipes</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-6 mb-3">
                        <div className="foot-head">Quick Links</div>
                        <ul>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/media-center'}>Media Center</Link></li>
                            <li><Link to={'/solution'}>Solutions</Link></li>
                            <li><Link to={'/about-us'}>About Us</Link></li>
                            <li><Link to={'/contact-us'}>Contact Us</Link></li>
                            <li><Link to={'/distributor-form'}>Distributor Form</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-3">
                        <div className="foot-head">Contact Us</div>
                        <ul>
                            <li>
                                <a href="tel:+919319037605">
                                    <i className="fa-solid fa-phone-volume"></i>
                                    +91-9319037605
                                </a>
                            </li>
                            <li>
                                <a href="mailto:sales.indiasalescorporation@gmail.com" target='_blank'>
                                    <i className="fa-solid fa-envelope-open-text"></i>
                                    sales.indiasales corporation@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="https://maps.app.goo.gl/CtWgE7uDA6sUryMC6" target='_blank'>
                                    <i className="fa-solid fa-location-dot"></i>
                                    A-5/7, Jhilmil Industrial Area, Jhilmil Colony, Delhi, 110095
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-3 copyright">
                    <div className="col-12 text-center">
                    © ISC , All Right Reserved. Designed By <a href="https://www.digiindiasolutions.com/" target='_blank'>DIGI INDIA SOLUTIONS</a>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
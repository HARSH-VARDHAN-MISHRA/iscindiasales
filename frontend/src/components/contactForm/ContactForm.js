import React from 'react'
import './ContactForm.css'
import { Helmet } from 'react-helmet'
import HelmentContext from '../HelmentContext/HelmentContext'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {

    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    
        emailjs.sendForm('service_fpov9gw', 'template_0c6t1ls', e.target, 'XUVn19ukgXJ6JwkkR')
          .then((result) => {
              toast.success("Send Successfully !!");
              window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
              e.target.value = '';
          }, (error) => {
              console.log(error.text);
          });
      }

  return (
    <>
        <ToastContainer />
        <section className='contactForm'>
            <div className="container">
                <div className="row contact-box">
                        <div className="content">
                            <div className="left-side">
                                <div className="address details">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="topic">Address</div>
                                    <div className="text-one">
                                        <a href="https://maps.app.goo.gl/CtWgE7uDA6sUryMC6" target="_blank" className="text-one">
                                            A-5/7, Jhilmil Industrial Area, Jhilmil Colony, Delhi, 110095
                                        </a>
                                    </div>
                                </div>
                                <div className="phone details">
                                    <i className="fas fa-phone-alt"></i>
                                    <div className="topic">Phone</div>
                                    <a href="tel:+919319037605" target="_blank" className="text-one">+91-9319037605</a>
                                </div>
                                <div className="email details">
                                    <i className="fas fa-envelope"></i>
                                    <div className="topic">Email</div>
                                    <a href="mailto:sales.indiasalescorporation@gmail.com" target="_blank" className="text-one">sales.indiasales corporation@gmail.com</a>
                                </div>
                            </div>
                            <div className="right-side">
                                <div className="topic-text">Send Your Requirements</div>
                                <p></p>
                                <form onSubmit={sendEmail}>
                                    <div className="input-box">
                                        <input type="text" name="from_name" required id="Username" placeholder="Enter your name" />
                                    </div>
                                    <div className="input-box"> 
                                        <input type="email" name="email_from" required id="email" placeholder="Enter your email" />
                                    </div>
                                    <div className="input-box message-box">
                                        <textarea name="message" id="message" required placeholder="Message"></textarea>
                                    </div>
                                    <div className="button">
                                        <input type="submit" value="Send Now" />
                                    </div>
                                </form>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ContactForm
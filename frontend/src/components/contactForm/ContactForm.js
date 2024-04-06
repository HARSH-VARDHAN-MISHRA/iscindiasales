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
                <div class="row contact-box">
                        <div class="content">
                            <div class="left-side">
                                <div class="address details">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <div class="topic">Address</div>
                                    <div class="text-one">
                                        <a href="https://maps.app.goo.gl/CtWgE7uDA6sUryMC6" target="_blank" class="text-one">
                                            A-5/7, Jhilmil Industrial Area, Jhilmil Colony, Delhi, 110095
                                        </a>
                                    </div>
                                </div>
                                <div class="phone details">
                                    <i class="fas fa-phone-alt"></i>
                                    <div class="topic">Phone</div>
                                    <a href="tel:+919319037605" target="_blank" class="text-one">+91-9319037605</a>
                                </div>
                                <div class="email details">
                                    <i class="fas fa-envelope"></i>
                                    <div class="topic">Email</div>
                                    <a href="mailto:sales.indiasalescorporation@gmail.com" target="_blank" class="text-one">sales.indiasales corporation@gmail.com</a>
                                </div>
                            </div>
                            <div class="right-side">
                                <div class="topic-text">Send Your Requirements</div>
                                <p></p>
                                <form onSubmit={sendEmail}>
                                    <div class="input-box">
                                        <input type="text" name="from_name" required id="Username" placeholder="Enter your name" />
                                    </div>
                                    <div class="input-box"> 
                                        <input type="email" name="email_from" required id="email" placeholder="Enter your email" />
                                    </div>
                                    <div class="input-box message-box">
                                        <textarea name="message" id="message" required placeholder="Message"></textarea>
                                    </div>
                                    <div class="button">
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
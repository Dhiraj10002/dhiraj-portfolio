import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Contact.scss'

const SERVICE_ID = "service_l1t2set";
const TEMPLATE_ID = "template_v5fb1sw";
const PUBLIC_KEY = "t2csgXCsQ8cWXq4FZ";
const position = [30.7046, 76.7179];

function Contact() {
   const [letterClass, setLetterClass] = useState('text-animate')
   const form = useRef()

   useEffect(() => {
      setTimeout(() => {
         setLetterClass('text-animate-hover')
      }, 3000)
   }, [])

   const sendEmail = (e) => {
      e.preventDefault()

                  emailjs.sendForm(
              SERVICE_ID,
              TEMPLATE_ID,
              form.current,
              PUBLIC_KEY
            )
             .then(
          () => {
            alert("Message successfully sent!");
            window.location.reload(false);
          },
          () => {
            alert("Failed to send the message, please try again");
          },
        );
   }
   return (
     <>
       <div className="page">
         <span className="tags top-html">&lt;/html&gt;</span>
         <span className="tags top-tags">&lt;body&gt;</span>

         <div className="container contact-page">
           <div className="text-zone">
             <h1>
               <AnimatedLetters
                 letterClass={letterClass}
                 strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
                 idx={15}
               />
             </h1>
             <p>
               I’m actively seeking opportunities with leading technology
               companies where I can contribute to building large-scale,
               high-impact systems. If you’re working on ambitious engineering
               challenges or believe my profile aligns with your team’s goals,
               I’d love to connect."
             </p>
             <div className="contact-form">
               <form ref={form} onSubmit={sendEmail}>
                 <div className="ok">
                   <li className="half">
                     <input
                       placeholder="Name"
                       type="text"
                       name="name"
                       required
                     />
                   </li>
                   <li className="half">
                     <input
                       placeholder="Email"
                       type="email"
                       name="email"
                       required
                     />
                   </li>
                   <li>
                     <input
                       placeholder="Subject"
                       type="text"
                       name="subject"
                       required
                     />
                   </li>
                   <li>
                     <textarea
                       placeholder="Message"
                       name="message"
                       required
                     ></textarea>
                   </li>
                   <li>
                     <input
                       type="submit"
                       className="flat-button"
                       value="SEND MESSAGE!"
                     />
                   </li>
                 </div>
               </form>
             </div>
           </div>
           <div className="info-map">
             Dhiraj Gupta
             <br />
                          
             <span>
               @:
               <span>dhirajgupta1002@gmail.com</span>
             </span> <br />  

                          Mohali, Punjab, India
           </div>
           <div className="map-wrap">
             <MapContainer center={position} zoom={14.2}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
               <Marker position={position}>
                 <Popup>
                   Based in Mohali, Punjab
                 </Popup>
               </Marker>
             </MapContainer>
           </div>
         </div>

         <Outlet />
         <span className="tags bottom-tags">
           &lt;/body&gt;
           <br />
           <span className="bottom-tag-html">&lt;/html&gt;</span>
         </span>
       </div>
     </>
   );
}

export default Contact

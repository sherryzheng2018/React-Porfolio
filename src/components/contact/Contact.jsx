import { useState } from 'react'
import "./contact.scss"
import emailjs from 'emailjs-com'

export default function Contact() {
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);

        emailjs.sendForm(
            'service_ogrhiy9',
            'template_09ilt1n',
            e.target,
            'user_B9jHh7DvMtAyVWfKxN6LA'
        ).then(res=>{
            console.log(res)
        }).catch(err=> console.log(err));
    }
    return (
        <div className="contact" id="contact" >
            <div className="left">
                <img src="/assets/contact_us.png" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>

                    <input type="text" name="name" placeholder="Name" />
                    
                    <input type="text" name="userEmail" placeholder="Email" />

                    <textarea placeholder="Message" name="message" rows="10"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll get back to you ASAP.</span>}
                </form>
            </div>
        </div>
    )
}
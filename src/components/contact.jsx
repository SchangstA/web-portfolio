import React from 'react'
import '../index.css'
import Swal from 'sweetalert2'

const contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "4de8029a-d7c0-4839-93e9-1f36cfcfbf0f");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Your message was sent!",
                icon: "success"
              });
        }
      };

  return (
    <div>
      <section className='contact'>
      <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
        <form className='contact-form' onSubmit={onSubmit}>
            <div style={{ paddingBottom: '4rem' }}>
              <h2 className='merriweather-regular'>Connect With Me</h2>
            </div>
            <div className='input-box'>
                <label className='merriweather-regular' style={{ fontWeight: 'bold' }}>Full Name</label>
                <input type="text" className='field merriweather-regular' placeholder='Enter your name' name='name' required />
            </div>
            <div className='input-box'>
                <label className='merriweather-regular' style={{ fontWeight: 'bold' }}>Email Address</label>
                <input type="email" className='field merriweather-regular' placeholder='Enter your email' name='email' required />
            </div>
            <div className='input-box'>
                <label className='merriweather-regular' style={{ fontWeight: 'bold' }}>Your Message</label><br />
                <textarea name="message" placeholder='Enter your message' className='field-message merriweather-regular' required></textarea>
            </div>
            <button className='merriweather-regular' type='submit'>Send Message</button>
        </form>
      </section>
    </div>
  )
}

export default contact

import React from 'react'

export  function Contact() {
  return (
    <section id='contact_sect'>
        <div id='contact_cont'>
            <h1>Thacks for your support 🥰</h1>
            <input type="text" placeholder='Name'/>
            <input type="email" placeholder='email'/>
            <textarea placeholder="Type your Message Here...." tabindex="10" required></textarea>
            <button type="submit">submit</button>
        </div>
    </section>
  )
}

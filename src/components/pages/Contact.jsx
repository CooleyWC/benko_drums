import React, { useState } from 'react';

function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <header>
        <h1>Contact</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Name' />
          <input type='text' placeholder='Email' />
          <textarea rows='4' cols='50' placeholder='Message'></textarea>
          <input type='submit' />
        </form>
      </main>
      <footer></footer>
    </div>
  );
}

export default Contact;
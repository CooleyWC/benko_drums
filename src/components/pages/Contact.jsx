import React, { useState } from 'react';

function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='container w-4/5 max-w-sm'>
      <div className='pt-10'>
        <header className='pb-6'>
          <h1 className='text-center text-5xl'>CONTACT</h1>
        </header>
        <main>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col'>
              <div className='pb-4'>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900">
                  Name
                </label>
                <input
                  id='name'
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 "
                  type='text'
                  value={name} onChange={(e) => setName(e.target.value)}
                  required />
              </div>
              <div className='pb-4'>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  type='text'
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required />
              </div>
              <div className='pb-4'>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900">
                  Message
                </label>
                <textarea
                  rows='4'
                  cols='50'
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"
                  value={message} onChange={(e) => setMessage(e.target.value)}
                  required></textarea>
              </div>
              <div className='border border-black text-center'>
                <button className='' type='submit'>Send</button>
              </div>
            </div>
          </form>
        </main>
        <footer></footer>
      </div>
    </div>
  );
}

export default Contact;
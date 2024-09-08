import React, { useState } from 'react';

function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='container w-96'>
      <header>
        <h1 className='border border-black text-center'>Contact</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col'>
            <div className=''>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Name
              </label>
              <input
                id='name'
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type='text'
                value={name} onChange={(e) => setName(e.target.value)}
                required />
            </div>
            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email
              </label>
              <input
                type='text'
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
            </div>
            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Message
              </label>
              <textarea
                rows='4'
                cols='50'
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={message} onChange={(e) => setMessage(e.target.value)}
                required></textarea>
            </div>

            <div>
              <button type='submit'>Send</button>
            </div>
          </div>
        </form>
      </main>
      <footer></footer>
    </div>
  );
}

export default Contact;
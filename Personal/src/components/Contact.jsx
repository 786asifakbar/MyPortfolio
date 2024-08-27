// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block mb-2 text-sm">Name</label>
            <input type="text" className="w-full p-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm">Email</label>
            <input type="email" className="w-full p-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm">Message</label>
            <textarea className="w-full p-2 border rounded-lg" rows="5"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

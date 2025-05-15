
'use client';

// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("HEREEE ", formData, emailjs);
    console.log({
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    });



    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      console.log('Message sent successfully:', response);
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Something went wrong. Please try again later.');
    }

  };

  return (
    <section id="contact" className="py-20 px-6 text-center bg-indigo-800 text-white">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="mb-4 p-4 w-full border rounded-md"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="mb-4 p-4 w-full border rounded-md"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="mb-4 p-4 w-full border rounded-md"
          required
        ></textarea>
        <button type="submit" className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-indigo-100 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}

'use client'; // Since this is a client component (uses useState)

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

interface ContactFormProps {
  onSubmit?: () => void; // Optional prop if you want to handle form submission in the parent
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.send(
      'service_epfrhjz', // Replace with your EmailJS Service ID
      'template_16ok1do', // Replace with your EmailJS Template ID
      {
        name: formData.name,
        email: formData.email,
        message: formData.message
      },
      'WO6jJaEuLIOCsGULq' // Replace with your EmailJS Public Key
    )
    .then((result) => {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      if (onSubmit) onSubmit();
    }, (error) => {
      setStatus('Failed to send message. Please try again.');
      console.error('EmailJS error:', error);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="your@email.com"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="How can I help you?"
          required
        ></textarea>
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
      >
        Send Message
      </motion.button>

      {status && (
        <p className={`mt-4 text-center ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
          {status}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
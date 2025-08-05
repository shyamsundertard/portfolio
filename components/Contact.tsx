"use client";

import React, { useState } from 'react';
import ContactHeader from './contact/ContactHeader';
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';
import toast, {Toaster} from "react-hot-toast"
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    if (data.success) {
      toast.success('Message sent successfully!',{
        style: {
          background: '#000',
          color: '#fff',
        },
        icon: <FaCheckCircle />,
      });
      // Reset form after submission
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      toast.error('Failed to send message. Please try again later.', {
        style: {
          background: '#000',
          color: '#fff',
        },
        icon: <FaTimesCircle />,
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactHeader />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
      </div>
      <Toaster/>
    </section>
  );
};

export default Contact; 
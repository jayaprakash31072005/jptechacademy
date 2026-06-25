'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'

interface ContactForm {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>()

  const onSubmit = async (data: ContactForm) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        setSubmitted(true)
        reset()
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Contact form error:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600">We'd love to hear from you. Send us a message!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="card p-8 text-center">
            <FiPhone className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600">+91 9999 999 999</p>
            <p className="text-gray-600">Mon - Fri, 9AM - 6PM</p>
          </div>

          <div className="card p-8 text-center">
            <FiMail className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">hello@jptechacademy.com</p>
            <p className="text-gray-600">support@jptechacademy.com</p>
          </div>

          <div className="card p-8 text-center">
            <FiMapPin className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-600">Tech Hub, Bangalore</p>
            <p className="text-gray-600">Karnataka, India</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                ✅ Message sent successfully! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your Name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    {...register('email', { required: 'Email is required' })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="+91 9999999999"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                <input
                  type="text"
                  {...register('subject', { required: 'Subject is required' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="How can we help?"
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                  placeholder="Your message here..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <button type="submit" className="w-full btn-primary py-3 flex items-center justify-center gap-2 text-lg">
                <FiSend /> Send Message
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div className="bg-blue-50 rounded-lg p-8 h-fit">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Contact Us?</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">🎓 Course Inquiries</h3>
                <p className="text-gray-600">Ask about our courses, curriculum, and learning paths</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">📅 Batch Information</h3>
                <p className="text-gray-600">Get details about upcoming batches and schedules</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">💼 Corporate Training</h3>
                <p className="text-gray-600">Inquire about customized corporate training programs</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">🤝 Partnerships</h3>
                <p className="text-gray-600">Explore partnership and collaboration opportunities</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">❓ General Questions</h3>
                <p className="text-gray-600">Any other questions or feedback about JP Tech Academy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage

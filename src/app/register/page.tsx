'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FiMail, FiUser, FiPhone, FiBook } from 'react-icons/fi'

interface RegistrationForm {
  firstName: string
  lastName: string
  email: string
  phone: string
  course: string
  batch: string
  experience: string
  password: string
  confirmPassword: string
}

const RegisterPage = () => {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, watch, formState: { errors } } = useForm<RegistrationForm>()
  const password = watch('password')

  const onSubmit = async (data: RegistrationForm) => {
    try {
      const response = await fetch('/api/students/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        setSubmitted(true)
      }
    } catch (error) {
      console.error('Registration error:', error)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="text-5xl mb-4">✅</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Registration Successful!</h2>
          <p className="text-gray-600 mb-6">Thank you for registering. We'll send you a confirmation email shortly.</p>
          <a href="/" className="btn-primary inline-block">
            Back to Home
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">Student Registration</h1>
          <p className="text-gray-600 text-center mb-8">Join JP Tech Academy and start your learning journey</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <FiUser className="inline mr-2" /> First Name *
                </label>
                <input
                  type="text"
                  {...register('firstName', { required: 'First name is required' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="John"
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <FiUser className="inline mr-2" /> Last Name *
                </label>
                <input
                  type="text"
                  {...register('lastName', { required: 'Last name is required' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Doe"
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <FiMail className="inline mr-2" /> Email *
                </label>
                <input
                  type="email"
                  {...register('email', { required: 'Email is required' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <FiPhone className="inline mr-2" /> Phone *
                </label>
                <input
                  type="tel"
                  {...register('phone', { required: 'Phone is required' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="+91 9999999999"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>
            </div>

            {/* Course & Batch */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <FiBook className="inline mr-2" /> Course *
                </label>
                <select
                  {...register('course', { required: 'Please select a course' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select Course</option>
                  <option value="web">Web Development with Next.js</option>
                  <option value="fullstack">Full Stack Development</option>
                  <option value="python">Python for Data Science</option>
                  <option value="javascript">JavaScript Masterclass</option>
                  <option value="react">React Advanced Patterns</option>
                  <option value="design">UI/UX Design Fundamentals</option>
                </select>
                {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Batch *
                </label>
                <select
                  {...register('batch', { required: 'Please select a batch' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select Batch</option>
                  <option value="batch1">July 2024 Batch</option>
                  <option value="batch2">August 2024 Batch</option>
                  <option value="batch3">September 2024 Batch</option>
                </select>
                {errors.batch && <p className="text-red-500 text-sm mt-1">{errors.batch.message}</p>}
              </div>
            </div>

            {/* Experience */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Experience Level *
              </label>
              <select
                {...register('experience', { required: 'Please select experience level' })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="">Select Level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
              {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>}
            </div>

            {/* Password Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password *
                </label>
                <input
                  type="password"
                  {...register('password', { required: 'Password is required', minLength: { value: 8, message: 'Password must be at least 8 characters' } })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="••••••••"
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirm Password *
                </label>
                <input
                  type="password"
                  {...register('confirmPassword', {
                    required: 'Please confirm your password',
                    validate: value => value === password || 'Passwords do not match'
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="••••••••"
                />
                {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full btn-primary py-3 text-lg font-bold"
            >
              Register Now
            </button>

            <p className="text-center text-gray-600">
              Already have an account? <a href="/login" className="text-blue-600 font-semibold hover:underline">Login here</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage

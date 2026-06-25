'use client'

import { useState } from 'react'
import CourseCard from '@/components/CourseCard'
import { FiSearch } from 'react-icons/fi'

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const courses = [
    {
      id: 1,
      name: 'Web Development with Next.js',
      description: 'Learn modern web development with Next.js, React, and Tailwind CSS',
      category: 'web',
      duration: '12 weeks',
      level: 'Intermediate',
      price: '₹15,000',
      students: 245,
      image: '🌐',
    },
    {
      id: 2,
      name: 'Full Stack Development',
      description: 'Complete full stack development course covering frontend and backend',
      category: 'web',
      duration: '16 weeks',
      level: 'Advanced',
      price: '₹25,000',
      students: 189,
      image: '⚙️',
    },
    {
      id: 3,
      name: 'Python for Data Science',
      description: 'Learn Python programming and data analysis techniques',
      category: 'programming',
      duration: '10 weeks',
      level: 'Beginner',
      price: '₹12,000',
      students: 312,
      image: '🐍',
    },
    {
      id: 4,
      name: 'JavaScript Masterclass',
      description: 'Deep dive into JavaScript ES6+ and advanced concepts',
      category: 'programming',
      duration: '8 weeks',
      level: 'Intermediate',
      price: '₹10,000',
      students: 401,
      image: '📜',
    },
    {
      id: 5,
      name: 'React Advanced Patterns',
      description: 'Master advanced React patterns and state management',
      category: 'web',
      duration: '10 weeks',
      level: 'Advanced',
      price: '₹18,000',
      students: 156,
      image: '⚛️',
    },
    {
      id: 6,
      name: 'UI/UX Design Fundamentals',
      description: 'Learn design principles and create beautiful user interfaces',
      category: 'design',
      duration: '12 weeks',
      level: 'Beginner',
      price: '₹14,000',
      students: 234,
      image: '🎨',
    },
  ]

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'web', name: 'Web Development' },
    { id: 'programming', name: 'Programming' },
    { id: 'design', name: 'Design' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Courses</h1>
          <p className="text-xl text-gray-600">Explore our comprehensive course catalog</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 relative">
          <FiSearch className="absolute left-4 top-3 text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-3 justify-center">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-semibold transition duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-600'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No courses found. Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CoursesPage

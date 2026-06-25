'use client'

import { useState } from 'react'
import BatchCard from '@/components/BatchCard'
import { FiCalendar, FiUsers } from 'react-icons/fi'

const BatchesPage = () => {
  const [selectedCourse, setSelectedCourse] = useState('all')

  const batches = [
    {
      id: 1,
      name: 'Web Development Batch - July 2024',
      course: 'Web Development with Next.js',
      courseId: 'web-1',
      startDate: '2024-07-01',
      endDate: '2024-09-15',
      instructor: 'John Smith',
      students: 30,
      capacity: 40,
      schedule: 'Mon, Wed, Fri - 6:00 PM to 8:00 PM',
      status: 'active',
      price: '₹15,000',
    },
    {
      id: 2,
      name: 'Full Stack Batch - August 2024',
      course: 'Full Stack Development',
      courseId: 'full-1',
      startDate: '2024-08-05',
      endDate: '2024-11-30',
      instructor: 'Sarah Johnson',
      students: 25,
      capacity: 35,
      schedule: 'Tue, Thu, Sat - 7:00 PM to 9:00 PM',
      status: 'active',
      price: '₹25,000',
    },
    {
      id: 3,
      name: 'Python Data Science - July 2024',
      course: 'Python for Data Science',
      courseId: 'python-1',
      startDate: '2024-07-15',
      endDate: '2024-09-30',
      instructor: 'Mike Chen',
      students: 28,
      capacity: 30,
      schedule: 'Mon, Wed - 5:00 PM to 7:00 PM',
      status: 'active',
      price: '₹12,000',
    },
    {
      id: 4,
      name: 'JavaScript Masterclass - August 2024',
      course: 'JavaScript Masterclass',
      courseId: 'js-1',
      startDate: '2024-08-10',
      endDate: '2024-10-05',
      instructor: 'Emma Wilson',
      students: 35,
      capacity: 40,
      schedule: 'Sat, Sun - 4:00 PM to 6:00 PM',
      status: 'active',
      price: '₹10,000',
    },
    {
      id: 5,
      name: 'React Advanced - September 2024',
      course: 'React Advanced Patterns',
      courseId: 'react-1',
      startDate: '2024-09-01',
      endDate: '2024-11-15',
      instructor: 'David Lee',
      students: 18,
      capacity: 25,
      schedule: 'Tue, Thu - 6:30 PM to 8:30 PM',
      status: 'upcoming',
      price: '₹18,000',
    },
    {
      id: 6,
      name: 'UI/UX Design - August 2024',
      course: 'UI/UX Design Fundamentals',
      courseId: 'design-1',
      startDate: '2024-08-20',
      endDate: '2024-10-31',
      instructor: 'Lisa Anderson',
      students: 22,
      capacity: 30,
      schedule: 'Mon, Wed, Fri - 3:00 PM to 5:00 PM',
      status: 'active',
      price: '₹14,000',
    },
  ]

  const courses = [
    { id: 'all', name: 'All Courses' },
    { id: 'web-1', name: 'Web Development' },
    { id: 'full-1', name: 'Full Stack' },
    { id: 'python-1', name: 'Python' },
    { id: 'js-1', name: 'JavaScript' },
    { id: 'react-1', name: 'React' },
    { id: 'design-1', name: 'UI/UX Design' },
  ]

  const filteredBatches = selectedCourse === 'all'
    ? batches
    : batches.filter(batch => batch.courseId === selectedCourse)

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Upcoming Batches</h1>
          <p className="text-xl text-gray-600">Choose the batch that fits your schedule</p>
        </div>

        {/* Course Filter */}
        <div className="mb-12 flex flex-wrap gap-3 justify-center">
          {courses.map(course => (
            <button
              key={course.id}
              onClick={() => setSelectedCourse(course.id)}
              className={`px-6 py-2 rounded-full font-semibold transition duration-200 ${
                selectedCourse === course.id
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-green-600'
              }`}
            >
              {course.name}
            </button>
          ))}
        </div>

        {/* Batches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBatches.map(batch => (
            <BatchCard key={batch.id} batch={batch} />
          ))}
        </div>

        {filteredBatches.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No batches found for this course.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default BatchesPage

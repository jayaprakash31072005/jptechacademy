import Link from 'next/link'
import CourseCard from './CourseCard'
import { FiArrowRight } from 'react-icons/fi'

const CoursesPreview = () => {
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
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/courses"
            className="btn-primary inline-flex items-center gap-2 text-lg"
          >
            View All Courses <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CoursesPreview

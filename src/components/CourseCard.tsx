import { FiClock, FiUsers, FiAward } from 'react-icons/fi'

interface Course {
  id: number
  name: string
  description: string
  category: string
  duration: string
  level: string
  price: string
  students: number
  image: string
}

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <div className="card overflow-hidden hover:shadow-2xl transition duration-300">
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-8 text-center">
        <div className="text-6xl mb-4">{course.image}</div>
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-3">
          {course.level}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{course.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{course.description}</p>
        <div className="space-y-2 mb-6 text-gray-600 text-sm">
          <div className="flex items-center gap-2">
            <FiClock className="text-blue-600" /> {course.duration}
          </div>
          <div className="flex items-center gap-2">
            <FiUsers className="text-blue-600" /> {course.students} students
          </div>
          <div className="flex items-center gap-2">
            <FiAward className="text-blue-600" /> Certificate of Completion
          </div>
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <span className="text-2xl font-bold text-blue-600">{course.price}</span>
          <button className="btn-primary text-sm">Enroll Now</button>
        </div>
      </div>
    </div>
  )
}

export default CourseCard

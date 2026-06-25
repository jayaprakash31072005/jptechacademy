import { FiCalendar, FiUsers, FiClock } from 'react-icons/fi'

interface Batch {
  id: number
  name: string
  course: string
  startDate: string
  endDate: string
  instructor: string
  students: number
  capacity: number
  schedule: string
  status: string
  price: string
}

const BatchCard = ({ batch }: { batch: Batch }) => {
  const percentageFilled = Math.round((batch.students / batch.capacity) * 100)
  const isAlmostFull = percentageFilled > 80

  return (
    <div className="card overflow-hidden hover:shadow-2xl transition duration-300">
      <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900 flex-1">{batch.name}</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
            batch.status === 'active'
              ? 'bg-green-200 text-green-800'
              : 'bg-yellow-200 text-yellow-800'
          }`}>
            {batch.status === 'active' ? '🟢 Active' : '⏱️ Upcoming'}
          </span>
        </div>
        <p className="text-gray-600 text-sm font-semibold">{batch.course}</p>
      </div>

      <div className="p-6">
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-gray-700">
            <FiCalendar className="text-green-600" />
            <span className="text-sm">Start: {new Date(batch.startDate).toLocaleDateString('en-IN')}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <FiClock className="text-green-600" />
            <span className="text-sm">{batch.schedule}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <span className="text-sm font-semibold">Instructor:</span>
            <span className="text-sm">{batch.instructor}</span>
          </div>
        </div>

        {/* Capacity Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Enrollment</span>
            <span>{batch.students}/{batch.capacity}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition duration-300 ${
                isAlmostFull ? 'bg-red-500' : 'bg-green-500'
              }`}
              style={{ width: `${percentageFilled}%` }}
            />
          </div>
          {isAlmostFull && (
            <p className="text-red-600 text-xs mt-2 font-semibold">⚠️ Almost full!</p>
          )}
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <span className="text-2xl font-bold text-green-600">{batch.price}</span>
          <button className="btn-secondary text-sm">Enroll Now</button>
        </div>
      </div>
    </div>
  )
}

export default BatchCard

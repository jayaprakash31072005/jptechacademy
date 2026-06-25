import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
          Welcome to JP Tech Academy
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-slideUp">
          Learn cutting-edge technology from industry experts and transform your career
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/courses"
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition duration-200 flex items-center justify-center gap-2"
          >
            Explore Courses <FiArrowRight />
          </Link>
          <Link
            href="/register"
            className="bg-blue-700 border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition duration-200 flex items-center justify-center gap-2"
          >
            Get Started <FiArrowRight />
          </Link>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold">500+</h3>
            <p className="text-blue-100">Students Trained</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">20+</h3>
            <p className="text-blue-100">Expert Instructors</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">15+</h3>
            <p className="text-blue-100">Courses Available</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

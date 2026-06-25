import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Learning?</h2>
        <p className="text-xl text-blue-100 mb-8">
          Join hundreds of students who have transformed their careers with JP Tech Academy
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/register"
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition duration-200 flex items-center justify-center gap-2"
          >
            Register Now <FiArrowRight />
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition duration-200 flex items-center justify-center gap-2"
          >
            Contact Us <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTASection

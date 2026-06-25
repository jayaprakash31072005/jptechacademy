import { FiStar } from 'react-icons/fi'

const TestimonialSection = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Frontend Developer at TechCorp',
      content: 'JP Tech Academy helped me land my dream job! The instructors were amazing and the curriculum was up-to-date with industry standards.',
      rating: 5,
      image: '👩‍💼',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Full Stack Developer at StartupXYZ',
      content: 'The hands-on projects and real-world scenarios made learning practical and engaging. Highly recommended!',
      rating: 5,
      image: '👨‍💼',
    },
    {
      name: 'Anjali Verma',
      role: 'Data Scientist at DataCo',
      content: 'Great courses with excellent support. The job placement assistance was really helpful in my career transition.',
      rating: 5,
      image: '👩‍💻',
    },
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="card p-8 hover:shadow-2xl transition">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">\"{ testimonial.content }\"</p>
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection

import { FiAward, FiUsers, FiClock, FiTrendingUp } from 'react-icons/fi'

const FeaturesSection = () => {
  const features = [
    {
      icon: FiAward,
      title: 'Industry-Recognized Certification',
      description: 'Earn certificates recognized by leading tech companies',
    },
    {
      icon: FiUsers,
      title: 'Expert Instructors',
      description: 'Learn from professionals with 10+ years of experience',
    },
    {
      icon: FiClock,
      title: 'Flexible Learning',
      description: 'Study at your own pace with recorded sessions and live classes',
    },
    {
      icon: FiTrendingUp,
      title: 'Career Support',
      description: 'Get job placement assistance and interview coaching',
    },
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Why Choose JP Tech Academy?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div key={idx} className="card p-8 text-center hover:shadow-2xl transition">
                <Icon className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection

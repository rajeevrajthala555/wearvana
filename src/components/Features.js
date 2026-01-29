const features = [
  {
    id: 1,
    title: '100% Authentic',
    description: 'Every pair sourced directly from authorized distributors, verified for authenticity before reaching Nepali customers.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Curated for Nepal',
    description: 'Carefully selected sneakers that resonate with Nepal\'s unique streetwear culture and fashion sensibilities.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    )
  },
  {
    id: 3,
    title: 'Nepal-Wide Delivery',
    description: 'Fast and secure delivery across all major Nepali cities with real-time tracking and local customer support.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
      </svg>
    )
  }
]

export default function Features() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className="space-y-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto bg-black/5 rounded-full flex items-center justify-center text-black transition-transform duration-300 hover:scale-110 hover:bg-black/10">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-black">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
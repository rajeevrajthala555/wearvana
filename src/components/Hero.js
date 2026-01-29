export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-white">
      <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight text-black">
          Nepal's<br />
          <span className="text-gray-700">Sneaker Culture Hub</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Premium streetwear and authentic sneakers curated for Nepal's growing sneaker community.
          Serving sneaker enthusiasts from Kathmandu to Pokhara and beyond.
        </p>
        <button className="btn-primary">
          Shop New Drops
        </button>
      </div>
    </section>
  )
}
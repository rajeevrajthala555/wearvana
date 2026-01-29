export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl tracking-wider">WEREVANA</div>
          <div className="hidden md:flex space-x-8">
            <a href="#new-drops" className="nav-link">New Drops</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
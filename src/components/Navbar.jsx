function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav shadow-sm">
      <nav className="flex items-center justify-between px-8 h-20 w-full max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-12">
          <a href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-[#1a1c1d] tracking-tighter">
              Licentia
            </span>
          </a>
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-[#2e5f9c] font-semibold border-b-2 border-[#2e5f9c] py-1"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-gray-500 hover:text-gray-900 transition-all"
            >
              Features
            </a>
            <a
              href="#simulator"
              className="text-gray-500 hover:text-gray-900 transition-all"
            >
              Simulator
            </a>
            <a
              href="#instructors"
              className="text-gray-500 hover:text-gray-900 transition-all"
            >
              Marketplace
            </a>
          </div>
        </div>
        <button className="bg-gradient-primary text-white px-6 py-2.5 rounded-full font-semibold hover:opacity-90 transition-all">
          Get your license
        </button>
      </nav>
    </header>
  );
}

export default Navbar;

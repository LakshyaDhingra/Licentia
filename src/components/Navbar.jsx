function Navbar() {
  return (
    <nav className="flex items-center gap-10 px-8 py-5 bg-[#0f1117]">
      <img src="/logo.svg" alt="Licentia" className="h-12" />
      <div className="flex gap-8 text-gray-400 text-base">
        <a href="#features" className="hover:text-white transition">
          Features
        </a>
        <a href="#how" className="hover:text-white transition">
          How it works
        </a>
        <a href="#instructors" className="hover:text-white transition">
          Instructors
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

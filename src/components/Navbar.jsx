import { useNavigate, useLocation, Link } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav shadow-sm">
      <nav className="flex items-center justify-between px-8 h-20 w-full max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-12">
          <Link
            to="/"
            className="text-xl font-bold text-[#2e5f9c] tracking-tighter"
          >
            Licentia
          </Link>
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className={`pb-1 font-semibold transition-all border-b-2 ${
                location.pathname === "/"
                  ? "text-[#2e5f9c] border-[#2e5f9c]"
                  : "text-[#424750] border-transparent hover:text-[#2e5f9c] hover:border-[#2e5f9c]"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`pb-1 font-semibold transition-all border-b-2 ${
                location.pathname === "/about"
                  ? "text-[#2e5f9c] border-[#2e5f9c]"
                  : "text-[#424750] border-transparent hover:text-[#2e5f9c] hover:border-[#2e5f9c]"
              }`}
            >
              About
            </Link>
          </div>
        </div>

        <button
          onClick={() => navigate("/signin")}
          className="bg-gradient-primary text-white px-6 py-2.5 rounded-full font-semibold hover:opacity-90 transition-all"
        >
          Get your license
        </button>
      </nav>
    </header>
  );
}

export default Navbar;

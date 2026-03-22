import { useNavigate } from "react-router-dom";

const instructors = [
  {
    name: "Elena Rodriguez",
    role: "Bilingual Certified Expert",
    rating: "4.9",
    languages: ["Spanish", "English"],
    price: "$45",
    bio: "Specializing in expressway navigation for expatriates. Over 15 years of certified instruction experience.",
    badge: "check_circle",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuHWtDm-5BK_llBJJPtvGoIOKIviRnxWMecWu7o0w0HR1pzO8ELn1T4d1liCuOqH5A1x2pzlvGSrNvzTE1NqWIJHyWRaDiXBDeZnx7oM1lMc-7mFWrmXB3Z3YAPpzj3hjUbnJbOc2VGL_d5nemdgYfdAbRNZzNH2v8Q5YmJKM_fsH7kMYWRsdhL8CejiYL2WIcDmWzoNNQUyO3xS7gkmekoa3mEAJiscM4SEXwt5pLDvy8lGZ5rAxXZ_tJmQZ2y_7MMoKy2JIf5IgE",
  },
  {
    name: "Markus Webber",
    role: "Precision Driving Academy",
    rating: "5.0",
    languages: ["German", "English"],
    price: "$55",
    bio: "Berlin-based school offering intensive 5-day courses for international driver license conversion.",
    badge: "verified_user",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3B6Tmf360jokiqp1vOHRSAT7qoREuy5bcwLYDpJMGXdTeXUwNjtwJGoC3w22eaO6xrlEI3JzOJI3Sg2tKgtmtYjqoD_lAjFgMwbAie6ZWrStP8acQPX-eG7CcpgnbJG6xjlhs-be-jz0uEzwqwDvuBDhSTWEnIskAvvsm1koDdQGI9RIuKbay3NBowQdiXNLlQDVK4Hl8qY4mX7BakuXQbTKY4GChsy7VLmahmbUP_7Wwfxn7MUmjxFmVGnCUFL3YmdUWiPc46Hyw",
  },
  {
    name: "Kenji Sato",
    role: "Local Peer Mentor",
    rating: "4.7",
    languages: ["Japanese", "Mandarin"],
    price: "$30",
    bio: "I've been through the conversion process twice. I can help you navigate the tricky paperwork and the practical test.",
    badge: "verified_user",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYe-2WGHfKUy4LoWGEI_oTh4kDTKtZXjKoV_rycU6lDtzRzFrmpGAFmlEYVgYvd74MIiqej7YIFJPHkAOfz9ldlQMM01WJEK48B0dyStkGhUhWeBlwqV1Fg4UStRTbjJHc8Bmb9IRvPdWMqnTIviXqYOY89Gb6ce6R4CDLYLTI0kRDv_aZB-1Gpq-xa94OocLvO9lZMvt0BGNy0dJADemUMZ85E5jyLtItxnyNeILecjsbu46mSiaUy_ZSXffMv-mYd3K62sSMhHr1",
  },
  {
    name: "Dr. Sofia Chen",
    role: "Global License Specialist",
    rating: "4.8",
    languages: ["French", "English"],
    price: "$50",
    bio: "Dedicated to helping international students understand traffic laws and pass on the first attempt.",
    badge: "verified_user",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7nz1fwf6y8L1FXxrMpLCanumaaQKOWWtCfczH7vOwncFITIJ4RNt7WYFvm0pMB5f91hUlo-kE-C4XwrXId6RDV3QxUFUtP2TFxybsFtd6wOcBGwmG9PRkPgS2BXofbK5JZoHjimB9pl9VEkeq2orq9vy0lg1ZWYFKMZL2qZO3T41IHPEyr24OBZ8ySGMqHRvv4gh9BIMyhDSbYe1zTwXYXF_kFFj-OSkVG1rzYRmIltlrIqGFZxXrM0JvLQenoUpKWl8nqy7dSfFq",
  },
];

function Marketplace() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f9f9fa] text-[#1a1c1d] min-h-screen antialiased">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-[#f9f9fa]/80 backdrop-blur-2xl">
        <div className="flex items-center justify-between px-8 h-20 w-full max-w-screen-2xl mx-auto">
          <div className="text-2xl font-bold text-[#1a1c1d] tracking-tighter">
            Licentia
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/dashboard"
              className="text-[#424750] hover:text-[#1a1c1d] text-sm font-medium transition-all"
            >
              Home
            </a>
            <a
              href="/simulator"
              className="text-[#424750] hover:text-[#1a1c1d] text-sm font-medium transition-all"
            >
              Simulator
            </a>
            <a
              href="/marketplace"
              className="text-[#2e5f9c] font-semibold border-b-2 border-[#2e5f9c] text-sm py-1"
            >
              Marketplace
            </a>
          </nav>
          <div className="flex items-center space-x-5">
            <button className="p-2 text-[#424750] hover:bg-[#f3f3f4] rounded-full transition-all">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button className="p-2 text-[#424750] hover:bg-[#f3f3f4] rounded-full transition-all">
              <span className="material-symbols-outlined">notifications</span>
            </button>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-20 px-8 max-w-screen-2xl mx-auto">
        {/* Hero */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-extrabold tracking-tighter text-[#1a1c1d] mb-4">
                Instructor Marketplace
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed">
                Connect with elite bilingual instructors, local peer mentors,
                and certified driving schools across the globe.
              </p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-white shadow-sm rounded-xl text-[#1a1c1d] font-medium hover:bg-[#f3f3f4] transition-all">
              <span className="material-symbols-outlined text-sm">
                filter_list
              </span>
              Filters
            </button>
          </div>

          {/* Search */}
          <div className="mt-10 bg-white p-2 rounded-2xl shadow-sm flex flex-col md:flex-row gap-2">
            <div className="flex-1 flex items-center px-4 gap-3 bg-[#f3f3f4] rounded-xl">
              <span className="material-symbols-outlined text-gray-400">
                search
              </span>
              <input
                className="w-full bg-transparent border-none focus:ring-0 py-4 text-[#1a1c1d] placeholder:text-gray-400 outline-none"
                placeholder="Search by name, language or school..."
                type="text"
              />
            </div>
            <div className="flex-1 flex items-center px-4 gap-3 bg-[#f3f3f4] rounded-xl">
              <span className="material-symbols-outlined text-gray-400">
                location_on
              </span>
              <input
                className="w-full bg-transparent border-none focus:ring-0 py-4 text-[#1a1c1d] placeholder:text-gray-400 outline-none"
                placeholder="Location (e.g. Tokyo, Berlin...)"
                type="text"
              />
            </div>
            <button className="bg-[#2e5f9c] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#83b0f2] transition-colors">
              Search
            </button>
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-[#f3f3f4] rounded-xl p-6 space-y-2 sticky top-28">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 px-2">
                Browse Categories
              </h3>
              <button className="w-full flex items-center gap-4 p-4 bg-white text-[#2e5f9c] shadow-sm rounded-xl font-semibold transition-all">
                <span className="material-symbols-outlined">person_search</span>
                All Instructors
              </button>
              <button className="w-full flex items-center gap-4 p-4 text-gray-500 hover:translate-x-1 transition-all">
                <span className="material-symbols-outlined">school</span>
                Driving Schools
              </button>
              <button className="w-full flex items-center gap-4 p-4 text-gray-500 hover:translate-x-1 transition-all">
                <span className="material-symbols-outlined">groups</span>
                Peer Mentors
              </button>
              <div className="pt-8 px-2">
                <div className="bg-[#d4e3ff]/20 rounded-xl p-5 border border-[#83b0f2]/30">
                  <span
                    className="material-symbols-outlined text-[#2e5f9c] mb-2 block"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <h4 className="font-bold text-[#2e5f9c] text-sm">
                    Top Rated Guaranteed
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Our instructors go through a rigorous 15-point background
                    check.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Cards Grid */}
          <section className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {instructors.map((instructor, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col justify-between"
                >
                  <div className="flex gap-5">
                    <div className="relative">
                      <img
                        src={instructor.img}
                        alt={instructor.name}
                        className="w-24 h-24 rounded-2xl object-cover"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-[#2e5f9c] w-8 h-8 rounded-full flex items-center justify-center border-4 border-white">
                        <span
                          className="material-symbols-outlined text-white text-[16px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          {instructor.badge}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold text-[#1a1c1d]">
                            {instructor.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {instructor.role}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 bg-[#ffdea7] text-[#271900] px-2 py-1 rounded-lg text-xs font-bold">
                          <span
                            className="material-symbols-outlined text-xs"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            star
                          </span>
                          {instructor.rating}
                        </div>
                      </div>
                      <div className="flex gap-2 mt-3">
                        {instructor.languages.map((lang, j) => (
                          <span
                            key={j}
                            className="text-[10px] font-bold uppercase tracking-wider bg-[#eeeeef] px-2 py-1 rounded text-gray-500"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 text-sm text-gray-500 line-clamp-2 leading-relaxed">
                    {instructor.bio}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-lg font-bold text-[#1a1c1d]">
                      {instructor.price}
                      <span className="text-xs font-normal text-gray-400">
                        /hr
                      </span>
                    </span>
                    <div className="flex gap-2">
                      <button className="p-3 text-[#2e5f9c] hover:bg-[#d4e3ff]/30 rounded-xl transition-colors">
                        <span className="material-symbols-outlined">
                          chat_bubble
                        </span>
                      </button>
                      <button className="px-6 py-3 bg-[#eeeeef] text-[#2e5f9c] font-bold rounded-xl hover:bg-[#2e5f9c] hover:text-white transition-all">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <button className="px-10 py-4 bg-[#eeeeef] text-[#1a1c1d] font-bold rounded-xl hover:bg-[#e2e2e3] transition-all">
                Load More Results
              </button>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#f9f9fa] py-12 mt-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="text-lg font-bold text-[#2e5f9c]">Licentia</div>
            <p className="text-xs text-gray-400 max-w-sm">
              Licentia Global Education simplifies international mobility
              through comprehensive driver's training and elite marketplace
              connections.
            </p>
            <p className="text-xs text-gray-400">
              © 2026 Licentia. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end items-center">
            <a
              href="#"
              className="text-xs text-gray-400 hover:text-[#2e5f9c] transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-xs text-gray-400 hover:text-[#2e5f9c] transition-colors"
            >
              FAQ
            </a>
            <a
              href="#"
              className="text-xs text-gray-400 hover:text-[#2e5f9c] transition-colors"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-xs text-gray-400 hover:text-[#2e5f9c] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-gray-400 hover:text-[#2e5f9c] transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>

      {/* Mobile nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-xl px-6 py-4 flex justify-between items-center z-50 shadow-lg">
        <a
          href="/dashboard"
          className="flex flex-col items-center gap-1 text-gray-500"
        >
          <span className="material-symbols-outlined">home</span>
          <span className="text-[10px] font-medium">Home</span>
        </a>
        <a
          href="/simulator"
          className="flex flex-col items-center gap-1 text-gray-500"
        >
          <span className="material-symbols-outlined">drive_eta</span>
          <span className="text-[10px] font-medium">Sim</span>
        </a>
        <a
          href="/marketplace"
          className="flex flex-col items-center gap-1 text-[#2e5f9c]"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            shopping_bag
          </span>
          <span className="text-[10px] font-bold">Market</span>
        </a>
      </nav>
    </div>
  );
}

export default Marketplace;

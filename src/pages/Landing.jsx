import Navbar from "../components/Navbar";

function Landing() {
  return (
    <div className="bg-[#f9f9fa] text-[#1a1c1d] antialiased">
      <Navbar />

      {/* Hero */}
      <section className="relative px-8 pt-40 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <h1 className="text-5xl md:text-8xl font-extrabold text-[#1a1c1d] tracking-tighter leading-tight mb-8 max-w-5xl">
            Your personalized path to a{" "}
            <span className="text-gradient">driver's license</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl font-medium mb-12">
            Built for international drivers navigating new countries. Transition
            your skills with confidence.
          </p>
          <img
            src="/hero.svg"
            alt="Licentia license"
            className="w-[420px] mb-12 drop-shadow-xl"
          />
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:opacity-90 transition-all shadow-lg">
              Start Your Transition
            </button>
            <button className="bg-[#e2e2e3] text-[#2e5f9c] px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#d5d5d6] transition-all">
              How It Works
            </button>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,_#d4e3ff33_0%,_transparent_70%)] pointer-events-none" />
      </section>

      {/* 50M+ Stat Section */}
      <section className="bg-[#f3f3f4] py-32 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/10]">
              <img
                src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=900&auto=format"
                alt="Highway traffic"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
                <div className="text-white">
                  <span className="text-6xl font-bold block mb-2">50M+</span>
                  <p className="text-lg opacity-90 font-medium">
                    Immigrants currently navigating the road system.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 flex flex-col gap-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              The Bridge Across Borders.
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Driving isn't just a skill : it's independence. For over 50
              million immigrants, the transition from driving in their home
              country to obtaining a driving license is a maze of conflicting
              rules and high-stakes testing.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              Licentia was created to decode that transition. We don't just
              teach you how to drive; we teach you how to{" "}
              <span className="text-[#1a1c1d] font-semibold underline decoration-[#83b0f2] decoration-4 underline-offset-4">
                adapt your existing expertise
              </span>{" "}
              to International standards.
            </p>
            <div className="mt-4 p-6 bg-white rounded-2xl border-l-4 border-[#2e5f9c] shadow-sm">
              <p className="italic text-[#1a1c1d] font-medium">
                "The process is so complicated and requires so many steps (from
                my understanding). That's why I never got a license. It is also
                time consuming which makes it even more difficult because
                international students are usually busy with moving and adapting
                have a license in Egypt and used to driving so I know how to
                drive but as said the problem is with the process. Also the
                traffic rules here are slightly different from Egypt so it would
                help if that was clarified too. "
              </p>
              <span className="block mt-2 text-sm font-bold text-[#2e5f9c]">
                — Ahmed S., ASU Student
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Features */}
      <section id="features" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Designed for Mastery.
              </h2>
              <p className="text-xl text-gray-500">
                Four pillars of our education ecosystem, designed to take you
                from the desk to the driver's seat.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {/* Country pair */}
            <div className="md:col-span-4 bg-white rounded-2xl p-10 flex flex-col justify-between overflow-hidden relative group border border-gray-100 shadow-sm min-h-[340px]">
              <div className="z-10 relative">
                <span className="material-symbols-outlined text-[#2e5f9c] text-5xl mb-6">
                  swap_horiz
                </span>
                <h3 className="text-3xl font-bold mb-4">
                  Country-Pair Intelligence
                </h3>
                <p className="text-gray-500 text-lg max-w-md">
                  Our algorithm analyzes your home country's driving rules and
                  highlights the exact differences you need to know for your US
                  state.
                </p>
              </div>
              <div className="mt-12 z-10 flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="w-12 h-12 rounded-full border-4 border-white bg-[#d4e3ff] flex items-center justify-center font-bold text-[#0a4783]">
                    IN
                  </div>
                  <div className="w-12 h-12 rounded-full border-4 border-white bg-[#2e5f9c] text-white flex items-center justify-center font-bold">
                    US
                  </div>
                </div>
                <span className="text-sm font-bold text-gray-500">
                  Custom Path: India → California
                </span>
              </div>
            </div>
            {/* Smart prep */}
            <div className="md:col-span-2 bg-[#83b0f2]/10 rounded-2xl p-10 flex flex-col justify-between border border-[#83b0f2]/20 min-h-[340px]">
              <div>
                <span className="material-symbols-outlined text-[#2e5f9c] text-4xl mb-6">
                  task_alt
                </span>
                <h3 className="text-2xl font-bold mb-2">Smart Prep</h3>
                <p className="text-gray-500">
                  Adaptive practice tests that skip what you already know and
                  focus on what you don't.
                </p>
              </div>
              <div className="mt-8">
                <div className="w-full bg-white h-2 rounded-full overflow-hidden">
                  <div className="bg-[#2e5f9c] w-4/5 h-full rounded-full" />
                </div>
                <span className="text-xs font-bold text-[#2e5f9c] mt-2 block uppercase tracking-wider">
                  Exam Readiness: 85%
                </span>
              </div>
            </div>
            {/* Simulator */}
            <div
              id="simulator"
              className="md:col-span-2 bg-[#1a1c1d] rounded-2xl p-10 flex flex-col justify-between text-white relative overflow-hidden group min-h-[300px]"
            >
              <div className="z-10">
                <span className="material-symbols-outlined text-[#83b0f2] text-4xl mb-6">
                  sports_esports
                </span>
                <h3 className="text-2xl font-bold mb-2">Virtual Driver</h3>
                <p className="text-gray-400">
                  Experience 4-way stops and highway merging before you even sit
                  in a car.
                </p>
              </div>
            </div>
            {/* Instructor marketplace */}
            <div
              id="instructors"
              className="md:col-span-4 bg-[#f3f3f4] rounded-2xl p-10 grid md:grid-cols-2 gap-8 items-center border border-gray-100"
            >
              <div>
                <span className="material-symbols-outlined text-[#2e5f9c] text-4xl mb-6">
                  handshake
                </span>
                <h3 className="text-2xl font-bold mb-4">
                  Instructor Marketplace
                </h3>
                <p className="text-gray-500">
                  Book certified instructors who speak your language and
                  understand the international transition experience.
                </p>
                <button className="mt-6 text-[#2e5f9c] font-bold border-b-2 border-[#83b0f2] hover:border-[#2e5f9c] transition-all">
                  Find a Mentor
                </button>
              </div>
              <div className="flex flex-col gap-3">
                <div className="bg-white p-4 rounded-xl flex items-center gap-4 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#83b0f2] flex items-center justify-center text-white font-bold">
                    ER
                  </div>
                  <div>
                    <p className="font-bold">Elena Rodriguez</p>
                    <p className="text-xs text-gray-500">
                      Spanish • English • NYC
                    </p>
                  </div>
                  <span
                    className="ml-auto material-symbols-outlined text-[#2e5f9c]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                </div>
                <div className="bg-white p-4 rounded-xl flex items-center gap-4 shadow-sm translate-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#2e5f9c] flex items-center justify-center text-white font-bold">
                    CW
                  </div>
                  <div>
                    <p className="font-bold">Chen Wei</p>
                    <p className="text-xs text-gray-500">
                      Mandarin • English • SF
                    </p>
                  </div>
                  <span
                    className="ml-auto material-symbols-outlined text-[#2e5f9c]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-8">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-[#1a1c1d] text-white py-20 px-8 md:px-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              Ready to drive your new life?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto">
              Join drivers who successfully transitioned their licenses with
              Licentia.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#2e5f9c] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#83b0f2] transition-all">
                Start Your Free Lesson
              </button>
              <button className="border-2 border-gray-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
                View State Guides
              </button>
            </div>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#2e5f9c44_0%,_transparent_50%)] pointer-events-none" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f9f9fa] py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6">
            <span className="text-lg font-bold text-[#2e5f9c] tracking-tighter">
              Licentia
            </span>
            <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
              The world's leading platform for international driver's license
              education. Empowering immigrants through mobility.
            </p>
            <p className="text-xs text-gray-500">
              © 2026 Licentia. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-12 gap-y-6 md:justify-end items-start">
            <div className="flex flex-col gap-4">
              <span className="text-sm font-bold">Product</span>
              <a
                href="#features"
                className="text-xs text-gray-500 hover:text-[#2e5f9c] transition-colors"
              >
                Features
              </a>
              <a
                href="#simulator"
                className="text-xs text-gray-500 hover:text-[#2e5f9c] transition-colors"
              >
                Simulator
              </a>
              <a
                href="#instructors"
                className="text-xs text-gray-500 hover:text-[#2e5f9c] transition-colors"
              >
                Marketplace
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-sm font-bold">Company</span>
              <a
                href="#"
                className="text-xs text-gray-500 hover:text-[#2e5f9c] transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-xs text-gray-500 hover:text-[#2e5f9c] transition-colors"
              >
                FAQ
              </a>
              <a
                href="#"
                className="text-xs text-gray-500 hover:text-[#2e5f9c] transition-colors"
              >
                Contact
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-sm font-bold">Legal</span>
              <a
                href="#"
                className="text-xs text-gray-500 hover:text-[#2e5f9c] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-xs text-gray-500 hover:text-[#2e5f9c] transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;

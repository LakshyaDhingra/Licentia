import { useUser } from "@clerk/clerk-react";

function Dashboard() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();

  return (
    <div className="bg-[#f9f9fa] text-[#1a1c1d] min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f9f9fa]/80 backdrop-blur-xl border-none">
        <div className="flex items-center justify-between px-8 h-20 w-full max-w-screen-2xl mx-auto">
          <div className="text-2xl font-bold text-[#1a1c1d] tracking-tighter">
            Licentia
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a
              href="#"
              className="text-[#2e5f9c] font-semibold border-b-2 border-[#2e5f9c] pb-1"
            >
              Home
            </a>
            <a
              href="#"
              className="text-[#424750] hover:text-[#1a1c1d] transition-all"
            >
              Courses
            </a>
            <a
              href="/simulator"
              className="text-[#424750] hover:text-[#1a1c1d] transition-all"
            >
              Simulator
            </a>
            <a
              href="#"
              className="text-[#424750] hover:text-[#1a1c1d] transition-all"
            >
              Marketplace
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-[#f3f3f4] transition-all">
              <span className="material-symbols-outlined text-[#424750]">
                notifications
              </span>
            </button>
            <button className="p-2 rounded-full hover:bg-[#f3f3f4] transition-all">
              <span className="material-symbols-outlined text-[#424750]">
                settings
              </span>
            </button>
            <button
              onClick={() => signOut(() => navigate("/"))}
              className="text-xs font-semibold text-gray-500 hover:text-[#2e5f9c] transition-colors px-3 py-2 rounded-lg hover:bg-[#f3f3f4]"
            >
              Sign out
            </button>
            <div className="w-10 h-10 rounded-full overflow-hidden bg-[#eeeeef] ml-2">
              {user?.imageUrl && (
                <img
                  src={user.imageUrl}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="pt-28 pb-12 max-w-screen-2xl mx-auto px-8">
        {/* Welcome */}
        <section className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[#2e5f9c] font-bold tracking-widest text-xs uppercase mb-2 block">
              Dashboard
            </span>
            <h1 className="text-4xl font-extrabold tracking-tighter text-[#1a1c1d] mb-2">
              Welcome back, {user?.firstName || "Driver"}.
            </h1>
            <p className="text-gray-500 text-lg max-w-xl leading-relaxed">
              Your journey to a{" "}
              <span className="text-[#1a1c1d] font-semibold">
                US Driver's License
              </span>{" "}
              is 75% complete.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
            <div className="bg-[#d4e3ff] p-3 rounded-full flex items-center justify-center">
              <span
                className="material-symbols-outlined text-[#2e5f9c]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                local_fire_department
              </span>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-tighter">
                Current Streak
              </p>
              <p className="text-xl font-bold text-[#1a1c1d]">12 Days</p>
            </div>
          </div>
        </section>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Learning Progress */}
          <div className="md:col-span-8 bg-white rounded-xl p-8 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight mb-1">
                  Learning Path
                </h2>
                <p className="text-gray-500">Class C Non-Commercial License</p>
              </div>
              <span className="bg-[#d4e3ff] text-[#2e5f9c] px-4 py-1 rounded-full text-sm font-bold">
                In Progress
              </span>
            </div>
            <div className="space-y-8">
              {/* Progress bar */}
              <div className="relative h-24 w-full bg-[#eeeeef] rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2e5f9c] to-[#83b0f2] w-3/4" />
                <div className="absolute inset-0 flex items-center justify-between px-6 z-10">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-white text-3xl">
                      map
                    </span>
                    <span className="text-white font-bold">
                      Requirements Completed
                    </span>
                  </div>
                  <span className="text-white text-2xl font-black">75%</span>
                </div>
              </div>
              {/* Steps */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-[#f3f3f4] rounded-xl">
                  <span
                    className="material-symbols-outlined text-[#2e5f9c] mb-2"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <p className="text-xs font-bold text-gray-500 uppercase">
                    Identity
                  </p>
                  <p className="text-sm font-semibold">Verified</p>
                </div>
                <div className="p-4 bg-[#f3f3f4] rounded-xl">
                  <span
                    className="material-symbols-outlined text-[#2e5f9c] mb-2"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <p className="text-xs font-bold text-gray-500 uppercase">
                    Theory
                  </p>
                  <p className="text-sm font-semibold">Passed</p>
                </div>
                <div className="p-4 bg-[#f3f3f4] rounded-xl">
                  <span className="material-symbols-outlined text-[#83b0f2] mb-2">
                    pending
                  </span>
                  <p className="text-xs font-bold text-gray-500 uppercase">
                    Simulation
                  </p>
                  <p className="text-sm font-semibold">3/5 Complete</p>
                </div>
                <div className="p-4 bg-[#f3f3f4] rounded-xl opacity-50">
                  <span className="material-symbols-outlined text-gray-400 mb-2">
                    lock
                  </span>
                  <p className="text-xs font-bold text-gray-500 uppercase">
                    Road Test
                  </p>
                  <p className="text-sm font-semibold">Locked</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Lesson */}
          <div className="md:col-span-4 bg-[#2e5f9c] rounded-xl p-8 text-white relative overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#83b0f2]/20 rounded-full -mr-16 -mt-16 blur-3xl" />
            <div className="relative z-10">
              <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 inline-block">
                Recommended
              </span>
              <h3 className="text-2xl font-bold leading-tight mb-2">
                US Intersection & Turn Rules
              </h3>
              <p className="text-[#d4e3ff]/80 text-sm leading-relaxed mb-6">
                Master the 'Right on Red' and 'Four-way Stop' rules specific to
                your state.
              </p>
            </div>
            <div className="relative z-10">
              <button className="w-full bg-white text-[#2e5f9c] font-bold py-4 rounded-xl hover:scale-95 transition-all flex items-center justify-center gap-2">
                Start Lesson
                <span className="material-symbols-outlined">play_circle</span>
              </button>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight mb-6">
            Recent Activities
          </h2>
          <div className="bg-[#f3f3f4] rounded-xl overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="text-xs font-bold text-gray-500 uppercase tracking-widest border-b border-[#eeeeef]">
                  <th className="px-6 py-4">Activity</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eeeeef]">
                <tr className="hover:bg-[#eeeeef] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#2e5f9c]">
                        menu_book
                      </span>
                      <span className="font-medium">Right-of-Way Rules</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500 text-sm">Theory</td>
                  <td className="px-6 py-4 text-gray-500 text-sm">
                    Mar 21, 2026
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-[#2e5f9c] font-bold text-xs bg-[#d4e3ff] px-3 py-1 rounded-full">
                      COMPLETED
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-[#eeeeef] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#2e5f9c]">
                        directions_car
                      </span>
                      <span className="font-medium">Parallel Parking Sim</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500 text-sm">Simulator</td>
                  <td className="px-6 py-4 text-gray-500 text-sm">
                    Mar 19, 2026
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-gray-600 font-bold text-xs bg-[#e2e2e3] px-3 py-1 rounded-full">
                      IN PROGRESS
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#f9f9fa] py-12">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-t border-[#eeeeef] pt-12">
          <div>
            <div className="text-lg font-bold text-[#2e5f9c] mb-2">
              Licentia
            </div>
            <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
              © 2026 Licentia. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end">
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
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur px-6 py-4 flex justify-between items-center z-50 shadow-lg">
        <a href="#" className="flex flex-col items-center gap-1 text-[#2e5f9c]">
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            home
          </span>
          <span className="text-[10px] font-bold">Home</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1 text-gray-500">
          <span className="material-symbols-outlined">school</span>
          <span className="text-[10px] font-medium">Courses</span>
        </a>
        <a
          href="/simulator"
          className="flex flex-col items-center gap-1 text-gray-500"
        >
          <span className="material-symbols-outlined">drive_eta</span>
          <span className="text-[10px] font-medium">Sim</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1 text-gray-500">
          <span className="material-symbols-outlined">shopping_bag</span>
          <span className="text-[10px] font-medium">Market</span>
        </a>
      </nav>
    </div>
  );
}

export default Dashboard;

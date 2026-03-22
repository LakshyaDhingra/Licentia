import { useUser, useClerk } from "@clerk/clerk-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { bookDMVTest } from "../lib/tinyfish";
import { insforge } from "../lib/insforge";

function Dashboard() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();
  const location = useLocation();
  const { curriculumPath } = location.state || { curriculumPath: "beginner" };

  const [userState, setUserState] = useState("California");
  const [learnerUrl, setLearnerUrl] = useState(null);
  const [roadUrl, setRoadUrl] = useState(null);
  const [bookingLearner, setBookingLearner] = useState(false);
  const [bookingRoad, setBookingRoad] = useState(false);
  const [learnerPassed, setLearnerPassed] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return;
      const result = await insforge.database
        .from("user_profiles")
        .select("destination_state")
        .eq("clerk_id", user.id)
        .single();
      if (result.data?.destination_state) {
        setUserState(result.data.destination_state);
      }
    };
    fetchProfile();
  }, [user]);

  const handleBookLearner = async () => {
    setBookingLearner(true);
    try {
      const result = await bookDMVTest(userState, "learner");
      setLearnerUrl(result.url);
    } catch (err) {
      console.error("Booking failed:", err);
    } finally {
      setBookingLearner(false);
    }
  };

  const handleBookRoad = async () => {
    setBookingRoad(true);
    try {
      const result = await bookDMVTest(userState, "road");
      setRoadUrl(result.url);
    } catch (err) {
      console.error("Booking failed:", err);
    } finally {
      setBookingRoad(false);
    }
  };

  const content = {
    beginner: {
      label: "Full Curriculum",
      tagline: "Starting from the basics",
      color: "bg-[#2e5f9c]",
      recommended: "Introduction to US Road Rules",
      recommendedDesc:
        "Start from the very beginning — road signs, basic rules, and driving fundamentals in your new country.",
      steps: [
        {
          icon: "check_circle",
          label: "Identity",
          status: "Verified",
          done: true,
        },
        {
          icon: "pending",
          label: "Theory",
          status: "In Progress",
          done: false,
        },
        { icon: "lock", label: "Simulation", status: "Locked", done: false },
        { icon: "lock", label: "Road Test", status: "Locked", done: false },
      ],
      progress: 10,
      activities: [
        {
          icon: "menu_book",
          name: "Basic Road Signs",
          category: "Theory",
          date: "Today",
          status: "IN PROGRESS",
        },
        {
          icon: "directions_car",
          name: "Driving Fundamentals",
          category: "Theory",
          date: "Locked",
          status: "LOCKED",
        },
      ],
    },
    hybrid: {
      label: "Blended Curriculum",
      tagline: "Filling your knowledge gaps",
      color: "bg-[#7c5800]",
      recommended: "US Intersection & Turn Rules",
      recommendedDesc:
        "Master the 'Right on Red' and 'Four-way Stop' rules — the most common gaps for international drivers.",
      steps: [
        {
          icon: "check_circle",
          label: "Identity",
          status: "Verified",
          done: true,
        },
        { icon: "check_circle", label: "Theory", status: "Passed", done: true },
        {
          icon: "pending",
          label: "Simulation",
          status: "2/5 Complete",
          done: false,
        },
        { icon: "lock", label: "Road Test", status: "Locked", done: false },
      ],
      progress: 45,
      activities: [
        {
          icon: "menu_book",
          name: "Right-of-Way Rules",
          category: "Theory",
          date: "Yesterday",
          status: "COMPLETED",
        },
        {
          icon: "directions_car",
          name: "Four-way Stop Sim",
          category: "Simulator",
          date: "Today",
          status: "IN PROGRESS",
        },
      ],
    },
    experienced: {
      label: "Gap Curriculum",
      tagline: "Just what's different for you",
      color: "bg-[#1a5c3a]",
      recommended: "Key Rule Differences",
      recommendedDesc:
        "You already know how to drive. Here's exactly what's different in your destination country.",
      steps: [
        {
          icon: "check_circle",
          label: "Identity",
          status: "Verified",
          done: true,
        },
        { icon: "check_circle", label: "Theory", status: "Passed", done: true },
        {
          icon: "check_circle",
          label: "Simulation",
          status: "Complete",
          done: true,
        },
        { icon: "pending", label: "Road Test", status: "Pending", done: false },
      ],
      progress: 75,
      activities: [
        {
          icon: "menu_book",
          name: "Right-of-Way Rules",
          category: "Theory",
          date: "Mar 21, 2026",
          status: "COMPLETED",
        },
        {
          icon: "directions_car",
          name: "Parallel Parking Sim",
          category: "Simulator",
          date: "Mar 19, 2026",
          status: "IN PROGRESS",
        },
      ],
    },
  };

  const c = content[curriculumPath];

  return (
    <div className="bg-[#f9f9fa] text-[#1a1c1d] min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f9f9fa]/80 backdrop-blur-xl">
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
              href="/simulator"
              className="text-[#424750] hover:text-[#1a1c1d] transition-all"
            >
              Simulator
            </a>
            <a
              href="/marketplace"
              className="text-[#424750] hover:text-[#1a1c1d] transition-all"
            >
              Marketplace
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => signOut({ redirectUrl: "/" })}
              className="text-xs font-semibold text-gray-500 hover:text-[#2e5f9c] transition-colors px-3 py-2 rounded-lg hover:bg-[#f3f3f4]"
            >
              Sign out
            </button>
            <div className="w-10 h-10 rounded-full overflow-hidden bg-[#eeeeef]">
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
        <section className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[#2e5f9c] font-bold tracking-widest text-xs uppercase mb-2 block">
              {c.label}
            </span>
            <h1 className="text-4xl font-extrabold tracking-tighter text-[#1a1c1d] mb-2">
              Welcome back, {user?.firstName || "Driver"}.
            </h1>
            <p className="text-gray-500 text-lg max-w-xl leading-relaxed">
              {c.tagline} — your personalized path to a driver's license in{" "}
              {userState}.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
            <div className="bg-[#d4e3ff] p-3 rounded-full">
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
              <p className="text-xl font-bold text-[#1a1c1d]">1 Day</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
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
              <div className="relative h-24 w-full bg-[#eeeeef] rounded-xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-[#2e5f9c] to-[#83b0f2]"
                  style={{ width: `${c.progress}%` }}
                />
                <div className="absolute inset-0 flex items-center justify-between px-6 z-10">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-white text-3xl">
                      map
                    </span>
                    <span className="text-white font-bold">
                      Requirements Completed
                    </span>
                  </div>
                  <span className="text-white text-2xl font-black">
                    {c.progress}%
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {c.steps.map((step, i) => (
                  <div
                    key={i}
                    className={`p-4 bg-[#f3f3f4] rounded-xl ${!step.done && step.icon === "lock" ? "opacity-50" : ""}`}
                  >
                    <span
                      className="material-symbols-outlined text-[#2e5f9c] mb-2 block"
                      style={{
                        fontVariationSettings: step.done
                          ? "'FILL' 1"
                          : "'FILL' 0",
                      }}
                    >
                      {step.icon}
                    </span>
                    <p className="text-xs font-bold text-gray-500 uppercase">
                      {step.label}
                    </p>
                    <p className="text-sm font-semibold">{step.status}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`md:col-span-4 ${c.color} rounded-xl p-8 text-white relative overflow-hidden flex flex-col justify-between shadow-xl`}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl" />
            <div className="relative z-10">
              <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 inline-block">
                Recommended
              </span>
              <h3 className="text-2xl font-bold leading-tight mb-2">
                {c.recommended}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                {c.recommendedDesc}
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
                {c.activities.map((activity, i) => (
                  <tr key={i} className="hover:bg-[#eeeeef] transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[#2e5f9c]">
                          {activity.icon}
                        </span>
                        <span className="font-medium">{activity.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-500 text-sm">
                      {activity.category}
                    </td>
                    <td className="px-6 py-4 text-gray-500 text-sm">
                      {activity.date}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span
                        className={`font-bold text-xs px-3 py-1 rounded-full ${activity.status === "COMPLETED" ? "text-[#2e5f9c] bg-[#d4e3ff]" : activity.status === "IN PROGRESS" ? "text-gray-600 bg-[#e2e2e3]" : "text-gray-400 bg-[#f3f3f4]"}`}
                      >
                        {activity.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Two Stage DMV Booking */}
        <section className="mt-12 mb-12 space-y-4">
          {/* Stage 1 - Learner's Permit */}
          <div className="bg-[#1a1c1d] rounded-2xl p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-[#83b0f2] font-bold tracking-widest text-xs uppercase mb-2 block">
                Step 1
              </span>
              <h2 className="text-2xl font-bold tracking-tight mb-2">
                Book your learner's permit test
              </h2>
              <p className="text-gray-400 max-w-lg text-sm">
                We'll find the exact knowledge test booking page on your{" "}
                {userState} DMV website.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-w-[200px]">
              {learnerUrl && (
                <a
                  href={learnerUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#2e5f9c] text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-[#83b0f2] transition-all"
                >
                  Go to DMV Booking
                </a>
              )}
              {!learnerUrl && (
                <button
                  onClick={handleBookLearner}
                  disabled={bookingLearner}
                  className={`px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${bookingLearner ? "bg-gray-600 cursor-not-allowed" : "bg-white text-[#1a1c1d] hover:opacity-90"}`}
                >
                  {bookingLearner && (
                    <>
                      <div className="w-4 h-4 border-2 border-[#1a1c1d] border-t-transparent rounded-full animate-spin" />
                      Finding DMV page...
                    </>
                  )}
                  {!bookingLearner && (
                    <>
                      <span className="material-symbols-outlined">
                        calendar_month
                      </span>
                      Book Learner's Test
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Stage 2 - Road Test */}
          <div
            className={`rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 transition-all ${learnerPassed ? "bg-[#0f3d2a]" : "bg-[#2a2a2a]"} text-white`}
          >
            <div>
              <span
                className={`font-bold tracking-widest text-xs uppercase mb-2 block ${learnerPassed ? "text-[#4ade80]" : "text-gray-500"}`}
              >
                Step 2
              </span>
              <h2 className="text-2xl font-bold tracking-tight mb-2">
                Book your road test
              </h2>
              <p className="text-gray-400 max-w-lg text-sm">
                {learnerPassed
                  ? "Congrats on passing your learner's test! Now book your in-car road test."
                  : "Complete your learner's permit test first to unlock this step."}
              </p>
            </div>
            <div className="flex flex-col gap-3 min-w-[200px]">
              {!learnerPassed && (
                <button
                  onClick={() => setLearnerPassed(true)}
                  className="px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 transition-all"
                >
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                  I passed my learner's test
                </button>
              )}
              {learnerPassed && roadUrl && (
                <a
                  href={roadUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#4ade80] text-[#0f3d2a] px-8 py-4 rounded-xl font-bold text-center hover:opacity-90 transition-all"
                >
                  Go to Road Test Booking
                </a>
              )}
              {learnerPassed && !roadUrl && (
                <button
                  onClick={handleBookRoad}
                  disabled={bookingRoad}
                  className={`px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${bookingRoad ? "bg-gray-600 cursor-not-allowed" : "bg-white text-[#1a1c1d] hover:opacity-90"}`}
                >
                  {bookingRoad && (
                    <>
                      <div className="w-4 h-4 border-2 border-[#1a1c1d] border-t-transparent rounded-full animate-spin" />
                      Finding booking page...
                    </>
                  )}
                  {!bookingRoad && (
                    <>
                      <span className="material-symbols-outlined">
                        directions_car
                      </span>
                      Book Road Test
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </section>
      </main>

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
        <a
          href="/simulator"
          className="flex flex-col items-center gap-1 text-gray-500"
        >
          <span className="material-symbols-outlined">drive_eta</span>
          <span className="text-[10px] font-medium">Sim</span>
        </a>
        <a
          href="/marketplace"
          className="flex flex-col items-center gap-1 text-gray-500"
        >
          <span className="material-symbols-outlined">shopping_bag</span>
          <span className="text-[10px] font-medium">Market</span>
        </a>
      </nav>
    </div>
  );
}

export default Dashboard;

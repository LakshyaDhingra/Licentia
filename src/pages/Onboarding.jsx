import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { insforge } from "../lib/insforge";
import { useUser } from "@clerk/clerk-react";

const countries = [
  { name: "Italy", flag: "https://flagcdn.com/w160/it.png" },
  { name: "United Kingdom", flag: "https://flagcdn.com/w160/gb.png" },
  { name: "Brazil", flag: "https://flagcdn.com/w160/br.png" },
  { name: "India", flag: "https://flagcdn.com/w160/in.png" },
  { name: "Mexico", flag: "https://flagcdn.com/w160/mx.png" },
  { name: "Germany", flag: "https://flagcdn.com/w160/de.png" },
  { name: "France", flag: "https://flagcdn.com/w160/fr.png" },
  { name: "Japan", flag: "https://flagcdn.com/w160/jp.png" },
  { name: "China", flag: "https://flagcdn.com/w160/cn.png" },
  { name: "Australia", flag: "https://flagcdn.com/w160/au.png" },
];

const destinations = [
  { name: "United States", flag: "https://flagcdn.com/w160/us.png" },
  { name: "Canada", flag: "https://flagcdn.com/w160/ca.png" },
  { name: "United Kingdom", flag: "https://flagcdn.com/w160/gb.png" },
  { name: "Australia", flag: "https://flagcdn.com/w160/au.png" },
  { name: "Germany", flag: "https://flagcdn.com/w160/de.png" },
  { name: "France", flag: "https://flagcdn.com/w160/fr.png" },
];

const usStates = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

function FlagSlider({ list, activeIndex, onPrev, onNext }) {
  const prev = (activeIndex - 1 + list.length) % list.length;
  const next = (activeIndex + 1) % list.length;

  return (
    <div className="flex flex-col items-center">
      <div
        className="flex items-center gap-12 py-10 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
        }}
      >
        <div className="flex flex-col items-center opacity-30 scale-75 transition-all duration-500">
          <span className="text-[10px] font-bold uppercase tracking-widest mb-4">
            {list[prev].name}
          </span>
          <div className="w-32 h-20 rounded-xl shadow-lg overflow-hidden">
            <img
              src={list[prev].flag}
              alt={list[prev].name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col items-center scale-110 transition-all duration-500">
          <span className="text-sm font-black uppercase tracking-widest mb-4 text-[#2e5f9c]">
            {list[activeIndex].name}
          </span>
          <div className="w-48 h-32 rounded-xl shadow-lg overflow-hidden border-4 border-[#83b0f2]">
            <img
              src={list[activeIndex].flag}
              alt={list[activeIndex].name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col items-center opacity-30 scale-75 transition-all duration-500">
          <span className="text-[10px] font-bold uppercase tracking-widest mb-4">
            {list[next].name}
          </span>
          <div className="w-32 h-20 rounded-xl shadow-lg overflow-hidden">
            <img
              src={list[next].flag}
              alt={list[next].name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        <button
          onClick={onPrev}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-[#e8e8e9] text-[#424750] hover:bg-[#2e5f9c] hover:text-white transition-all active:scale-90"
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button
          onClick={onNext}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-[#e8e8e9] text-[#424750] hover:bg-[#2e5f9c] hover:text-white transition-all active:scale-90"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
}

function Onboarding() {
  const navigate = useNavigate();
  const { user } = useUser();
  const [homeIndex, setHomeIndex] = useState(0);
  const [destIndex, setDestIndex] = useState(0);
  const [checking, setChecking] = useState(true);
  const [step, setStep] = useState("countries");
  const [selectedState, setSelectedState] = useState("California");

  useEffect(() => {
    const checkExisting = async () => {
      if (!user) return;
      try {
        const result = await insforge.database
          .from("user_profiles")
          .select("*")
          .eq("clerk_id", user.id)
          .single();

        if (result.data && result.data.home_country) {
          navigate("/knowledge-test");
          return;
        }
        setChecking(false);
        setChecking(false);
      } catch (err) {
        // no row found — show onboarding
        setChecking(false);
      }
    };
    checkExisting();
  }, [user]);

  if (checking)
    return (
      <div className="min-h-screen bg-[#f9f9fa] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-[#83b0f2] border-t-[#2e5f9c] rounded-full animate-spin" />
      </div>
    );

  const handleStart = async () => {
    try {
      const existing = await insforge.database
        .from("user_profiles")
        .select("id")
        .eq("clerk_id", user.id)
        .single();

      if (existing.data) {
        await insforge.database
          .from("user_profiles")
          .update({
            home_country: countries[homeIndex].name,
            destination_country: destinations[destIndex].name,
            destination_state: selectedState,
            curriculum_path: null,
          })
          .eq("clerk_id", user.id);
      } else {
        await insforge.database.from("user_profiles").insert({
          clerk_id: user.id,
          home_country: countries[homeIndex].name,
          destination_country: destinations[destIndex].name,
          destination_state: selectedState,
        });
      }
    } catch (err) {
      console.error("Failed to save:", err);
    }
    navigate("/knowledge-test");
  };

  return (
    <div className="bg-[#f9f9fa] text-[#1a1c1d] antialiased overflow-hidden min-h-screen flex flex-col pb-32">
      <div className="w-full flex flex-col items-center pt-16 pb-8">
        <h1 className="text-4xl md:text-6xl font-black text-[#1a1c1d] tracking-tighter text-center mb-4">
          Your journey starts here.
        </h1>
        <p className="text-gray-500 font-medium text-base md:text-xl text-center max-w-2xl px-6">
          Let's personalize your path to an international driving license.
        </p>
      </div>

      {step === "countries" && (
        <div className="flex-1 flex flex-col md:flex-row">
          <section className="flex-1 flex flex-col items-center justify-center px-4 md:border-r border-gray-200">
            <div className="mb-8 text-center">
              <h2 className="text-5xl font-black text-[#1a1c1d] tracking-tighter mb-2">
                Home
              </h2>
              <p className="text-gray-500 font-medium uppercase tracking-widest text-xs">
                Origin Country
              </p>
            </div>
            <FlagSlider
              list={countries}
              activeIndex={homeIndex}
              onPrev={() =>
                setHomeIndex(
                  (homeIndex - 1 + countries.length) % countries.length,
                )
              }
              onNext={() => setHomeIndex((homeIndex + 1) % countries.length)}
            />
          </section>
          <section className="flex-1 flex flex-col items-center justify-center px-4">
            <div className="mb-8 text-center">
              <h2 className="text-5xl font-black text-[#1a1c1d] tracking-tighter mb-2">
                Destination
              </h2>
              <p className="text-gray-500 font-medium uppercase tracking-widest text-xs">
                New Country
              </p>
            </div>
            <FlagSlider
              list={destinations}
              activeIndex={destIndex}
              onPrev={() =>
                setDestIndex(
                  (destIndex - 1 + destinations.length) % destinations.length,
                )
              }
              onNext={() => setDestIndex((destIndex + 1) % destinations.length)}
            />
          </section>
        </div>
      )}

      {step === "state" && (
        <div className="flex-1 flex flex-col items-center justify-center px-8 gap-8">
          <div className="text-center">
            <h2 className="text-5xl font-black text-[#1a1c1d] tracking-tighter mb-2">
              Which state?
            </h2>
            <p className="text-gray-500 font-medium uppercase tracking-widest text-xs">
              Destination State
            </p>
          </div>
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="w-full max-w-md px-6 py-4 rounded-xl bg-white border-2 border-[#83b0f2] text-[#1a1c1d] font-semibold text-lg focus:outline-none focus:border-[#2e5f9c]"
          >
            {usStates.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          <p className="text-gray-400 text-sm">
            This helps us find the right DMV rules and booking page for you.
            (Available for US destinations only)
          </p>
        </div>
      )}

      <footer className="fixed bottom-0 w-full z-50 bg-[#f9f9fa]/90 backdrop-blur-2xl px-8 pt-6 pb-10 flex flex-col items-center gap-6">
        {step === "countries" ? (
          <button
            onClick={() => setStep("state")}
            className="w-full max-w-md bg-gradient-primary text-white py-5 rounded-xl font-bold text-lg shadow-lg hover:opacity-90 active:scale-[0.98] transition-all"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleStart}
            className="w-full max-w-md bg-gradient-primary text-white py-5 rounded-xl font-bold text-lg shadow-lg hover:opacity-90 active:scale-[0.98] transition-all"
          >
            Start Journey
          </button>
        )}
      </footer>
    </div>
  );
}

export default Onboarding;

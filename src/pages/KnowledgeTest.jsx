import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { insforge } from "../lib/insforge";
import { generateQuestions } from "../lib/claude";

function KnowledgeTest() {
  const navigate = useNavigate();
  const { user } = useUser();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selected, setSelected] = useState(null);
  const [countryPair, setCountryPair] = useState(null);

  useEffect(() => {
    const loadQuestions = async () => {
      if (!user) return;
      try {
        const result = await insforge.database
          .from("user_profiles")
          .select("*")
          .eq("clerk_id", user.id)
          .single();

        if (!result.data) {
          navigate("/onboarding");
          return; // don't set loading false, just leave
        }

        if (result.data.curriculum_path) {
          navigate("/dashboard", {
            state: { curriculumPath: result.data.curriculum_path },
          });
          return; // don't set loading false, just leave
        }

        const { home_country, destination_country, destination_state } =
          result.data;
        setCountryPair({
          home_country,
          destination_country,
          destination_state,
        });
        const qs = await generateQuestions(
          home_country,
          destination_country,
          destination_state,
        );
        console.log("questions generated:", qs);
        setQuestions(qs);
        setLoading(false); // only set false when we actually need the test UI
      } catch (err) {
        console.error("Failed to load questions:", err);
        console.error("Error details:", JSON.stringify(err));
        setLoading(false);
      }
    };
    loadQuestions();
  }, [user]);

  const handleSelect = (index) => setSelected(index);

  const handleNext = () => {
    if (selected === null) return;
    const question = questions[current];
    const newAnswers = {
      ...answers,
      [question.id]: {
        selected,
        correct: question.correct,
        category: question.category,
      },
    };
    setAnswers(newAnswers);
    setSelected(null);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      const homeAnswers = Object.values(newAnswers).filter(
        (a) => a.category === "home",
      );
      const destAnswers = Object.values(newAnswers).filter(
        (a) => a.category === "destination",
      );
      const homeScore =
        homeAnswers.filter((a) => a.selected === a.correct).length /
        homeAnswers.length;
      const destScore =
        destAnswers.filter((a) => a.selected === a.correct).length /
        destAnswers.length;

      let curriculumPath = "beginner";
      if (homeScore >= 0.6 && destScore < 0.6) curriculumPath = "experienced";
      else if (homeScore >= 0.4 || destScore >= 0.4) curriculumPath = "hybrid";

      // Save to InsForge
      insforge.database
        .from("user_profiles")
        .update({
          curriculum_path: curriculumPath,
        })
        .eq("clerk_id", user.id);

      navigate("/dashboard", {
        state: { curriculumPath, homeScore, destScore },
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f9f9fa] flex flex-col items-center justify-center gap-4">
        <div className="w-12 h-12 border-4 border-[#83b0f2] border-t-[#2e5f9c] rounded-full animate-spin" />
        <p className="text-gray-500 font-medium">
          Building your personalized assessment...
        </p>
        {countryPair && (
          <p className="text-sm text-gray-400">
            {countryPair.home_country} → {countryPair.destination_country}
          </p>
        )}
      </div>
    );
  }

  if (!questions.length) {
    return (
      <div className="min-h-screen bg-[#f9f9fa] flex items-center justify-center">
        <p className="text-gray-500">
          Failed to load questions. Please try again.
        </p>
      </div>
    );
  }

  const question = questions[current];
  const progress = (current / questions.length) * 100;

  return (
    <div className="bg-[#f9f9fa] text-[#1a1c1d] min-h-screen antialiased">
      {/* Progress bar */}
      <div className="w-full h-2 bg-[#eeeeef] sticky top-0 z-50 overflow-hidden">
        <div
          className="h-full bg-[#83b0f2] rounded-r-full transition-all duration-700 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <main className="max-w-screen-md mx-auto px-6 pb-32 pt-16">
        <div className="space-y-12">
          {/* Question header */}
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#2e5f9c] uppercase">
              {question.category === "home"
                ? `${countryPair?.home_country} rules`
                : `${countryPair?.destination_state}, ${countryPair?.destination_country} rules`}{" "}
              · {current + 1} of {questions.length}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1a1c1d]">
              {question.question}
            </h1>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 gap-4">
            {question.options.map((option, index) => {
              const isSelected = selected === index;
              return (
                <button
                  key={index}
                  onClick={() => handleSelect(index)}
                  className={`group flex items-center p-6 rounded-xl transition-all duration-200 text-left active:scale-[0.98] border-2 ${
                    isSelected
                      ? "bg-[#d4e3ff]/30 border-[#2e5f9c]"
                      : "bg-white border-transparent hover:border-[#2e5f9c]/20"
                  }`}
                >
                  <div
                    className={`w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg font-bold transition-colors ${
                      isSelected
                        ? "bg-[#2e5f9c] text-white"
                        : "bg-[#eeeeef] text-[#424750] group-hover:bg-[#d4e3ff] group-hover:text-[#2e5f9c]"
                    }`}
                  >
                    {["A", "B", "C", "D"][index]}
                  </div>
                  <span
                    className={`ml-6 text-lg font-medium ${isSelected ? "text-[#2e5f9c] font-semibold" : "text-[#1a1c1d]"}`}
                  >
                    {option}
                  </span>
                  {isSelected && (
                    <span
                      className="material-symbols-outlined ml-auto text-[#2e5f9c]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </main>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 w-full bg-[#f9f9fa]/90 backdrop-blur-xl px-6 py-6">
        <div className="max-w-screen-md mx-auto">
          <button
            onClick={handleNext}
            disabled={selected === null}
            className={`w-full py-5 rounded-xl font-bold text-lg transition-all ${
              selected !== null
                ? "bg-[#2e5f9c] text-white hover:opacity-90 active:scale-[0.98]"
                : "bg-[#eeeeef] text-[#424750] cursor-not-allowed"
            }`}
          >
            {current + 1 === questions.length
              ? "See My Results"
              : "Next Question"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default KnowledgeTest;

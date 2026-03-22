import { useNavigate } from "react-router-dom";
import { useUser, useClerk } from "@clerk/clerk-react";
import { useEffect } from "react";

function Simulator() {
  const navigate = useNavigate();
  const { user } = useUser();
  const { signOut } = useClerk();

  useEffect(() => {
    const iframe = document.getElementById("app-frame");
    if (iframe) {
      iframe.contentWindow.postMessage({ score: 10 }, "https://playcanv.as");
    }
  }, []);

  return (
    <div className="bg-[#f9f9fa] min-h-screen text-[#1a1c1d]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f9f9fa]/80 backdrop-blur-xl">
        <div className="flex items-center justify-between px-8 h-20 w-full max-w-screen-2xl mx-auto">
          <div className="text-2xl font-bold text-[#1a1c1d] tracking-tighter">
            Licentia
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a
              href="/dashboard"
              className="text-[#424750] hover:text-[#1a1c1d] transition-all"
            >
              Dashboard
            </a>
            <a
              href="/simulator"
              className="text-[#2e5f9c] font-semibold border-b-2 border-[#2e5f9c] pb-1"
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

      {/* Scenario bar */}
      <div className="pt-20">
        <div className="bg-[#1a1c1d] px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6 text-sm">
            <span className="text-[#83b0f2] font-bold uppercase tracking-widest text-xs">
              Scenario
            </span>
            <span className="text-white font-semibold">
              4-Way Stop Intersection
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <span>Use arrow keys to drive</span>
            <span>·</span>
            <span>Press R to restart</span>
          </div>
        </div>

        {/* Simulator */}
        <iframe
          id="app-frame"
          src="https://playcanv.as/e/p/riORWZrp/"
          style={{
            width: "100%",
            height: "calc(100vh - 116px)",
            border: "none",
          }}
          title="PlayCanvas Simulator"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default Simulator;

import { SignIn } from "@clerk/clerk-react";

function SignInPage() {
  return (
    <div className="bg-[#f9f9fa] text-[#1a1c1d] min-h-screen flex flex-col antialiased">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 h-20 flex items-center justify-between">
        <div className="text-2xl font-bold text-[#1a1c1d] tracking-tighter">
          Licentia
        </div>
        <a
          href="/"
          className="text-sm font-medium text-[#2e5f9c] hover:underline transition-colors"
        >
          Back to main site
        </a>
      </header>

      {/* Main */}
      <main className="flex-grow flex items-center justify-center px-4 pt-24 pb-12 relative overflow-hidden">
        {/* Background orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#a5c8ff]/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#c6c6c6]/20 rounded-full blur-[120px]" />

        <div className="w-full max-w-[1100px] grid md:grid-cols-2 gap-0 bg-white rounded-2xl shadow-[0_40px_100px_rgba(26,28,29,0.08)] overflow-hidden">
          {/* Left: Branding */}
          <div className="hidden md:flex flex-col justify-between p-12 bg-[#f3f3f4] relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-4xl font-extrabold text-[#1a1c1d] leading-tight tracking-tighter mb-6">
                Master the roads,
                <br />
                anywhere in the world.
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed max-w-sm">
                Join other international drivers simplifying their license
                transition.
              </p>
            </div>

            <div className="absolute bottom-[-20%] right-[-10%] opacity-10">
              <span className="material-symbols-outlined text-[300px] text-[#2e5f9c]">
                language
              </span>
            </div>
          </div>

          {/* Right: Clerk */}
          <div className="flex items-center justify-center p-8">
            <SignIn
              routing="path"
              path="/signin"
              afterSignInUrl="/onboarding"
              afterSignUpUrl="/onboarding"
              signUpUrl="/signup"
              appearance={{
                elements: {
                  rootBox: "w-full",
                  card: "shadow-none p-0 bg-transparent",
                  headerTitle:
                    "text-2xl font-bold text-[#1a1c1d] tracking-tight",
                  headerSubtitle: "text-gray-500 text-sm",
                  socialButtonsBlockButton:
                    "border border-gray-200 hover:bg-gray-50 rounded-xl",
                  formButtonPrimary:
                    "bg-[#2e5f9c] hover:bg-[#83b0f2] rounded-2xl py-4 font-bold text-lg transition-all",
                  formFieldInput:
                    "rounded-xl bg-[#f3f3f4] border-none focus:ring-2 focus:ring-[#2e5f9c]/40",
                  footerActionLink: "text-[#2e5f9c] font-bold hover:underline",
                },
              }}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-[#f9f9fa] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            © 2026 Licentia. All rights reserved.
          </p>
          <div className="flex gap-6">
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
    </div>
  );
}

export default SignInPage;

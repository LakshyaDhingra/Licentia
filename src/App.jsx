import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import Landing from "./pages/Landing";
import SignInPage from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Onboarding from "./pages/Onboarding";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin/*" element={<SignInPage />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/onboarding"
          element={
            <>
              <SignedIn>
                <Onboarding />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <SignedIn>
                <Dashboard />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

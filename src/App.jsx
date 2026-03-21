import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<h1 className="text-4xl p-8">Landing page coming soon</h1>}
        />
        <Route
          path="/onboarding"
          element={<h1 className="text-4xl p-8">Onboarding coming soon</h1>}
        />
        <Route
          path="/simulator"
          element={<h1 className="text-4xl p-8">Simulator coming soon</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

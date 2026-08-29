import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Addnote from "./components/Addnote";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import RecentlyAdded from "./components/RecentlyAdded";
import Notes from "./pages/Notes";

function App() {
  const [refreshNotes, setRefreshNotes] = useState(0);
  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <div className="p-8 md:py-10 space-y-10">
              <div className="grid gap-10 lg:grid-cols-2">
                <Hero />
                <Addnote
                  onNoteAdded={() => setRefreshNotes((value) => value + 1)}
                />
              </div>

              <div className="space-y-5">
                <h3 className="uppercase tracking-tight">Recently Added</h3>
                <RecentlyAdded refreshNotes={refreshNotes} />
              </div>
            </div>
          }
        />

        <Route path="/notes" element={<Notes />} />
      </Routes>
    </div>
  );
}

export default App;

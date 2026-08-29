import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import RecentlyAdded from "../components/RecentlyAdded";

function Notes() {
  const [noteCount, setNoteCount] = useState(0);

  useEffect(() => {
    async function getNoteCount() {
      const { count, error } = await supabase
        .from("notes")
        .select("*", { count: "exact", head: true });

      if (error) {
        console.error(error);
        return;
      }

      setNoteCount(count);
    }

    getNoteCount();
  }, []);

  return (
    <main className="p-8">
      <div className="space-y-4">
        <h1 className="font-crimson uppercase text-6xl">Notes</h1>

        <p className="text-xl italic">{noteCount} Notes</p>

        <RecentlyAdded />
      </div>
    </main>
  );
}

export default Notes;

import { useEffect, useState } from "react";
import { supabase } from "../supabase";
function timeAgo(date) {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);

  if (seconds < 60) {
    return "Just now";
  }

  const minutes = Math.floor(seconds / 60);

  if (minutes < 60) {
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  }

  const hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  }

  const days = Math.floor(hours / 24);

  if (days < 7) {
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  }

  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
function RecentlyAdded({ refreshNotes }) {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    async function fetchNotes() {
      const { data, error } = await supabase
        .from("notes")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching notes:", error);
        return;
      }

      setNotes(data);
    }

    fetchNotes();
  }, [refreshNotes]);
  return (
    <div>
      {notes.map((note) => (
        <a href="" key={note.id}>
          <div className="shadow-sm grid grid-cols-3 w-full p-5 items-center">
            <div>
              <p>{note.title}</p>
              <p>
                {note.category} - {note.subcategory}
              </p>
            </div>

            <span
              className={
                note.status === "completed"
                  ? "bg-[#DCEFF7] text-[#3D7185] w-30 px-4 py-2 rounded-md mx-auto text-center"
                  : "bg-[#FFF0D6] text-[#9A681F] w-30 px-4 py-2 rounded-md mx-auto text-center"
              }
            >
              {note.status}
            </span>

            <span className="ml-auto">{timeAgo(note.created_at)}</span>
          </div>
        </a>
      ))}
    </div>
  );
}

export default RecentlyAdded;

import { useState } from "react";
import { supabase } from "../supabase";
function Addnote({ onNoteAdded }) {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [category, setCategory] = useState("health");
  const [subcategory, setSubcategory] = useState("sleep");
  const [status, setStatus] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("notes")
      .insert([
        {
          title,
          note,
          category,
          subcategory,
          status,
        },
      ])
      .select();
    if (error) {
      console.error("Error adding note:", error);
      return;
    }
    setSubmitted(true);
    onNoteAdded();
    console.log("Note added:", data);
  };

  return (
    <section className="space-y-4">
      <form
        onSubmit={handleSubmit}
        className=" bg-[#E3F2E3] border border-[#C8DFC9]  rounded-sm p-5 space-y-5 "
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="font-bold uppercase text-sm">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="border border-[#C8DFC9] p-2 rounded-sm bg-white"
            placeholder="Give a title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="note" className="font-bold uppercase text-sm">
            Note
          </label>
          <textarea
            id="note"
            name="note"
            className="border border-[#C8DFC9] p-2 rounded-sm bg-white"
            placeholder="What's on your mind?"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex gap-4 items-center">
            <label htmlFor="category" className="font-bold uppercase text-sm">
              Category
            </label>
            <select
              name="category"
              id="category"
              className="bg-white p-2 rounded-sm border border-[#C8DFC9]"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="health">Health</option>
              <option value="nutrition">Nutrition</option>
            </select>
          </div>
          <div className="flex gap-4 items-center">
            <label
              htmlFor="subcategory"
              className="font-bold uppercase text-sm"
            >
              Subcategory
            </label>
            <select
              name="subcategory"
              id="subcategory"
              className="bg-white p-2 rounded-sm border border-[#C8DFC9]"
              value={subcategory}
              onChange={(e) => setSubcategory(e.target.value)}
            >
              <option value="sleep">Sleep</option>
              <option value="circadian">Circadian Rhythm</option>
              <option value="recovery">Recovery</option>
            </select>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="space-x-2">
            <input
              type="radio"
              id="unfinished"
              name="status"
              value="unfinished"
              checked={status === "unfinished"}
              onChange={(e) => setStatus(e.target.value)}
              required
            />
            <label htmlFor="unfinished">Unfinished</label>
          </div>
          <div className="space-x-2">
            <input
              type="radio"
              id="completed"
              name="status"
              value="completed"
              checked={status === "completed"}
              onChange={(e) => setStatus(e.target.value)}
              required
            />
            <label htmlFor="completed">Completed</label>
          </div>
        </div>

        <button className="bg-[#25352A] hover:bg-[#5FAF68] text-white transition-colors duration-200 py-2 px-5 rounded-sm cursor-pointer">
          + Add Note
        </button>
      </form>
      {submitted && (
        <p className="text-[#25352A] font-bold">Note added successfully!</p>
      )}
    </section>
  );
}

export default Addnote;

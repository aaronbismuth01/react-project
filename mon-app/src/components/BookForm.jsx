import { useState } from "react";

// initialData is null when adding a new book, or a book object when editing.
export default function BookForm({ initialData, onSave, onCancel }) {
  const [title, setTitle] = useState(initialData ? initialData.title : "");
  const [author, setAuthor] = useState(initialData ? initialData.author : "");
  const [description, setDescription] = useState(initialData ? initialData.description : "");
  const [coverImage, setCoverImage] = useState(initialData ? initialData.coverImage : "");

  function handleSave() {
    if (!title.trim() || !author.trim()) return;
    onSave(title, author, description, coverImage);
  }

  return (
    <div className="fixed inset-0 bg-stone-900/60 flex items-center justify-center p-4 z-10">
      <div className="bg-white rounded-xl p-6 w-full max-w-sm max-h-[90vh] overflow-y-auto">
        <h3 className="text-lg font-bold text-stone-900 mb-4">
          {initialData ? "Edit book" : "Add a book"}
        </h3>

        <label className="block text-sm font-semibold text-amber-800 mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border-2 border-amber-300 rounded-lg px-3 py-2 mb-3 focus:outline-none focus:border-green-600"
          placeholder="Book title"
        />

        <label className="block text-sm font-semibold text-amber-800 mb-1">Author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full border-2 border-amber-300 rounded-lg px-3 py-2 mb-3 focus:outline-none focus:border-green-600"
          placeholder="Author name"
        />

        <label className="block text-sm font-semibold text-amber-800 mb-1">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border-2 border-amber-300 rounded-lg px-3 py-2 mb-3 focus:outline-none focus:border-green-600"
          placeholder="Short description"
          rows={3}
        />

        <label className="block text-sm font-semibold text-amber-800 mb-1">Cover image URL</label>
        <input
          type="text"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
          className="w-full border-2 border-amber-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:border-green-600"
          placeholder="https://picsum.photos/200/300"
        />

        <div className="flex gap-3">
          <button
            onClick={handleSave}
            className="bg-green-800 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg flex-1"
          >
            Save
          </button>
          <button
            onClick={onCancel}
            className="bg-amber-200 hover:bg-amber-300 text-stone-800 font-semibold px-4 py-2 rounded-lg flex-1"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
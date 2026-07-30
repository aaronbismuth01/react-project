import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import BookCard from "./components/BookCard";
import BookForm from "./components/BookForm";
import Footer from "./components/Footer";
import { useBooks } from "./hooks/useBooks";

export default function App() {
  const { books, loading, error, addBook, editBook, deleteBook, toggleFavorite } = useBooks();

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingBook, setEditingBook] = useState(null); // null = add mode

  const filtered = books.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );
  const favorites = books.filter((b) => b.isFavorite);

  function handleOpenAdd() {
    setEditingBook(null);
    setShowForm(true);
  }

  function handleOpenEdit(book) {
    setEditingBook(book);
    setShowForm(true);
  }

  function handleSave(title, author, description, coverImage) {
    if (editingBook) {
      editBook(editingBook.id, title, author, description, coverImage);
    } else {
      addBook(title, author, description, coverImage);
    }
    setShowForm(false);
  }

  return (
    <div className="min-h-screen bg-amber-50 text-stone-800 flex flex-col">
      <Navbar />
      <div id="home">
        <Hero />
      </div>

      <main className="max-w-5xl mx-auto w-full px-4 py-8 flex-1">
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between mb-8">
          <SearchBar value={search} onChange={setSearch} />
          <button
            onClick={handleOpenAdd}
            className="bg-green-800 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-lg w-full sm:w-auto"
          >
            + Add a book
          </button>
        </div>

        {error && (
          <p className="text-red-600 text-center mb-4 text-sm">{error}</p>
        )}

        {loading ? (
          <p className="text-stone-500 text-center mt-10">Loading books...</p>
        ) : (
          <>
            <section id="library" className="mb-10">
              <h2 className="text-lg font-bold text-stone-900 border-b-4 border-green-600 inline-block pb-1 mb-4">
                Library
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map((book) => (
                  <BookCard
                    key={book.id}
                    book={book}
                    onToggleFav={toggleFavorite}
                    onDelete={deleteBook}
                    onEdit={handleOpenEdit}
                  />
                ))}
              </div>
              {filtered.length === 0 && (
                <p className="text-stone-500 italic mt-4">No books found.</p>
              )}
            </section>

            <section id="favorites">
              <h2 className="text-lg font-bold text-stone-900 border-b-4 border-green-600 inline-block pb-1 mb-4">
                Favorites
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {favorites.map((book) => (
                  <BookCard
                    key={book.id}
                    book={book}
                    onToggleFav={toggleFavorite}
                    onDelete={deleteBook}
                    onEdit={handleOpenEdit}
                  />
                ))}
              </div>
              {favorites.length === 0 && (
                <p className="text-stone-500 italic mt-4">No favorites yet.</p>
              )}
            </section>
          </>
        )}
      </main>

      <Footer />

      {showForm && (
        <BookForm
          initialData={editingBook}
          onSave={handleSave}
          onCancel={() => setShowForm(false)}
        />
      )}
    </div>
  );
}
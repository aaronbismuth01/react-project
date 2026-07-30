import { useState, useEffect } from "react";
import { getBooks, createBook, updateBook, deleteBookApi } from "../services/bookService";

// This hook centralizes all the book logic (fetch, add, edit, delete, favorite)
// and talks to the real MockAPI backend.
export function useBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the books once when the app first loads
  useEffect(() => {
    getBooks()
      .then((data) => setBooks(data))
      .catch(() => setError("Could not load books. Please try again."))
      .finally(() => setLoading(false));
  }, []);

  async function addBook(title, author, description, coverImage) {
    try {
      const newBook = await createBook({
        title,
        author,
        description,
        coverImage,
        isFavorite: false,
      });
      setBooks([...books, newBook]);
    } catch {
      setError("Could not add the book. Please try again.");
    }
  }

  async function editBook(id, title, author, description, coverImage) {
    const existing = books.find((b) => b.id === id);
    try {
      const updated = await updateBook({
        ...existing,
        title,
        author,
        description,
        coverImage,
      });
      setBooks(books.map((b) => (b.id === id ? updated : b)));
    } catch {
      setError("Could not update the book. Please try again.");
    }
  }

  async function deleteBook(id) {
    try {
      await deleteBookApi(id);
      setBooks(books.filter((b) => b.id !== id));
    } catch {
      setError("Could not delete the book. Please try again.");
    }
  }

  async function toggleFavorite(id) {
    const book = books.find((b) => b.id === id);
    try {
      const updated = await updateBook({ ...book, isFavorite: !book.isFavorite });
      setBooks(books.map((b) => (b.id === id ? updated : b)));
    } catch {
      setError("Could not update favorite status. Please try again.");
    }
  }

  return { books, loading, error, addBook, editBook, deleteBook, toggleFavorite };
}
import axios from "axios";

const API_URL = "https://6a66523b189fe5869eb67c27.mockapi.io/books";

// Get all books
export const getBooks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

// Create a new book
export const createBook = async (book) => {
  try {
    const res = await axios.post(API_URL, book);
    return res.data;
  } catch (error) {
    console.error("Error creating book:", error);
    throw error;
  }
};

// Delete a book
export const deleteBookApi = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting book:", error);
    throw error;
  }
};

// Update a book
export const updateBook = async (book) => {
  try {
    const res = await axios.put(`${API_URL}/${book.id}`, book);
    return res.data;
  } catch (error) {
    console.error("Error updating book:", error);
    throw error;
  }
};
import axios from "axios"
// types
import { Book } from "types/books"

export const BOOKS_KEYS = Object.freeze({
  GET_BOOKS: "getBooks",
  ADD_BOOK: "addBook",
  UPDATE_BOOK: "updateBook",
  DELETE_BOOK: "deleteBook",
})

export const getBooks = async () => {
  const response = await axios.get<Book[]>("/books")

  return response.data
}

export const addBook = async (book: Omit<Book, "id">) => {
  const response = await axios.post<Book>(`/books`, book)

  return response.data
}

export const updateBook = async (bookId: number, values: Book) => {
  const response = await axios.put<Book>(`/books/${bookId}`, values)

  return response.data
}

export const deleteBook = async (bookId: number) => {
  const response = await axios.delete<Book>(`/books/${bookId}`)

  return response.data
}

import useSWR from "swr"
// api
import { BOOKS_KEYS, getBooks } from "api/books"

export const useFetchBooks = () => {
  const { data: books, error, isLoading } = useSWR(BOOKS_KEYS.GET_BOOKS, getBooks)

  return { books: books || [], error, isLoading }
}

import { useParams } from "react-router-dom"
// context
import useBooksContext from "context/Books/useBooksContext"

export const useBook = () => {
  const { bookId } = useParams<{ bookId: string }>()
  const { books } = useBooksContext()

  const book = books.find(({ id }) => id === parseInt(bookId!))

  return { book: book }
}

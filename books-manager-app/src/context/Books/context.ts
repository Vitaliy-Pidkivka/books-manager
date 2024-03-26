import { createContext } from "react"
import { Book } from "types/books"

type BooksContext = {
  books: Book[]
  isLoadingBooks: boolean
}

const BooksContext = createContext<BooksContext>({} as BooksContext)

export default BooksContext

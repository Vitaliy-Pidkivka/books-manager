import { useContext } from "react"
import BooksContext from "./context"

export const useBooksContext = () => {
  const context = useContext(BooksContext)

  if (!context) {
    throw new Error("`useBooksContext` should be used within a `BooksProvider`")
  }

  return context
}

export default useBooksContext

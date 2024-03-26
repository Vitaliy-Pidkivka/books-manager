import { ReactNode, useMemo } from "react"
// hooks
import { useFetchBooks } from "./hooks/useFetchBooks"
// context
import BooksContext from "./context"

type BooksProviderProps = {
  children: ReactNode
}

const BooksProvider = ({ children }: BooksProviderProps) => {
  const { books, isLoading } = useFetchBooks()

  const value = useMemo(() => ({ books, isLoadingBooks: isLoading }), [books, isLoading])

  return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
}

export default BooksProvider

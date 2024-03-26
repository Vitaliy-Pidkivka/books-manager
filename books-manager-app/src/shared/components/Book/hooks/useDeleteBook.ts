import { useSWRConfig } from "swr"
import { useNavigate } from "react-router-dom"
import useSWRMutation from "swr/mutation"
// api
import { BOOKS_KEYS, deleteBook } from "api/books"
// context
import useNotificationsContext from "context/Notifications/useNotificationContext"
// constants
import { BOOKS } from "constants/routes"

export const useDeleteBook = () => {
  const navigate = useNavigate()
  const { mutate } = useSWRConfig()
  const { handlePushNotification } = useNotificationsContext()

  const fetcher = async (_: string, options: { arg: number }) => {
    const book = await deleteBook(options.arg)

    return book
  }

  // @ts-ignore
  const { trigger, isMutating } = useSWRMutation<null>(BOOKS_KEYS.DELETE_BOOK, fetcher, {
    onSuccess: () => {
      mutate(BOOKS_KEYS.GET_BOOKS)

      handlePushNotification({
        message: `The book has been successfully deleted`,
        options: { variant: "info" },
      })

      navigate(BOOKS)
    },
  })

  const handleDeleteBook = (bookId: number) => {
    // @ts-ignore
    trigger(bookId)
  }

  return {
    isDeletingBook: isMutating,
    handleDeleteBook,
  }
}

import { useSWRConfig } from "swr"
import useSWRMutation from "swr/mutation"
// api
import { BOOKS_KEYS, addBook } from "api/books"
// context
import useNotificationsContext from "context/Notifications/useNotificationContext"
// types
import { Book } from "types/books"

export const useAddBook = () => {
  const { mutate } = useSWRConfig()
  const { handlePushNotification } = useNotificationsContext()

  const fetcher = async (_: string, options: { arg: Book }) => {
    const book = await addBook(options.arg)

    return book
  }

  // @ts-ignore
  const { trigger, isMutating } = useSWRMutation<Book>(BOOKS_KEYS.ADD_BOOK, fetcher, {
    onSuccess: (data) => {
      mutate(BOOKS_KEYS.GET_BOOKS)

      handlePushNotification({
        message: `${data.title} book has been successfully created`,
        options: { variant: "success" },
      })
    },
  })

  const handleAddBook = (values: Omit<Book, "id">) => {
    // @ts-ignore
    trigger(values)
  }

  return {
    isCreatingBook: isMutating,
    handleAddBook,
  }
}

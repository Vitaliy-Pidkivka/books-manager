import { useSWRConfig } from "swr"
import useSWRMutation from "swr/mutation"
// api
import { BOOKS_KEYS, updateBook } from "api/books"
// context
import useNotificationsContext from "context/Notifications/useNotificationContext"
// types
import { Book } from "types/books"

export const useUpdateBook = () => {
  const { mutate } = useSWRConfig()
  const { handlePushNotification } = useNotificationsContext()

  const fetcher = async (_: string, options: { arg: Book }) => {
    const book = await updateBook(options.arg.id, { ...options.arg })

    return book
  }

  // @ts-ignore
  const { trigger, isMutating } = useSWRMutation<Book>(BOOKS_KEYS.UPDATE_BOOK, fetcher, {
    onSuccess: (data) => {
      mutate(BOOKS_KEYS.GET_BOOKS)
      handlePushNotification({
        message: `${data.title} book has been successfully updated`,
        options: { variant: "success" },
      })
    },
  })

  console.log({ isMutating })

  const handleUpdateBook = (values: Book) => {
    // @ts-ignore
    trigger(values)
  }

  return {
    isUpdatingBook: isMutating,
    handleUpdateBook,
  }
}

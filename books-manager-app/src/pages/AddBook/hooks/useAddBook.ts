import { useSWRConfig } from "swr"
import useSWRMutation from "swr/mutation"
import { useNavigate } from "react-router-dom"
import { useEffect, useRef } from "react"
// api
import { BOOKS_KEYS, addBook } from "api/books"
// context
import useNotificationsContext from "context/Notifications/useNotificationContext"
// constants
import { BOOKS } from "constants/routes"
// types
import { Book } from "types/books"

export const useAddBook = () => {
  const navigate = useNavigate()
  const { mutate } = useSWRConfig()
  const { handlePushNotification } = useNotificationsContext()

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>()

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

      timeoutRef.current = setTimeout(() => navigate(BOOKS), 1500)
    },
  })

  const handleAddBook = (values: Omit<Book, "id">) => {
    // @ts-ignore
    trigger(values)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [timeoutRef])

  return {
    isCreatingBook: isMutating,
    handleAddBook,
  }
}

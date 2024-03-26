import { useSWRConfig } from "swr"
import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import useSWRMutation from "swr/mutation"
// api
import { BOOKS_KEYS, updateBook } from "api/books"
// context
import useNotificationsContext from "context/Notifications/useNotificationContext"
// constants
import { BOOKS } from "constants/routes"
// types
import { Book } from "types/books"

export const useUpdateBook = () => {
  const navigate = useNavigate()
  const { mutate } = useSWRConfig()
  const { handlePushNotification } = useNotificationsContext()

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>()

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

      timeoutRef.current = setTimeout(() => navigate(BOOKS), 1500)
    },
  })

  const handleUpdateBook = (values: Book) => {
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
    isUpdatingBook: isMutating,
    handleUpdateBook,
  }
}

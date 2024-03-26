import { useContext } from "react"
// types
import NotiticationsContext, { TNotificationsContext } from "./context"

const useNotificationsContext = () => {
  const context = useContext<TNotificationsContext>(NotiticationsContext)

  if (!context) {
    throw new Error("`NotificationsContext` should be used within a `NotificationsProvider`")
  }

  return context
}

export default useNotificationsContext

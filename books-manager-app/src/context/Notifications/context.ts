import { createContext } from "react"
import { Notification } from "./NotificationsProvider"

export type TNotificationsContext = {
  notifications: Notification[]
  handlePushNotification: ({ message, options }: Omit<Notification, "key">) => void
  handleRemoveNotification: (key: Notification["key"]) => void
}

const NotificationContext = createContext({} as TNotificationsContext)

export default NotificationContext

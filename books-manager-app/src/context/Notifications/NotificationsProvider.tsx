import { ReactNode, useCallback, useEffect, useMemo, useState } from "react"
import { AlertColor } from "@mui/material"
import { useSnackbar } from "notistack"
// context
import NotificationsContext from "./context"

export interface NotifyOption {
  variant: AlertColor
}

export interface Notification {
  key: number
  message: string
  options: NotifyOption
}

type NotificationsProviderProps = {
  children: ReactNode
}

const NotificationsProvider = ({ children }: NotificationsProviderProps) => {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [displayed, setDisplayed] = useState<string[]>([])

  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const storeDisplayed = (id: string) => {
    setDisplayed([...displayed, id])
  }

  const handlePushNotification = useCallback(({ message, options }: Omit<Notification, "key">) => {
    setNotifications((prev) => [...prev, { message, options, key: new Date().getTime() + Math.random() }])
  }, [])

  const handleRemoveNotification = useCallback((key: Notification["key"]) => {
    setNotifications((prev) => prev.filter((notification) => notification.key !== key))
  }, [])

  useEffect(() => {
    notifications.forEach((notification: any) => {
      if (displayed.includes(notification.key)) return

      enqueueSnackbar(notification.message, {
        onExited() {
          handleRemoveNotification(notification.key)
        },
        ...notification.options,
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      })

      storeDisplayed(notification.key)
    })
  }, [notifications, closeSnackbar, enqueueSnackbar])

  const value = useMemo(
    () => ({ notifications, handlePushNotification, handleRemoveNotification }),
    [notifications, handlePushNotification, handleRemoveNotification]
  )

  return <NotificationsContext.Provider value={value}>{children}</NotificationsContext.Provider>
}

export default NotificationsProvider

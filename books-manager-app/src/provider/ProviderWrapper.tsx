import { PropsWithChildren } from "react"
import { ThemeProvider } from "@mui/system"
// context
import NotificationsProvider from "context/Notifications/NotificationsProvider"
import BooksProvider from "context/Books/BooksProvider"
import SnackbarProvider from "provider/snackbar"
// styles
import { theme } from "styles/theme"

type Props = PropsWithChildren

const ProviderWrapper = ({ children }: Props) => {
  return (
    <SnackbarProvider maxSnack={5}>
      <NotificationsProvider>
        <BooksProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </BooksProvider>
      </NotificationsProvider>
    </SnackbarProvider>
  )
}

export default ProviderWrapper

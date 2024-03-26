import { SnackbarProvider as SnackbarProviderBase, SnackbarProviderProps } from "notistack"
import SnackbarMessage from "shared/components/SnackbarMessage/SnackbarMessage"

const snackbarProvider = (props: SnackbarProviderProps) => {
  return (
    <SnackbarProviderBase
      autoHideDuration={6000}
      Components={{
        default: SnackbarMessage,
        info: SnackbarMessage,
        success: SnackbarMessage,
        warning: SnackbarMessage,
        error: SnackbarMessage,
      }}
      {...props}
    />
  )
}

export default snackbarProvider

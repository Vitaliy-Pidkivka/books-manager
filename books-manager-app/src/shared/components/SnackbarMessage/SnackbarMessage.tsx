import React, { forwardRef } from "react"
import { useSnackbar } from "notistack"
import { Alert, AlertColor, Box, Typography } from "@mui/material"

type SnackbarMessageProps = {
  message: string
  key: number
  variant: AlertColor
}

const SnackbarMessage = forwardRef(
  ({ message, key, variant }: SnackbarMessageProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { closeSnackbar } = useSnackbar()

    return (
      <Box ref={ref} sx={{ display: "flex", alignItems: "center" }}>
        <Alert severity={variant} sx={{ width: "100%" }} onClose={() => closeSnackbar(key)} closeText="Close">
          <Typography variant="body1">{message}</Typography>
        </Alert>
      </Box>
    )
  }
)

SnackbarMessage.displayName = "SnackbarMessage"

export default SnackbarMessage

import { Box, CircularProgress } from "@mui/material"

const Progress = () => {
  return (
    <Box sx={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <CircularProgress sx={{ width: "50px", height: "50px" }} />
    </Box>
  )
}

export default Progress

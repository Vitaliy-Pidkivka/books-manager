import { Grid, Typography } from "@mui/material"
// hooks
import { useBook } from "./hooks/useBook"
// components
import Book from "shared/components/Book"

export const ViewBook = () => {
  const { book } = useBook()

  return (
    <Grid container p={4} sx={{ flexDirection: "column" }}>
      <Typography sx={{ margin: "0 auto", mt: 2, textAlign: "center" }} variant="h1">
        Detailed information of &quot;{book?.title}&quot; book
      </Typography>
      <Grid mt={4} item>
        {book && <Book {...book} disableLink />}
      </Grid>
    </Grid>
  )
}

export default ViewBook

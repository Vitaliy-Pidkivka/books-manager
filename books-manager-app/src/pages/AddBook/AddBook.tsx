import { Grid, Typography } from "@mui/material"
// hooks
import { useAddBook } from "./hooks/useAddBook"
// components
import BookForm from "shared/components/forms/BookForm"

export const ViewBook = () => {
  const { isCreatingBook, handleAddBook } = useAddBook()

  return (
    <Grid container p={4} sx={{ flexDirection: "column" }}>
      <Typography variant="h1" sx={{ margin: "0 auto", mb: 4 }}>
        Create a new book and add it to the existed library
      </Typography>
      <Grid item>
        <BookForm disableSubmit={isCreatingBook} handleSubmit={handleAddBook} />
      </Grid>
    </Grid>
  )
}

export default ViewBook

import { Grid, Typography } from "@mui/material"
import { useBook } from "pages/ViewBook/hooks/useBook"
// components
import BookForm from "shared/components/forms/BookForm"
import { useUpdateBook } from "./hooks/useUpdateBook"

export const ViewBook = () => {
  const { book } = useBook()
  const { isUpdatingBook, handleUpdateBook } = useUpdateBook()

  return (
    <Grid container p={4} sx={{ flexDirection: "column" }}>
      <Typography variant="h1" sx={{ margin: "0 auto", mb: 4, textAlign: "center" }}>
        Update book &quot;{book?.title}&quot; with new information
      </Typography>
      <Grid item>
        <BookForm
          handleSubmit={(values) => handleUpdateBook({ id: book?.id ?? 0, ...values })}
          disableSubmit={isUpdatingBook}
          initialBookValues={book}
        />
      </Grid>
    </Grid>
  )
}

export default ViewBook

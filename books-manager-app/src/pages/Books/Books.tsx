import { Button, Grid, Typography } from "@mui/material"
import { ADD_BOOK } from "constants/routes"
// context
import useBooksContext from "context/Books/useBooksContext"
import { useNavigate } from "react-router-dom"
// components
import Book from "shared/components/Book"
import Progress from "shared/components/Progress"

export const Books = () => {
  const { books, isLoadingBooks } = useBooksContext()
  const navigate = useNavigate()

  if (isLoadingBooks) return <Progress />

  return (
    <Grid container p={4} sx={{ flexDirection: "column" }}>
      <Typography sx={{ margin: "0 auto", mt: 4, textAlign: "center" }} variant="h1">
        Books list witch makes you better
      </Typography>
      <Grid item mt={4}>
        <Button
          sx={{ width: "100%", maxWidth: "480px", margin: "0 auto", display: "block" }}
          variant="contained"
          color="secondary"
          onClick={() => navigate(ADD_BOOK)}
        >
          Add new book
        </Button>
      </Grid>
      <Grid mt={4} container>
        {books?.map((book) => (
          <Grid key={book.id} item xs={12} sm={6} md={4} xl={3} p={2}>
            <Book {...book} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default Books

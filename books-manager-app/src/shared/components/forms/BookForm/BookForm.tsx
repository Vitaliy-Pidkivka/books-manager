import { useFormik } from "formik"
import { Button, TextField, Grid, Paper, FormGroup, Typography } from "@mui/material"
// validation
import validationSchema from "./validationSchema"
// types
import { Book } from "types/books"

type BookFormValues = Omit<Book, "id">

const defaultBookValues: BookFormValues = {
  title: "",
  genre: "",
  author: "",
  description: "",
}

type BookFormProps = {
  handleSubmit: (values: BookFormValues) => void
  disableSubmit?: boolean
  initialBookValues?: BookFormValues
}

// BookForm component
const BookForm = ({ handleSubmit, disableSubmit, initialBookValues = defaultBookValues }: BookFormProps) => {
  const formik = useFormik({
    initialValues: initialBookValues,
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values)
      // Submit your form values here
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 5 }}>
            <FormGroup>
              <TextField
                fullWidth
                id="title"
                name="title"
                label="Title"
                value={formik.values.title}
                onChange={formik.handleChange}
                margin="normal"
              />
              {formik.touched.title && formik.errors.title ? (
                <Typography color="error" variant="body1">
                  {formik.errors.title}
                </Typography>
              ) : null}
            </FormGroup>
            <FormGroup>
              <TextField
                fullWidth
                id="genre"
                name="genre"
                label="Genre"
                value={formik.values.genre}
                onChange={formik.handleChange}
                margin="normal"
              />
              {formik.touched.genre && formik.errors.genre ? (
                <Typography color="error" variant="body1">
                  {formik.errors.genre}
                </Typography>
              ) : null}
            </FormGroup>
            <FormGroup>
              <TextField
                fullWidth
                id="author"
                name="author"
                label="Author"
                value={formik.values.author}
                onChange={formik.handleChange}
                margin="normal"
              />
              {formik.touched.author && formik.errors.author ? (
                <Typography color="error" variant="body1">
                  {formik.errors.author}
                </Typography>
              ) : null}
            </FormGroup>
            <FormGroup>
              <TextField
                fullWidth
                id="description"
                name="description"
                label="Description"
                multiline
                rows={4}
                value={formik.values.description}
                onChange={formik.handleChange}
                margin="normal"
              />
              {formik.touched.description && formik.errors.description ? (
                <Typography color="error" variant="body1">
                  {formik.errors.description}
                </Typography>
              ) : null}
            </FormGroup>
            <Button
              disabled={disableSubmit}
              fullWidth
              color="secondary"
              variant="contained"
              type="submit"
              sx={{ mt: 4 }}
            >
              Submit
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </form>
  )
}

export default BookForm

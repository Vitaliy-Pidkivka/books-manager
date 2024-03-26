import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  genre: Yup.string().required("Genre is required"),
  author: Yup.string().required("Author is required"),
  description: Yup.string().required("Description is required"),
})

export default validationSchema

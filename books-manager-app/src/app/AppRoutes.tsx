import { lazy, Suspense } from "react"
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom"
// constants
import { BOOKS, ADD_BOOK, VIEW_BOOK, UPDATE_BOOK } from "../constants/routes"
// components
import Progress from "shared/components/Progress"

// lazy components
const Books = lazy(() => import("pages/Books"))
const ViewBook = lazy(() => import("pages/ViewBook"))
const CreateBook = lazy(() => import("pages/AddBook"))
const UpdateBook = lazy(() => import("pages/UpdateBook"))

const AppRoutes = () => {
  return (
    <Suspense fallback={<Progress />}>
      <BrowserRouter>
        <Routes>
          <Route path={BOOKS} element={<Books />} />
          <Route path={VIEW_BOOK} element={<ViewBook />} />
          <Route path={ADD_BOOK} element={<CreateBook />} />
          <Route path={UPDATE_BOOK} element={<UpdateBook />} />
          <Route path="*" element={<Navigate to={BOOKS} replace={true} />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default AppRoutes

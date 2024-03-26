import { PropsWithChildren, Suspense } from "react"
import { ThemeProvider } from "@mui/system"
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom"
// context
import BooksProvider from "context/Books/BooksProvider"
// components
import Progress from "shared/components/Progress"
// constants
import { BOOKS } from "constants/routes"
// styles
import { theme } from "styles/theme"

type Props = PropsWithChildren

// test provider for future tests
// I didnt write tests cause it wasn't in requirements
const TestProvideWrapper = ({ children }: Props) => {
  return (
    <BooksProvider>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Progress />}>
          <BrowserRouter>
            <Routes>
              <Route path={BOOKS} element={children} />
              <Route path="*" element={<Navigate to={BOOKS} replace={true} />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </ThemeProvider>
    </BooksProvider>
  )
}

export default TestProvideWrapper

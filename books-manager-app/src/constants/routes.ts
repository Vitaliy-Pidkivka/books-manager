// utils
import { getPath } from "utils/router"

export const BOOKS = "/books"
export const ADD_BOOK = `${BOOKS}/add`
export const VIEW_BOOK = `${BOOKS}/:bookId`
export const UPDATE_BOOK = `${VIEW_BOOK}/update`
// export const EDIT_BOOK = "/:cityName"

export const generateViewBookPath = (bookId: number) => getPath(VIEW_BOOK, { bookId })
export const generateUpdateBookPath = (bookId: number) => getPath(UPDATE_BOOK, { bookId })

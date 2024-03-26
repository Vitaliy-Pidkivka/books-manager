import { generatePath } from "react-router-dom"

export const getPath = (pattern: string, params = {}) => {
  let updatedRoute = pattern

  try {
    updatedRoute = generatePath(pattern, params)
  } catch {
    Object.keys(params).forEach((param) => {
      // @ts-ignore
      updatedRoute = updatedRoute.replace(`:${param}`, params[param])
    })
  }

  return updatedRoute
}

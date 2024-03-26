import React from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { Card, CardContent, Typography, CardHeader, Paper, IconButton } from "@mui/material"
import ModeEditIcon from "@mui/icons-material/ModeEdit"

// constants
import { generateUpdateBookPath, generateViewBookPath } from "constants/routes"
// types
import { Book as BookType } from "types/books"

type BookProps = BookType & {
  disableLink?: boolean
}

const Book: React.FC<BookProps> = ({ author, description, genre, title, id, disableLink }: BookProps) => {
  const navigate = useNavigate()

  return (
    <Paper
      component={disableLink ? Paper : NavLink}
      to={generateViewBookPath(id)}
      sx={{ textDecoration: "none", p: 2, display: "flex", flexDirection: "column", height: "100%" }}
    >
      <Card sx={{ m: 2, display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
        <CardHeader
          title={title}
          subheader={`Genre: ${genre}`}
          titleTypographyProps={{ align: "center" }}
          subheaderTypographyProps={{ align: "center" }}
          action={
            <IconButton
              onClick={(e) => {
                e.preventDefault()
                navigate(generateUpdateBookPath(id))
              }}
              aria-label="edit"
            >
              <ModeEditIcon />
            </IconButton>
          }
          sx={{
            color: "text.secondary",
            backgroundColor: (theme) =>
              theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[700],
          }}
        />
        <CardContent sx={{ flexGrow: "1" }}>
          <Typography variant="h3" color="textSecondary">
            Author: {author}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  )
}

export default Book

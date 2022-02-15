const express = require("express")
const router = express.Router()

const books = require ('./booksController')

router.get('/book', books.index)
router.post('/book/create', books.create)

//Searching added book by id, title or author
router.get('/book/:id', books.showbyID)
router.get('/book/title/:title', books.showbyTitle)
router.get('/book/author/:author', books.showbyAuthor)

router.put('/book/:id', books.update)
router.delete('/book/:id',books.delete)

module.exports = router;
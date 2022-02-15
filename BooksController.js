const createError = require('http-errors')
let bookList = []
let idno = 0


//Show all the book list
exports.index = function (req,res) {
    res.send(bookList)
}

// create a book
exports.create = function (req,res,next) {

    if(!req.body.title){
        return (next(createError(400,"title is required")))
    }
    if(!req.body.author){
        return (next(createError(400,"author is required")))
    }
    bookList.push(
        {
            id: idno,
            title: req.body.title,
            author: req.body.author,
            read: req.body.read
        }
        
    );
    idno++;
    res.send({result:true});
}

//show a book by an id
exports.showbyID = function (req, res, next) {
    const bookId = bookList.find((book) => book.id == req.params.id)
    if (!bookId) {
      return (next(createError(404, "no book with that id")))
    }
    res.send(bookId)
  }

//Search by title
exports.showbyTitle = function (req, res, next) {
    const bookTitle = bookList.find((book) => book.title == req.params.title)
    if (!bookTitle) {
      return (next(createError(400, "no book with that title")))
    }
    res.send(bookTitle)
  }

//Show book by Author
  exports.showbyAuthor = function (req, res, next) {
    const bookAuthor = bookList.find((book) => book.author == req.params.author)
    if (!bookAuthor) {
      return (next(createError(400, "no book with that author")))
    }
    res.send(bookAuthor)
  }

  
//Update a book entry
  exports.update = function (req, res, next) {
    const bookitem = bookList.find((book) => book.id == req.params.id)
    if (!bookitem) {
      return (next(createError(404, "no book with that id")))
    }
    bookList = bookList.map((book) => {
      if (book.id == req.params.id) {
        book.title = req.body.title,
        book.author = req.body.author,
        book.read = req.body.read
      }
      return book
    })
    res.send({ result: true })
  }

//delete a book entry
  exports.delete = function (req, res, next) {
    const bookitem = bookList.find((book) => book.id == req.params.id)
    if (!bookitem) {
      return (next(createError(404, "no book with that id")))
    }
    bookList = bookList.filter((book) => book.id != req.params.id)
    res.send({ result: true })
  }


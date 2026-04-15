const Book = require('../models/bookModel');

let books = [];

// ADD BOOK
exports.addBook = (req, res) => {
    const { title, author } = req.body;

    if (!title || !author) {
        return res.status(400).json({ message: "Title and Author required" });
    }

    const newBook = new Book(books.length + 1, title, author);
    books.push(newBook);

    res.status(201).json({ message: "Book added", data: newBook });
};

// GET BOOKS
exports.getBooks = (req, res) => {
    res.json(books);
};

// UPDATE BOOK
exports.updateBook = (req, res) => {
    const id = parseInt(req.params.id);
    const { title, author } = req.body;

    const book = books.find(b => b.id === id);

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    book.title = title;
    book.author = author;

    res.json({ message: "Book updated", data: book });
};

// DELETE BOOK
exports.deleteBook = (req, res) => {
    const id = parseInt(req.params.id);

    books = books.filter(b => b.id !== id);

    res.json({ message: "Book deleted" });
};
import express from "express";
import mongoose from "mongoose";
import Book from "../model/Books.js";

const router = express.Router();

// Create a new book
router.post("/", async (req, res) => {
  try {
    // console.log(req.body);
    // check if same book is not in the db
    const book = await Book.findOne({ title: req.body.title });
    if (book) return res.status(400).json("Similar Book Already Exist!");

    const newBook = new Book(req.body);
    try {
      const savedBook = await newBook.save();
      savedBook && res.status(200).json("New Book Added Successfully!");
    } catch (err) {
      err && res.status(400).json("Could Not Add New Book!");
    }
  } catch (error) {
    error && res.status(500).json("Something ELse Went Wrong!");
  }
});

// Get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    if (books.length >= 1) return res.status(200).json(books);
    if (books.length < 1) return res.status(200).json("No Books Found!");
  } catch (error) {
    error && res.status(500).json("Something Else Went Wrong!");
  }
});

// Get one book
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json("Book Not Found!");
    book && res.status(200).json(book);
  } catch (error) {}
});

// Search For A Single Book By Title or All Books by An Author
router.post("/search", async (req, res) => {
  try {
    const { q } = req.query;
    // console.log(q);
    let books = await Book.findOne({ title: q });
    if (!books) books = await Book.find({ author: q });
    if (books.length < 1) return res.status(404).json("No Book Found");

    books && res.status(200).json(books);
  } catch (error) {
    error && res.status(500).json("Something Else Went Wrong!");
  }
});

// IF SEARCH FUNCTION IS NEEDED SEPARATELY

// Search For All Books From An Author
// router.post("/search", async (req, res) => {
//   try {
//     const { q } = req.query;
//     console.log(q);
//     const books = await Book.find({ author: q });
//     if (books.length < 1) return res.status(200).json("No Books Uploaded Yet!");

//     if (books.length >= 1) return res.status(200).json(books);
//   } catch (error) {
//     error && res.status(500).json("Something Else Went Wrong!");
//   }
// });

// Update a book
router.put("/:id", async (req, res) => {
  try {
    // find book from the db
    const foundBook = await Book.findById(req.params.id);
    if (!foundBook) return res.status(404).json("Book Not Found!");

    // Update book record
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body);
    if (!updatedBook) return res.status(403).json("Error Updating Book");

    //return a response to the UI
    updatedBook && res.status(200).json("Book Updated Successfully!");
  } catch (error) {
    error && res.status(500).json("Something Else Went Wrong!");
  }
});

// Delete book
router.delete("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json("Book Not Found!");

    try {
      await Book.findByIdAndDelete(req.params.id);
      res.status(200).json("Book Deleted Successfully!");
    } catch (err) {
      err && res.status(403).json("Unable To Delete Book!");
    }
  } catch (error) {
    error && res.status(500).json("Something Else Went Wrong!");
  }
});

export default router;

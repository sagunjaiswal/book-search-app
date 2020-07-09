import React, { Component } from "react";
import Book from "./Book";
import "../bootstrap.min.css";

export default class ResultList extends Component {
  render() {
    return (
      <>
        {this.props.books.length > 0 ? (
          this.props.books.map((book, id) => {
            return (
              <Book
                key={id}
                img={book.volumeInfo.imageLinks.thumbnail}
                bookTitle={book.volumeInfo.title}
                author={book.volumeInfo.authors}
                publisher={book.volumeInfo.publisher}
                publishedDate={book.volumeInfo.publishedDate}
                previewLink={book.volumeInfo.previewLink}
              />
            );
          })
        ) : (
          <p className="text">
            Search the book of your choice in the search bar
          </p>
        )}
      </>
    );
  }
}

import React, { Component } from "react";
import "../App.css";
import request from "superagent";
import ResultList from "./ResultList";
import "../bootstrap.min.css";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchInput: "",
    };
  }

  searchBook = (e) => {
    e.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: this.state.searchInput })
      .then((res) => {
        this.setState({ books: [...res.body.items] });
        // console.log(this.state.books);
      });
  };

  searchHandler = (e) => {
    this.setState({ searchInput: e.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.searchBook}>
          <input
            className="search-bar"
            type="text"
            placeholder="Search"
            onChange={this.searchHandler}
            required
          />
          <button type="submit" className="search-btn">
            🧡
          </button>
        </form>
        <div className="results">
          <ResultList books={this.state.books} />
        </div>
      </div>
    );
  }
}

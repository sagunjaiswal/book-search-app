import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "../bootstrap.min.css";
import "../App.css";

export default class Book extends Component {
  render() {
    return (
      <>
        <CardGroup>
          <Card className="card-style">
            <a href={this.props.previewLink}>
              <Card.Img
                variant="top"
                src={this.props.img}
                className="card-image"
              />

              <Card.Body>
                <Card.Title>{this.props.bookTitle}</Card.Title>
                <Card.Text>{this.props.author}</Card.Text>
                <Card.Text>{this.props.publisher}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">{this.props.publishedDate}</small>
              </Card.Footer>
            </a>
          </Card>
        </CardGroup>
      </>
    );
  }
}

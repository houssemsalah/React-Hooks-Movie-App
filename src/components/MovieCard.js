import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

function MovieCard({ movie }) {
  return (
    <div >
      
     
      <Card style={{display:"flex",justifyContent:"space-between",  width: "22rem",height: "32rem" , marginTop:"30px",marginBottom:"30px" }}>
        <Card.Img
          variant="top"
          src={movie.posterUrl}
          style={{ height: "350px" }}
        />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{movie.title}</Card.Title>
          <Card.Text style={{ color: "black", height: "50px" }}>
            {movie.description}
          </Card.Text>
          <div style={{display:"flex" , justifyContent:"space-around"}}>
          <ReactStars
            count={5}
            value={movie.rate}
            edit={false}
            //onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
            
          />
          </div>
        </Card.Body>
      </Card>
   
      
    </div>
  );
}

export default MovieCard;

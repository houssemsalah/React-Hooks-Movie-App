import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MovieCard from "./MovieCard";
import MovieFilter from "./MovieFilter";


const MovieListe = ({ movies  }) => {
  const [text, settext] = useState('')
  const [rate, setrate] = useState(0)

  const filterText=(text)=>{
      settext(text)

  }

  const filterRate=(rate)=>{
      setrate(rate)}
  return(
    <div>
    <MovieFilter filterText={filterText} filterRate={filterRate}/>
  <Container style={{display:"flex",flexWrap:"wrap"  , justifyContent:"space-around" ,marginTop:"50px"}}>
    {movies
    .filter((movie) => movie.title.includes(text) && movie.rate>=rate)
    .map((movie) => (
      <MovieCard movie={movie} />
    ))}
  </Container>

 </div>
  )
};

export default MovieListe;

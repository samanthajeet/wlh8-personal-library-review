import React from 'react';

function MovieCard(props){
  return(
    <div>
      <h1>{props.title}</h1>
      <img src={props.poster} alt={props.title} style={{ width: '15rem' }} />
    </div>
  )
}


export default MovieCard;
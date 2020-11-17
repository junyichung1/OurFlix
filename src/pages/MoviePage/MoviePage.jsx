import React from "react";
import moviesApi from '../../utils/movies-api';



  function MoviePage(props) {
    const base_url= "http://image.tmdb.org/t/p/"
    let size = "w185_and_h278_bestv2/"
    console.log(size)
    let trending = []
    if(props.moviesList.results) {
      trending = props.moviesList.results.map(obj => {
        console.log(obj.poster_path)
        return <>
          <img src={base_url + size + obj.poster_path}></img> <h3>{obj.title}</h3>
        </>
      })
    }
    return(
      <div>
        <h1>Trending Movies This Week</h1>
        {trending}

      </div>
    )
  }





export default MoviePage;
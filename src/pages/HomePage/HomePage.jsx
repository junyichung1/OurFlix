import React from "react";
import moviesApi from '../../utils/movies-api';



  function HomePage(props) {
    console.log(props.info)
    return(
      <div>
        {props.info}
      </div>
    )
  }





export default HomePage;
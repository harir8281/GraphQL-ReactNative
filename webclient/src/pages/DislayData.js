import React, { useState } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import "./style/DisplayData.css";

import { QUERY_ALL_USERS } from "../graphql/graphql";
import { QUERY_ALL_MOVIES } from "../graphql/graphql";
import { QUERY_MOVIE_BYNAME } from "../graphql/graphql";

function DislayData() {
  const { data } = useQuery(QUERY_ALL_USERS);
  const { data: moviedata } = useQuery(QUERY_ALL_MOVIES);
  const [FetchMovie, { data: movieSearchedData }] =
    useLazyQuery(QUERY_MOVIE_BYNAME);

  const [movieSearched, setMovieSearched] = useState("");

  console.log(movieSearched);

  return (
    <div className="container">
      <div className="left-section">
        <p>User-list</p>
        {data &&
          data.users.map((user) => {
            return (
              <div className="user-detail-container">
                <p>
                  {user.name} <br /> {user.age} <br />
                  {user.nationality}
                </p>
              </div>
            );
          })}
      </div>
      <div className="middle-section">
        <input
          type="text"
          placeholder="interstellar"
          onChange={(e) => {
            setMovieSearched(e.target.value);
          }}
        />
        <button onClick={()=>{FetchMovie({variables:{
          name:movieSearched
        }})}}>Fetch</button>
      </div>
      <div className="search-section">
        {movieSearchedData && (
          <div>
            {" "}
            <p>
              {movieSearchedData.movie.name},{movieSearchedData.movie.year}
            </p>
          </div>
        )}
      </div>
      <div className="getall-movie-section">
        <p>Movie list</p>
        {moviedata &&
          moviedata.movies.map((movie) => {
            return (
              <div className="movie-detail-conatiner">
                <p> {movie.name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default DislayData;

import React, { useState } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import "./style/DisplayData.css";

import { QUERY_ALL_USERS } from "../graphql/graphql";
import { QUERY_ALL_MOVIES } from "../graphql/graphql";
import { QUERY_MOVIE_BYNAME } from "../graphql/graphql";

//pages
import CreateData from "./CreateData";
import UpdateUsername from "./UpdateUsername";
import DeleteUser from "./DeleteUser";

function DislayData() {
  const { data,refetch } = useQuery(QUERY_ALL_USERS);
  const { data: moviedata } = useQuery(QUERY_ALL_MOVIES);
  const [FetchMovie, { data: movieSearchedData,error:movieError }] =
    useLazyQuery(QUERY_MOVIE_BYNAME);

  const [movieSearched, setMovieSearched] = useState("");


  return (
    <div className="container">
      <div className="left-input-section">
       <CreateData/>
       <UpdateUsername/>
       </div>
      <div className="getall-user-section">
        <p>User-list</p>
        <button onClick={refetch()}>Fetch</button>
        {data &&
          data.users.map((user) => {
            return (
              <div className="user-detail-container">
                <p>
                {user.username}<br/>
                  {user.name} <br /> {user.age} <br />
                  {user.nationality}
                </p>
              </div>
            );
          })}
      </div>
      <div className="right-input-section">
        <DeleteUser/>
      </div>
      <div className="search-section">
        <p>search movie by name get year</p>
        <input
        className="input"
          type="text"
          placeholder="interstellar"
          onChange={(e) => {
            setMovieSearched(e.target.value);
          }}
        />
        <button
          onClick={() => {
            FetchMovie({
              variables: {
                name: movieSearched,
              },
            });
          }}
        >
          Fetch
        </button>
        {movieSearchedData && (
          <div className="movie-detail-conatiner">
            {" "}
            <p>{movieSearchedData.movie.year}</p>
          </div>
        )}
        {movieError && (
          <div className="movie-detail-conatiner">
            {" "}
            <p>There was an error for fetching data</p>
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

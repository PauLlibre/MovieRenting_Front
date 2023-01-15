import React, { useEffect, useState } from "react";
import "./UserDetails.scss";
import { useParams } from "react-router";
import UserService from "../../services/UserService";
import MovieCard from "../../Components/MoviesCard/MovieCard";

export default function UserDetails() {
  const [userDetail, setUserDetail] = useState({});
  const token = localStorage.getItem("auth-key");
  const { role } = JSON.parse(localStorage.getItem("user"));

  const { id } = useParams();

  useEffect(() => {
    userDetails();
  }, []);

  const userDetails = async () => {
    const data = await UserService.getById(token, id);
    console.log(data);
    setUserDetail(data);
  };

  const handleDelete = () => {
    userDetails();
  };

  console.log(userDetail.role);
  const rents = userDetail.rented_movies;
  const rentedMovies = rents
    ? rents.map((rent) => {
        return (
          <MovieCard
            title={rent.title}
            key={rent.id}
            id={rent.id}
            image={rent.poster_path}
            price={Math.floor(Math.random() * 10).toFixed(2)}
            update={handleDelete}
            userId={userDetail._id}
            backdropPath={rent.backdrop_path}
            user_role={role}
          />
        );
      })
    : null;
  return (
    <div className="user">
      <div className="user-title ">{userDetail.name}</div>
      <div className="user-info ">
        <div>
          <span>ROLE: </span>
          {userDetail.role}
        </div>
        <div>
          <span>User From: </span> {userDetail.createdAt}
        </div>
        <div>
          <span>EMAIL: </span>
          {userDetail.email}
        </div>
      </div>
      <div className="rented-movies movies-list-animation">
        <div className="rented-movies-title">
          <span>{userDetail.name}</span>'s rented movies
        </div>
        <div className="movies-list ">{rentedMovies}</div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import "./UserDetails.scss";
import { useParams } from "react-router";
import UserService from "../../services/UserService";
import MovieCard from "../../Components/MoviesCard/MovieCard";

export default function UserDetails() {
  const [userDetail, setUserDetail] = useState({});
  const token = localStorage.getItem("auth-key");

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

  console.log(userDetail.id);
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
          />
        );
      })
    : null;
  return (
    <div className="user">
      <div>{userDetail.name}</div>
      <div>{userDetail.role}</div>
      <div>User From: {userDetail.createdAt}</div>
      <div>{userDetail.email}</div>

      <div className="movies-list">{rentedMovies}</div>
    </div>
  );
}

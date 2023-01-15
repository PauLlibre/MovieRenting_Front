import React, { useEffect } from "react";
import MoviesList from "./Containers/MoviesList/MoviesList";
import { MovieDbService } from "./services/MovieDbService";
import NavBar from "./Components/NavBar/NavBar";
import { useState } from "react";
import Home from "./Containers/Home/Home";
import Login from "./Containers/Login/Login";
import Register from "./Containers/Register/Register";
import Admin from "./Containers/Admin/Admin";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Router,
  BrowserRouter,
  Link,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import "./App.scss";
import { dblClick } from "@testing-library/user-event/dist/click";
import MovieDetails from "./Containers/MovieDetails/MovieDetails";
import UserDetails from "./Containers/UserDetails/UserDetails";

export default function App() {
  return (
    <div className="root">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MoviesList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

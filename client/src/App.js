import React from "react";
import { Container } from "@material-ui/core";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import PostDetails from "./components/PostDetails/PostDetails";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";

const App = () => {
  const LoggedInRouter = () => {
    const user = JSON.parse(localStorage.getItem("profile"));
    if (!user) {
      return <Auth />;
    }
    return <Outlet />;
  };

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to={'/posts'}/>} />
          <Route path="/posts" element={<Home />} />
          <Route path="/posts/search" element={<Home />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route element={<LoggedInRouter />}>
            <Route path="/auth" element={<Auth />} />
          </Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
